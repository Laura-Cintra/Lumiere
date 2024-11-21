"use client"
import { usePathname } from "next/navigation"; 
import Cabecalho from "@/app/components/Cabecalho";
import Rodape from "@/app/components/Rodape"; 
import { ReactNode } from "react"; 
import { HeaderFooterContainer, MainContent } from "@/styles/styled";
import "@/styles/global-styled.ts"

export function HeaderFooter ({ children }: { children: ReactNode }) {
  const pathname = usePathname(); // Obtém o caminho atual da URL.

  // Define as rotas onde o Cabeçalho e o Rodapé não devem aparecer.
  const rotasIndesejadas = pathname === "/login" || 
                           pathname === "/cadastro"

  return (
    <HeaderFooterContainer>
      {/* Renderiza o Cabeçalho apenas se a rota não for indesejada */}
      {!rotasIndesejadas && <Cabecalho />}
      <MainContent>
          {children} 
      </MainContent>
      {!rotasIndesejadas && <Rodape />}
    </HeaderFooterContainer>
  );
}