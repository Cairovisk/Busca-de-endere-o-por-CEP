$(document).ready(function() {
    $("#consultaBotao").click(function() {
        var getCep = $("#inputCep").val(); //Variável que recebe o CEP

        // Caso o usuário não informe o cep
        if(getCep == "") {
            alert("Informe o CEP e Clique no botão de consulta.");
        }

        // montagem do URL com caminho para o CEP digitado
        var urlFinal = "https://viacep.com.br/ws/"+ getCep +"/json/";


        // Requerimento do objeto JSON e manipulação com seus dados
        $.ajax({
            url: urlFinal,
            type: "get",
            dataType: "json",
            success: function(dados) {
                console.log(dados);
                // Atribuição dos valores de endereço aos respectivos campos
                // na consulta
                $("#inputLogradouro").val(dados.logradouro);
                $("#inputComplemento").val(dados.complemento);
                $("#inputBairro").val(dados.bairro);
                $("#inputLocalidade").val(dados.localidade);
                $("#inputUf").val(dados.uf);
            }
        });
    });
}); 
    

