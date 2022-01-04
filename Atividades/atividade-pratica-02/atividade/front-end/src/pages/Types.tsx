import React, { useEffect, useState } from "react";
import { getTypesService } from "../services/getTypesService";

// import { Container } from './styles';

const Types: React.FC = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    getTypesService().then((response) => {
      setTypes(response.data);
    });
  }, []);

  return (
    <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
      <div className="flex flex-col justify-center h-full">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Tipos de protocolos</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Nome</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Preço</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {types.map((type) => {
                    return (
                      <tr>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="font-medium text-gray-800">
                              {type.name}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{type.price}</div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Types;
