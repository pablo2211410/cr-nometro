const tempos = [
    new Date(2026, 11, 31, 23, 59, 59),
    new Date(2026, 9, 20, 23, 59, 59),
    new Date(2026, 7, 15, 23, 59, 59),
    new Date(2026, 5, 30, 23, 59, 59)
];

function calculaTempo(dataObjetivo){

    const agora = new Date();
    const diferenca = dataObjetivo - agora;

    if(diferenca <= 0){
        return [0,0,0,0];
    }

    const dias = Math.floor(diferenca / (1000*60*60*24));

    const horas = Math.floor(
        (diferenca % (1000*60*60*24))
        / (1000*60*60)
    );

    const minutos = Math.floor(
        (diferenca % (1000*60*60))
        / (1000*60)
    );

    const segundos = Math.floor(
        (diferenca % (1000*60))
        / 1000
    );

    return [dias, horas, minutos, segundos];
}

function atualizaCronometro(){

    for(let i = 0; i < tempos.length; i++){

        const tempo = calculaTempo(tempos[i]);

        document.getElementById("dias" + i).textContent = tempo[0];
        document.getElementById("horas" + i).textContent = tempo[1];
        document.getElementById("min" + i).textContent = tempo[2];
        document.getElementById("seg" + i).textContent = tempo[3];
    }
}

function mostrarAba(indice){

    const abas = document.querySelectorAll(".conteudo");

    abas.forEach(aba => {
        aba.classList.remove("ativo");
    });

    document.getElementById("aba" + indice)
        .classList.add("ativo");
}

atualizaCronometro();
setInterval(atualizaCronometro, 1000);