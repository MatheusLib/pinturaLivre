var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'grey';
    pincel.fillRect(0, 0, 600, 400);
    /* preciso adicionar linhas a função abaixo*/
    function preencheEspaco (){
        pincel.beginPath();

    }
    /*adicionar as funções abaixo conforme vai acontecendo o click do mouse*/
    function adicionaPonto(x,y){
        if (contagem ==0){
            pincel.moveTo(x, y);
        }
        else{
            pincel.lineTo(x, y);
        }


    }
    var contagem=0;
    function exibeAlerta(evento) {
        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
        /*nesse ponto que deve ser puxado a função que adiciona os comnado dos pontos*/
        adicionaPonto(x,y);
        contagem +=1;
        pincel.fillStyle="red";
        pincel.beginPath();
        pincel.arc(x, y, 3, 0, 2*3.14);
        pincel.fill();

        console.log("posição do clique : " + x + ", " + y);
    }

    tela.onclick = exibeAlerta;
        document.getElementById("pintar").submit() = alert(123);