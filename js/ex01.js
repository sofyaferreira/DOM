function somar(){
    var v1, v2, result
    v1 = document.getElementById("primeiro_valor").value 
    v2 = document.getElementById("segundo_valor").value
    if(v1=="" || v2==""){
        alert("Os campos devem ser preenchidos")
    }else{
        result = parseFloat(v1) + parseFloat(v2)
        document.getElementById("resultado").innerHTML=`O resultado da soma é ${result}`
    }
}

/*1-No mesmo script usando os mesmos valores de n1 e n2, crie novos botões para: multiplicar, dividir(não pode haver divisão por zero) e subtrair */
function equacoes(){
    var v1, v2, multi, div, subtrair
    v1 = document.getElementById("primeiro_valor").value
    v2 = document.getElementById("segundo_valor").value
    if(v1=="" || v2=="" || v1==0 || v2==0){
        alert("Os campos devem ser preenchidos")
    }else{
        multi = parseFloat(v1) * parseFloat(v2)
        div = parseFloat(v1) / parseFloat(v2)
        subtrair = parseFloat(v1) - parseFloat(v2)
        document.getElementById("multi").innerHTML = `O resultado da multiplicação é ${multi}`
        document.getElementById("div").innerHTML = `O resultado da divisão é ${div}`
        document.getElementById("sub").innerHTML = `O resultado da subtração é ${subtrair}`
    }
    
}