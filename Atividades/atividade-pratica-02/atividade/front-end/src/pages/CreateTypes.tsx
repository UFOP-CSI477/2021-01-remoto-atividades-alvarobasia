import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTypeService } from "../services/createTypeService";
import { registerService } from "../services/registerService";

// import { Container } from './styles';

const CreateTypes: React.FC = () => {
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");

  const nav = useNavigate();
  function onSubmit() {
    createTypeService(name, price);
  }
  return (
    <div className="font-sans h-2/4">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-slate-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div className="card bg-slate-600 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label className="block mt-3 text-sm text-gray-700 text-center font-semibold">
              Registrar tipo de protocolo
            </label>
            <div className="mt-10">
              <div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="Nome"
                  placeholder="Nome"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-4"
                />
              </div>

              <div>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  placeholder="Preço"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-4"
                />
              </div>

              <div className="mt-7">
                <button
                  onClick={onSubmit}
                  className="bg-slate-900 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  Registrar tipo de protocolo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTypes;
