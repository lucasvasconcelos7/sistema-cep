$(function() {
    $("#submit").click(onSubmitClick);

    function onSubmitClick() {
        $.getJSON("https://api.postmon.com.br/v1/cep/" + $("#cep").val())
            .success(function(json) {
                alert("Logradouro: " + json.logradouro + "\n" +
                    "Bairro: " + json.bairro + "\n" +
                    "CEP: " + json.cep + "\n" +
                    "Cidade: " + json.cidade + "\n" +
                    "Estado: " + json.estado);
            })
            .error(function() {
                alert("CEP Inválido");
            })
    };
});