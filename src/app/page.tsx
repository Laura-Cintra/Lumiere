'use client'

import { AuthContext } from "@/context";
import HomeApresentacao from "./components/HomeApresentacao";
import HomeLogada from "./components/HomeLogada";
import { useContext } from "react";

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    user?.nome === "" ? <HomeApresentacao /> : <HomeLogada />
  );
}
