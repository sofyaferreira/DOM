/*5- Crie um novo documento HTML em que o usuário entre com o primeiro valor de uma Progressão Aritmética (PA) a razão da PA e a quantidade de termos da PA e gere a serie. Dica: use uma lista para armazenar a PA e exibir em tela. */

function calcularPA(){
    var a1, r, n
    const termos = [] /**cont declara uma variável que não pode ser reescrita */

    a1 = document.getElementById("primeiro_termo").value
    r = document.getElementById("razao").value 
    n = document.getElementById("quant_termos").value 

    for(let  i = 0; i < n; i++){
        a1 = parseFloat(a1)
        r = parseFloat(r)
        n = parseInt(n)
        termos.push(a1 + i * r)
    }

    document.getElementById("resultado").innerHTML = `A Progressão Aritmética é: ${termos.join(", ")}`

}