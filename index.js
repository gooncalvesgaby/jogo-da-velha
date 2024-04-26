const celulas = document.querySelectorAll(".box");
let checarTurno = true;
const jogador_o = "O";
const jogador_x = "X";

document.addEventListener("click", (event) => {
    if(event.target.matches(".celula")) {
        jogar(event.target.id);
    }
});

function jogar(id) {
    const celula = document.getElementById(id);
    turno = checarTurno ? jogador_o : jogador_x;
    celula.textContent = turno;
    checarTurno = !checarTurno;
    checarVencedor(turno);
}

function checarVencedor(turno) {

};