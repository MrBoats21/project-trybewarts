const email = document.getElementsByName("email")
const password = document.getElementsByName("password")
const login = document.getElementById("login")

login.addEventListener("click", hello)

function hello() {
    let valorEmail = email.value
    let valorSenha = password.value
    if (valorEmail == "tryber@teste.com" && valorSenha == "123456") {
        alert("Olá, Tryber!")
    } else {
        alert("Email ou senha inválidos")
    }
}