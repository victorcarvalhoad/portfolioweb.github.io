// Função para enviar mensagem via WhatsApp
function enviarMsg(event){
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const texto = `Olá, me chamo ${nome} e esse é meu e-mail ${email}. ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `http://wa.me/5521995114401?text=${msgFormatada}`;

    window.open(url, '_blank');
}

// Função para alternar o menu de navegação em celulares
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
