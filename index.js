const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "04 dec 2023"

function countD(){

    const dataLanc = new Date(lancamento)
    const hj = new Date()

    const SegTotal = (dataLanc - hj) / 1000

    const FinalDias = Math.floor(SegTotal/ 60 / 60 / 24);
    const FinalHoras = Math.floor(SegTotal / 60 / 60) % 24;
    const FinalMin = Math.floor(SegTotal / 60) % 60;
    const FinalSeg = Math.floor(SegTotal) % 60;

    dia.innerHTML = formatar(FinalDias)+'D'
    hora.innerHTML = formatar(FinalHoras)+'H'
    minuto.innerHTML = formatar(FinalMin)+'M'
    segundo.innerHTML = formatar(FinalSeg)+'S'
}

function formatar(tempo){

    return tempo < 10? `0${tempo}` : tempo;
}

countD();
setInterval(countD, 1000)