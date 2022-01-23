function validar_ano() {
    var ano = f1.ano;
    if (ano.value >= 1900 && ano.value <= 2022) {
        return true;
    } else {
        alert("O ano do livro está incorreto!!\nSomente entre 1900 a 2022");
        ano.focus();
        ano.value = null
    }
}


function relogio() {

	var data=new Date();
	var min=data.getMinutes();
	var seg=data.getSeconds();
				
    if(min < 10){
		min="0"+min;
	}
	if(seg < 10){
		seg="0"+seg;
    }
        
	var hora = min + ":" + seg;
    return document.getElementById("rel").value = hora;
}
var timer = setInterval(relogio, 1000);