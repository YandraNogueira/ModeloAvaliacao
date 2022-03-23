function pegarDados(){
    let row = document.querySelector('hr'); 
    row.classList.add('show'); 

	let result = document.querySelector('.hide'); 
    result.classList.remove('hide'); 
    result.classList.add('show');

    let camText = document.getElementById("texto").value;
    document.getElementById("camText").innerHTML = ("Resposta 1:" + camText);

    let checkbox_octal = document.getElementById("octal");
    let checkbox_binario = document.getElementById("binario");
    let checkbox_decimal = document.getElementById("decimal");
    let checkbox_hexadecimal = document.getElementById("hexadecimal");


    if(checkbox_octal.checked){
        document.getElementById("campoOctal").innerHTML = ("Resposta 2: Sistema Octal")
    }if(checkbox_binario.checked){
        document.getElementById("campoBinario").innerHTML = ("Resposta 2: Sistema Binário")
    }if(checkbox_decimal.checked){
        document.getElementById("campoDecimal").innerHTML = ("Resposta 2: Sistema Decimal")
    }if(checkbox_hexadecimal.checked){
        document.getElementById("campoHexadecimal").innerHTML = ("Resposta 2: Algarismos Hexadecimal")
    }

    if(document.getElementById("alcool").checked){
        document.getElementById("camRadio").innerHTML = ("Resposta 3: Álcool Isopropílico");
    }else if(document.getElementById("limpa").checked){
        document.getElementById("camRadio").innerHTML = ("Resposta 3: Limpa Contato");
    }else if(document.getElementById("alcool70").checked){
        document.getElementById("camRadio").innerHTML = ("Resposta 3: Álcool 70%");
    }else if(document.getElementById("agua").checked){
        document.getElementById("camRadio").innerHTML = ("Resposta 3: Água");
    }

    if(document.getElementById("true").checked){
        document.getElementById("camRadio2").innerHTML = ("Resposta 4: Verdadeira");
    }else if(document.getElementById("false").checked){
        document.getElementById("camRadio2").innerHTML = ("Resposta 4: Falsa");
    }
}