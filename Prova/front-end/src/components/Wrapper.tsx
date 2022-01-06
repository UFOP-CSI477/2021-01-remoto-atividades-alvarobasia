import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Wrapper: React.FC = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      <nav>
        <a href="#">
          <span>Protocolos</span>
        </a>
        <button>
          <i>menu</i>
        </button>
        <div>
          <div>
            {isAuthenticated && (
              <a href="#">
                <span>Usuários</span>
              </a>
            )}
            {isAuthenticated && (
              <a href="">
                <span>Gerenciar protocolos</span>
              </a>
            )}
            {isAuthenticated && (
              <a href="/registros">
                <span>Registros</span>
              </a>
            )}
            <a href="/types/list">
              <span>Tipos de protocolos</span>
            </a>
            {!isAuthenticated && (
              <a href="/register">
                <span>Se registrar</span>
              </a>
            )}
            {!isAuthenticated && (
              <a href="/login">
                <span>Fazer Login</span>
              </a>
            )}
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Wrapper;
