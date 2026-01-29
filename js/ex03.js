/*3- Crie um novo documento HTML onde o usuário deve entrar o peso e altura e o programa deve exibir o IMC. Dependendo da faixa do IMC deve informar se o usuário está abaixo do peso, peso normal, sobrepeso, obesidade mórbida. Desafio extra: Apresente as informações em cores azul para abaixo do peso, verde peso normal, sobrepeso amarlo e obesidade vermelho */

 function calcularIMC(){
        var p, h, result
        p = document.getElementById("peso").value
        h = document.getElementById("altura").value
        if(p=="" || h==""){
            alert("Os campos devem ser preenchidos")
        }else{
            result = parseFloat(p) / (parseFloat(h)*parseFloat(h))
            if(result<18.5){
                document.getElementById("IMC").style.color= 'blue'
                document.getElementById("IMC").innerHTML = `O resultado do IMC é ${result}`
            }
            if(result>=18.5 & result<24.9){
                document.getElementById("IMC").style.color= 'green'
                document.getElementById("IMC").innerHTML = `O resultado do IMC é ${result}`
            }
            if(result>=24.9 & result<=29.9){
                document.getElementById("IMC").style.color= 'yellow'
                document.getElementById("IMC").innerHTML = `O resultado do IMC é ${result}`
                
            }if(result>30){
                document.getElementById("IMC").style.color= 'red'
                document.getElementById("IMC").innerHTML = `O resultado do IMC é ${result}`
                
            }
        }

     }