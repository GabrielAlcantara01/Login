const button = document.querySelector("button");

button.addEventListener("click", function(event){
    event.preventDefault();
    const login = document.querySelector("#login");
    const senha = document.querySelector("#senha")

    if(login.value === "Gabriel" && senha.value === "123") {
        alert("vc entrou")}
    else{ alert("Login ou senha incorreta")}
})
