"use client"

import { DadosUserStyle } from "@/styles/styled"
import Image from "next/image"
import { IoCameraOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";

//imagens
import user_foto from "@/assets/user.png"
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "@/context";
import { UsuarioProps } from "@/types";
import Modal from "./Modal";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/firebase";



export default function DadosUser() {
  const [imgURL, setImgURL] = useState<string>("");
  const { user } = useContext(AuthContext);
  const [error, setError] = useState<string | null>(null);
  const [usuario, setUsuario] = useState<UsuarioProps>({
    cep: "",
    data_nascimento: "",
    data_registro: "",
    email: "",
    id_usuario: 0,
    nick_name: "",
    nome: "",
    porc_atual: 0,
    quant_pontos: 0,
    senha: "",
  });
  const dataString = usuario.data_registro;
  const dataRegistro = new Date(dataString);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => [setIsModalOpen(false), setError(null)];
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Fetch dados do usuário e da foto
  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        if (!user?.email) {
          console.error("Usuário não autenticado");
          return;
        }

        console.log("Email:", user.email);
        const response = await fetch(`http://localhost:8080/usuarioresource/exibirUsuarioCompleto/${user.email}`);
        if (response.ok) {
          const data = await response.json();
          setUsuario(data);
          console.log("Informações buscadas da base com sucesso!");
          fetchFoto(data.email); // Buscar a foto do usuário
        } else {
          console.error("Falha ao buscar informações do usuário");
        }
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      }
    };

    const fetchFoto = async (email: string) => {
      try {
        const response = await fetch(`http://localhost:8080/usuarioresource/exibirFoto/${email}`);
        if (response.ok) {
          const dadosFoto = await response.json();
          if (dadosFoto.foto && dadosFoto.foto !== " ") {
            setImgURL(dadosFoto.foto);
          }
        } else {
          console.error("Falha ao buscar foto do usuário");
        }
      } catch (error) {
        console.error("Erro ao buscar foto:", error);
      }
    };

    fetchUsuario();
  }, [user?.email]);

  // Excluir conta
  const handleDeleteAccount = async () => {
    if (!user || !user.id_usuario) {
      console.error("Usuário não autenticado ou ID ausente");
      return;
    }

    try {
      const cabecalho = {
        method: "DELETE",
      };

      const response = await fetch(`http://localhost:8080/usuarioresource/deletarUsuario/${user.id_usuario}`, cabecalho);
      if (response.ok) {
        alert("Conta excluída!");
        console.log("Conta excluída!");
        closeModal();
        setError(null);
      } else {
        const error = await response.json();
        setError(error.message || "Erro desconhecido ao excluir conta");
        console.error("Erro:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao excluir conta:", error);
    }
  };

  // Alterar foto
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const file = fileInputRef.current?.files?.[0];
    if (!file) return;

    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    const updatePhotoURLInDatabase = async (downloadURL: string) => {
      if (!user?.email) return;

      try {
        const cabecalho = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ imgURL: downloadURL }),
        };

        const response = await fetch(`http://localhost:8080/usuarioresource/atualizaFoto/${user.email}`, cabecalho);
        if (response.ok) {
          alert("Foto alterada com sucesso");
        } else {
          const errorData = await response.json();
          alert(errorData.message || "Erro ao atualizar a foto");
        }
      } catch (error) {
        console.error("Erro ao atualizar foto:", error);
        alert("Erro ao atualizar foto");
      }
    };

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log("Progresso do upload:", progress);
      },
      (error) => {
        console.error("Erro ao fazer upload:", error);
        alert("Erro ao fazer upload:"+ error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgURL(downloadURL);
          updatePhotoURLInDatabase(downloadURL);
        });
      }
    );
  };

  return (
    <DadosUserStyle>
      <FaRegTrashAlt className="icon-deletar" title="Excluir a conta" onClick={openModal} />
      <form onSubmit={handleSubmit}>
        <div className="upload">
          {imgURL ? (
            <Image src={imgURL} alt="Imagem do perfil" height={140} width={140} layout="intrinsic" />
          ) : (
            <Image src={user_foto} alt="fotoPerfil" />
          )}

          <div className="round">
            <input type="file" name="fileInput" accept="image/*" ref={fileInputRef} />
            <IoCameraOutline />
          </div>
        </div>
        <div>
          <input type="submit" value="Alterar foto" className="btn-alterar-foto" />
        </div>
      </form>
      <div className="informacoes">
        <h2>{usuario.nome}</h2>
        <p>{usuario.nick_name}</p>
      </div>
      <div className="informacoes-extras">
        <p>{usuario.quant_pontos} WattsCoins</p>
        <p>{usuario.porc_atual}% de consumo</p>
        <p>Desde {dataRegistro.toLocaleDateString()}</p>
      </div>

      <Modal open={isModalOpen} onClose={closeModal} onAction={handleDeleteAccount}>
        <h2>Confirmar exclusão?</h2>
        <p>Excluir conta: {usuario.nick_name}</p>
        <p>Esta ação não pode ser desfeita.</p>
        {error && <p className="texto_erro" style={{ color: "red" }}>{error}</p>}
      </Modal>
    </DadosUserStyle>
  );
}
