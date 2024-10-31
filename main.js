let elemento1 = null;
let elemento2 = null;

const elementButtons = document.querySelectorAll('.element-btn');

// Função para selecionar os elementos e marcar visualmente
elementButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const selectedElement = event.target.getAttribute('data-element');
        
        // Seleciona o primeiro elemento, se ainda não foi selecionado
        if (!elemento1) {
            elemento1 = selectedElement;
            event.target.style.backgroundColor = '#ffc107'; // Marca o botão como selecionado
        } else if (!elemento2 && selectedElement !== elemento1) {
            // Seleciona o segundo elemento, se não for igual ao primeiro
            elemento2 = selectedElement;
            event.target.style.backgroundColor = '#ffc107'; // Marca o botão como selecionado
        }
    });
});

// Função para gerar a reação
function gerarReacao() {
    const animacao = document.getElementById('animacao');
    const explicacao = document.getElementById('explicacao');

    // Limpa a animação anterior e explicação
    animacao.innerHTML = '';
    animacao.classList.remove('bubble-animation');
    
    explicacao.style.opacity = '0'; // Oculta o texto temporariamente

    // Apenas gera a reação se ambos os elementos forem selecionados
    if (elemento1 && elemento2) {
        setTimeout(() => {
            explicacao.style.opacity = '1'; // Exibe o texto

            // Fermentação Alcoólica
            if ((elemento1 === 'glicose' && elemento2 === 'levedura') || (elemento1 === 'levedura' && elemento2 === 'glicose')) {
                explicacao.innerHTML = `
                    <h3>Fermentação Alcoólica</h3>
                    <p>A glicose é quebrada pelas leveduras, produzindo etanol e dióxido de carbono (CO<sub>2</sub>).</p>
                `;
                gerarBolhas(animacao, 'yellow');
            
            // Fermentação Láctica
            } else if ((elemento1 === 'glicose' && elemento2 === 'bacteria') || (elemento1 === 'bacteria' && elemento2 === 'glicose')) {
                explicacao.innerHTML = `
                    <h3>Fermentação Láctica</h3>
                    <p>Bactérias convertem glicose em ácido lático, importante para a produção de iogurtes e queijos.</p>
                `;
                gerarBolhas(animacao, 'green');
            
            // Fermentação do Amido
            } else if (elemento1 === 'amido' && elemento2 === 'levedura') {
                explicacao.innerHTML = `
                    <h3>Fermentação do Amido</h3>
                    <p>A levedura quebra o amido, produzindo moléculas menores e energia, usada na produção de pães.</p>
                `;
                gerarBolhas(animacao, 'blue');
            
            // Reação Aeróbica
            } else if (elemento1 === 'oxigenio' || elemento2 === 'oxigenio') {
                explicacao.innerHTML = `
                    <h3>Fermentação Aeróbica</h3>
                    <p>Na presença de oxigênio, os microorganismos fazem a respiração celular, liberando mais energia.</p>
                `;
                gerarBolhas(animacao, 'orange');
            
            // Sem Reação
            } else {
                explicacao.innerHTML = `<p>Sem reação visível...</p>`;
                animacao.style.backgroundColor = 'gray';
            }

        }, 500); // Pequeno delay para a animação ser mais fluida
    }
}

// Função para criar bolhas animadas
function gerarBolhas(container, cor) {
    container.classList.add('bubble-animation');
    container.style.backgroundColor = cor;

    for (let i = 0; i < 5; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.backgroundColor = cor;
        bubble.style.left = `${Math.random() * 80 + 10}%`; // Posição aleatória no eixo X
        bubble.style.animationDelay = `${i * 0.5}s`; // Atraso entre as bolhas
        container.appendChild(bubble); // Adiciona a bolha à animação
    }
}
