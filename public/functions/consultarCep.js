function consultarCep() {
    const cep = document.getElementById("cep").value;
    const warning = document.getElementById("invalid");

    console.log(cep);

    axios.get(`http://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            console.log(response.data)

            if (response.data.uf == undefined) {
                warning.style.display = "block";
            } else {
                warning.style.display = "none";
                document.getElementById('codep').innerHTML = cep;
                document.getElementById('uf').innerHTML = response.data.uf;
                document.getElementById('cidade').innerHTML =    response.data.localidade
                document.getElementById('bairro').innerHTML =    response.data.bairro
                document.getElementById('rua').innerHTML =    response.data.logradouro
                document.getElementById('ibge').innerHTML =    response.data.ibge
            }
        })
        .catch(error => {
            console.log(error)
            warning.style.display = "block";
            area.value = "CEP Inválido"
        })
}