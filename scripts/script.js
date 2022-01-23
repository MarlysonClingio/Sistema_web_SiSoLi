function validar_ano() {
    var ano = f1.ano // Pegando o valor do input com id ='ano'
    // Validação do ano
    if (ano.value >= 1900 && ano.value <= 2022) {
        return true;
    } else {
        alert("O ano do livro está incorreto(Somente entre 1900 a 2022)");
        ano.focus();
        ano.value = null
    };
}



function tempo_regressivo(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        // Convertendo para inteiro e organizando os minutos e segundos
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        // Formatando com '0' na frente os números de 0-9
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        // Fazendo a formatação do display
        display.textContent = minutes + ":" + seconds;
        // Fazendo a subtração da contagem até 0
        if (--timer < 0) {
            // Não permite que a contagem utrapasse o zero e comece
            // números negativos
            duration = 0;
            timer = duration;
            
            // Lista de inputs com os ids dos elementos que irão serem
            // desativados quando a contagem zerar.
            let list_input = [];
            list_input.push(document.querySelector("#ano"));
            list_input.push(document.querySelector("#titulo"));
            list_input.push(document.querySelector("#inputGroupSelect"));
            list_input.push(document.querySelector("#editora"));
            list_input.push(document.querySelector("#autor"));
            list_input.push(document.querySelector("#issn"));
            list_input.push(document.querySelector("#edicao"));
            list_input.push(document.querySelector("#button"));

            // Desabilitando todos os inputs
            list_input.forEach(function (input) {
                input.disabled = true;
            });
        }
    }, 1000); // Intervalo de 1 em 1 segundo para o display do tempo regressivo.
}


function chamando_tempo_regressivo(){
    window.onload = function () {
        var duration = 60 * 60; // Converter a duração para segundos
        // Selecionando o id da div em que será mostrado no display
        display = document.querySelector('#timer');
        tempo_regressivo(duration, display); // Iniciando o tempo
    };
}


function add_livros() {
    // Iniciando o documento em que será realizado a função
    $(document).ready(function () {
        // Preparando o formulário quando for submetido
      $("#form_prepare").submit(function () {
        var $this = $(this);

        // Pegandos os valores dos ids dos inputs e preparando as linhas
        var tr =
          "<tr>" +
          "<td>" +
          $this.find("select[id='inputGroupSelect']").val() +
          "</td>" +
          "<td>" +
          $this.find("input[name='titulo']").val() +
          "</td>" +
          "<td>" +
          $this.find("input[name='autor']").val() +
          "</td>" +
          "<td>" +
          $this.find("input[name='edicao']").val() +
          "</td>" +
          "<td>" +
          $this.find("input[name='issn']").val() +
          "</td>" +
          "<td>" +
          $this.find("input[name='ano']").val() +
          "</td>" +
          "<td>" +
          $this.find("input[name='editora']").val() +
          "</td>" +
          "</tr>";

        // Adicionandos os valores no corpo da tabela e adicionando o
        // evento de duplo clique para remoção
        $("#grid")
          .find("#body")
          .append(tr)
          .find("tr")
          .dblclick(function () {
            $(this).remove();
          });

        return false;
      });
    });
}