/* 4- Crie um script em que o usuário entre com o login e senha e exiba uma mensagem com alert caso os dados estejam correto ou incorretos*/

function validar(){
    var u, s
    u = document.getElementById("usuario").value
    s = document.getElementById("senha").value
    if(u=="usuário1@gmail.com" && s=="senha123" || u=="usuário2@gmail.com" && 
        s=="minhaSenha" || u=="usuário3@gmail.com" && s=="5enh4" ){
            alert("Login efetuado com sucesso")
    }else{
        alert("Login ou senha incorretos")
    }
}