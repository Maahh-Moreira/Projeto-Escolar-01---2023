const SelecaoPersonagem = document.querySelectorAll('.botao');
const SeleçãoFundo = document.querySelectorAll('.personagem');

SelecaoPersonagem.forEach(personagem => {
    personagem.addEventListener('click', () => {
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        const idPersonagemSelecionado = personagem.attributes.id.value;
        const personagemParaSelecionar = document.getElementById('personagem-' + idPersonagemSelecionado);
        
        // Adicione a classe 'mostrar' após um pequeno atraso para garantir a transição suave ;]                                                                            
        setTimeout(() => {
            personagemParaSelecionar.classList.add('mostrar');
        }, 1);
        
        personagemParaSelecionar.classList.add('selecionado');

        if (personagemSelecionado != personagemParaSelecionar) {
          personagemSelecionado.classList.remove('mostrar');
          personagemSelecionado = personagemParaSelecionar;
          personagemParaSelecionar.classList.add('mostrar');
        }
    });
});
