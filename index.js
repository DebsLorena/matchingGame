let chk1 = document.querySelector('#chk1');/*variavies recebe os elementos clicados*/
let chk2 = document.querySelector('#chk2');
let chk3 = document.querySelector('#chk3');
let reset = document.querySelector('.reset');
/*checked defina o estado marcado dentro da caixa/*
/*disabled indica se o controle esta desabilitado, se estiver desabilitado, falso não aceita cliques.*/
chk1.onclick = function () { 
    if (chk1.checked === true) {
        chk1.disabled = 'true';
    }
}
chk2.onclick = function () {
    if (chk2.checked === true) {
        chk2.disabled = 'true';
    }
}  
chk3.onclick = function () {
    if (chk3.checked === true) {
        chk3.disabled = 'true';
    }
}

/*a função a baixo faz o mesmo que a função acima, um pouco mais reduzida, no entanto falta finalizar uma função mais reduzida para o botão reset, alterar os ids no html, para que a função a baixo funcione.

chk1.onclick = function () { 
    if (chk1.checked === true ) { 
        chk1.disabled = 'true';
        
    }
} 

se as três caixas estiverem paradas, false o botão reinicia*/

reset.onclick = function() {
    chk1.disabled = false;
    chk1.checked = false;

    chk2.disabled = false;
    chk2.checked = false;

    chk3.disabled = false;
    chk3.checked = false;
}

