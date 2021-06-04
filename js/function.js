// Função para abrir uma janela modal com a calculadora (Feita com JQuery) //

$(function(){
    abrirJanela();
    verificarCliqueFechar();
    calcular();

    function abrirJanela(){
        $('.abrir').click(function(e){
            e.stopPropagation();
            $('.bg, .main').fadeIn();
        })
    }

    function verificarCliqueFechar(){
        var el = $('body, .btnclose');

        el.click(function(){
            $('.bg, .main').fadeOut();
        })

        $('.main').click(function(e){
            e.stopPropagation();
        })
    }
})

// Código para ativar as funções da calculadora (Feito com JS puro) //
function calcular(tipo, valor){
    if(tipo === 'acao'){
        if(valor ==='c'){
            document.getElementById('resultado').value = ' ';
        }
        if(valor === 'apagar'){
            var resultado = document.getElementById('resultado')
            var valores = resultado.value;
            resultado.value = valores.slice(0, -1);
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.' || valor === '%'){
            document.getElementById('resultado').value += valor;
        }

        if(valor === '%'){ 
            var porcent = document.getElementById('resultado').value;
            porcent += valor / 2;
            
        }

        if(valor === '='){
            var valor_campo = eval(document.getElementById('resultado').value);
            document.getElementById('resultado'). value = valor_campo;
        }
    }else if(tipo === 'valor'){
        document.getElementById('resultado').value += valor;
    }
}