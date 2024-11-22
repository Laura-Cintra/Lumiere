"use client"

import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useState, useRef } from "react";
import Image from "next/image";
import { storage } from "@/firebase";

export default function Teste() {
  const [imgURL, setImgURL] = useState<string>("");
  const [progressPorcent, setProgressPorcent] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const file = fileInputRef.current?.files?.[0]; // Referência ao input
    if (!file) {
      alert("Por favor, selecione um arquivo!");
      return;
    }

    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressPorcent(progress);
      },
      (error) => {
        alert("Erro no upload: " + error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgURL(downloadURL);
        });
      }
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input type="file" ref={fileInputRef} />
          <button type="submit">Enviar</button>
        </form>
        {!imgURL && <p>{progressPorcent}%</p>}
        {imgURL && (
          <Image
            src={imgURL}
            alt="Imagem enviada"
            height={200}
            width={200}
            unoptimized
          />
        )}
      </header>
    </div>
  );
}
