const button = document.querySelector("button");

button.addEventListener("click", function(event){
    event.preventDefault();
    const login = document.querySelector("#login");
    const senha = document.querySelector("#senha")

    if(login.value === "Gabriel" && senha.value === "123456") {
        location.href = "https://gabrielalcantara01.github.io/cronometro/";
    else{ alert("Login ou senha incorreta")}
})
