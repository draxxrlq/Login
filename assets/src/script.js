function validarEmail() {
    const emailInput = document.getElementById("emailInput"); 
    const messageDiv = document.getElementById("message");   
    const email = emailInput.value;                          
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    messageDiv.innerHTML = "";

    if (email === "") {
        messageDiv.innerHTML = "O campo de e-mail está vazio!";
        messageDiv.className = "message error"; 
        return;
    }

    if (!emailRegex.test(email)) {
        messageDiv.innerHTML = "Formato inválido! O e-mail deve seguir o padrão: <br> <b>nome@dominio.com</b>";
        messageDiv.className = "message error";
        return;
    }

    messageDiv.innerHTML = "E-mail válido! 🎉";
    messageDiv.className = "message success";
}

document.getElementById("emailInput").addEventListener("input", validarEmail);
