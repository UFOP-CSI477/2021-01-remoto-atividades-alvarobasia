import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

// import { Container } from './styles';

const TopBar: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <nav className="flex items-center bg-gray-800 p-3 flex-wrap">
      <a href="#" className="p-2 mr-4 inline-flex items-center">
        <span className="text-xl text-white font-bold uppercase tracking-wide">
          Protocolos
        </span>
      </a>
      <button
        className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        data-target="#navigation"
      >
        <i className="material-icons">menu</i>
      </button>
      <div
        className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
        id="navigation"
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          {isAuthenticated && (
            <a
              href="#"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Usuários</span>
            </a>
          )}
          {isAuthenticated && (
            <a
              href=""
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Gerenciar protocolos</span>
            </a>
          )}
          {isAuthenticated && (
            <a
              href="/types"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Gerenciar tipos de protocolos</span>
            </a>
          )}
          <a
            href="/types/list"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >
            <span>Tipos de protocolos</span>
          </a>
          {!isAuthenticated && (
            <a
              href="/register"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Se registrar</span>
            </a>
          )}
          {!isAuthenticated && (
            <a
              href="/login"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Fazer Login</span>
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
