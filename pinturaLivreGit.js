var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'grey';
    pincel.fillRect(0, 0, 600, 400);
    var pontox =[];
    var pontoy = [];

    /* preciso adicionar linhas a função abaixo*/
    function preencheEspaco (){
        pincel.fillStyle='darkblue';
        pincel.beginPath();
        for (var i=0; i<pontox.length;i++){
            if ( i== 0 ){
                pincel.moveTo(pontox[0], pontoy[0]);
            }
            else{
                pincel.lineTo(pontox[i], pontoy[i]);
            }

        }
        pincel.fill();

    }
    /*adicionar as funções abaixo conforme vai acontecendo o click do mouse*/
    function adicionaPonto(x,y){
        pontox.push(x);
        pontoy.push(y);
    }
    var contagem=0;
    function Marca(evento) {
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

    tela.onclick = Marca;
    tela.oncontextmenu = preencheEspaco;
