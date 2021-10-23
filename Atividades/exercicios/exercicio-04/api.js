"use strict";

function getCEP() {
  const cep = document.getElementById("CEP").value;
  console.log(cep);
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("cep").innerHTML = data.cep;
      document.getElementById("log").innerHTML = data.logradouro;
      document.getElementById("bairro").innerHTML = data.bairro;
      document.getElementById("loc").innerHTML = data.localidade;
      document.getElementById("UF").innerHTML = data.uf;
    });
}
