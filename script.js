function validar(login, senha) {
    if (login == "admin" && senha == "admin") {
        location.href = "https://www.uninove.br/";
    } else { alert('Usuario e/ou senha incorretas') }
}
