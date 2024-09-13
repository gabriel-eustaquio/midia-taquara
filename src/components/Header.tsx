import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

type THeader = React.ComponentProps<"header"> & {
  titulo: string;
}

function Header(propriedades: THeader) {
  return (
    <>
      <header className={`container ${styles.header}`}>
        <h1>{propriedades.titulo}</h1>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/atalhos-iluminacao">Atalhos - Iluminação</NavLink></li>
          <li><NavLink to="/atalhos-projecao">Atalhos - Projeção</NavLink></li>
          <li><NavLink to="/lista-de-cores-para-louvor">Lista de cores para Louvor</NavLink></li>
          <li><NavLink to="/setlist-louvor">Setlist Louvor</NavLink></li>
        </ul>
      </header>
    </>
  )
}

export default Header;