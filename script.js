document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const confirmationDiv = document.createElement("div");
    confirmationDiv.className = "confirmation";
    document.body.appendChild(confirmationDiv);
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio do formulário

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;

        const servicos = Array.from(form.querySelectorAll('input[name="servicos"]:checked'))
            .map(input => input.nextSibling.textContent.trim()).join(", ") || "Nenhum";
        
        const pagamento = form.querySelector('input[name="pagamento"]:checked')?.nextSibling.textContent.trim() || "Não selecionado";
        const prazo = document.getElementById("prazo").value;

        confirmationDiv.innerHTML = `
            <h3>Confirmação da Reserva</h3>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Serviços Desejados:</strong> ${servicos}</p>
            <p><strong>Forma de Pagamento:</strong> ${pagamento}</p>
            <p><strong>Prazos de Pagamento:</strong> ${prazo}</p>
        `;
        confirmationDiv.style.display = "block"; // Exibe a mensagem de confirmação

        form.reset(); // Limpa o formulário após o envio
    });
});
