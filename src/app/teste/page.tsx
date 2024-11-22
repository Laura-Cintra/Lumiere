// "use client"

// import { useEffect, useState } from "react";
// import ModalQuiz from "../components/ModalQuiz";
// import Image from "next/image";
// import q1 from "@/assets/games/quiz1.png"

// export default function Teste(){
//     const [open, setOpen] = useState<boolean>(false)

//     const [index, setIndex] = useState<number>(0)
//     const [acertos, setAcertos] = useState<number>(0)

//     const resgatarPerguntas = async => {
//         try {
//             const response = await fetch("http://localhost:8080/quizresource/buscarPerguntas/1");
//             const data = await response.json(); // Aguarde a Promise resolver
//             const tamanho = data.length; // Obtenha o tamanho do array
//             console.log("Dados:", data);
//             console.log("Número de questões:", tamanho);
//         } catch (error) {
//             console.error("Erro ao buscar perguntas:", error);
//         }
//     }
//     useEffect(({
//         resgatar
//     }, []))

//     return(
//         <div>
//         <button onClick={() => setOpen(true)}>aperte</button>
//         <ModalQuiz open={open} onClose={() => setOpen(false)}>
//             <main>
//                 <div className="start">
//                     <p>Titulo do game</p>
//                     <Image src={q1} alt="Foto"/>
//                     <button>Começar</button>
//                 </div>
//                 {/* <div className="content">
//                     <span className="spnQtd"></span>
//                     <span className="question"></span>
//                     <div className="answers"></div>
//                 </div>
//                 <div className="finish">
//                 <span></span>
//                 <button>Reiniciar</button>
//                 </div> */}
//   </main>
//         </ModalQuiz>
//         </div>
//     )
// }