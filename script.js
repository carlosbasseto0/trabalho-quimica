let elemento1 = null;
let elemento2 = null;

const elementButtons = document.querySelectorAll('.element-btn');
const explicacao = document.getElementById('explicacao');

// Dicionário para armazenar as fórmulas moleculares
const formulas = {
    glicose: 'C₆H₁₂O₆',
    levedura: 'C₁₈H₂₄O₁₈N₄ (composição média)',
    oxigenio: 'O₂',
    bacteria: 'C₆H₁₂O₆ (usado como substrato)',
    amido: '(C₆H₁₀O₅)ₙ'
};

// Função para selecionar os elementos e marcar visualmente
elementButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const selectedElement = event.target.getAttribute('data-element');
        
        // Seleciona o primeiro elemento
        if (!elemento1) {
            elemento1 = selectedElement;
            event.target.style.backgroundColor = '#ffc107'; // Marca visualmente o botão
        } else if (!elemento2 && selectedElement !== elemento1) {
            // Seleciona o segundo elemento, se não for igual ao primeiro
            elemento2 = selectedElement;
            event.target.style.backgroundColor = '#ffc107'; // Marca visualmente o botão
        }
    });
});

// Função para gerar a reação
function gerarReacao() {
    explicacao.style.opacity = '0'; // Oculta o texto temporariamente

    // Apenas gera a reação se ambos os elementos forem selecionados
    if (elemento1 && elemento2) {
        setTimeout(() => {
            explicacao.style.opacity = '1'; // Exibe o texto novamente

            // Fermentação Alcoólica
            if ((elemento1 === 'glicose' && elemento2 === 'levedura') || (elemento1 === 'levedura' && elemento2 === 'glicose')) {
                explicacao.innerHTML = `
                    <h3>Fermentação Alcoólica</h3>
                    <p>Fórmulas moleculares:</p>
                    <p>${formulas.glicose} + ${formulas.levedura} → C₂H₅OH + CO₂</p>
                    <p>A glicose é quebrada pelas leveduras, produzindo etanol (C₂H₅OH) e dióxido de carbono (CO₂).</p>
                `;
            
            // Fermentação Láctica
            } else if ((elemento1 === 'glicose' && elemento2 === 'bacteria') || (elemento1 === 'bacteria' && elemento2 === 'glicose')) {
                explicacao.innerHTML = `
                    <h3>Fermentação Láctica</h3>
                    <p>Fórmulas moleculares:</p>
                    <p>${formulas.glicose} + ${formulas.bacteria} → C₃H₆O₃</p>
                    <p>Bactérias convertem glicose em ácido lático (C₃H₆O₃), importante para a produção de iogurtes e queijos.</p>
                `;
            
            // Fermentação do Amido
            } else if (elemento1 === 'amido' && elemento2 === 'levedura') {
                explicacao.innerHTML = `
                    <h3>Fermentação do Amido</h3>
                    <p>Fórmulas moleculares:</p>
                    <p>${formulas.amido} + ${formulas.levedura} → C₂H₅OH + CO₂</p>
                    <p>A levedura quebra o amido, produzindo etanol (C₂H₅OH) e dióxido de carbono (CO₂).</p>
                `;
            
            // Reação Aeróbica
            } else if (elemento1 === 'oxigenio' || elemento2 === 'oxigenio') {
                explicacao.innerHTML = `
                    <h3>Fermentação Aeróbica</h3>
                    <p>Fórmulas moleculares:</p>
                    <p>${formulas.glicose} + ${formulas.oxigenio} → CO₂ + H₂O + energia</p>
                    <p>Na presença de oxigênio, os microorganismos fazem a respiração celular, liberando mais energia.</p>
                `;
            
            // Sem Reação
            } else {
                explicacao.innerHTML = `<p>Sem reação visível...</p>`;
            }

        }, 500); // Delay para a animação ser mais fluida
    }
}



function showScreen(screenId) {
    // Oculta todas as telas
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.add('hidden');
    });

    // Mostra a tela selecionada
    const activeScreen = document.getElementById(screenId);
    activeScreen.classList.remove('hidden');
}
