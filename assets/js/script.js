$(function() {
    $("#submit").click(onSubmitClick);

    function onSubmitClick() {
        $.getJSON("https://api.postmon.com.br/v1/cep/" + $("#cep").val())
            .success(function(json) {
                document.getElementById('result').innerHTML = "Logradouro: " + json.logradouro + "<br>" +
                    "Bairro: " + json.bairro + "<br>" +
                    "CEP: " + json.cep + "<br>" +
                    "Cidade: " + json.cidade + "<br>" +
                    "Estado: " + json.estado;

            })
            .error(function() {
                alert("CEP Inválido");
            })
    };
});