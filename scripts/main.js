let campo = []
      
        let pontuacao = 0;
        let wait=false;
        let etapa=0;

        for (let i = 0; i < 10 * 20; i++) // coluna* linhas
        {
            campo.push(0); //0 vai indicar que n tem nenhum elemento ali, 1 incida que tem 
        }
        var pecaAtual
        pecaAtual=quadradoM;
        canvas = document.createElement('canvas');
        contexto = canvas.getContext('2d');
        canvas.width = 286;  // 10 POSIÇÕES 
        canvas.height = 566; // 20 POSIÇÕES 
        canvas.style.background = "black";
        document.body.appendChild(canvas);
        canvas.style.position = "relative"
        contexto.fillStyle="white";
        contexto.font = "30px Arial";
        contexto.fillText("Click para começar  ",10,283);
        document.addEventListener("click",function ()
        {
                       
            
            contexto.font = "15px Arial";
            if(etapa==0)
            {
            
                etapa = 1;
                desenhar();
            }else if(etapa==2)
            {
                
                for (let i = -36; i <200; i++) // coluna* linhas
                 {
                          campo[i]=0; //0 vai indicar que n tem nenhum elemento ali, 1 incida que tem 
                          
                          

                 }
                 pontuacao=0;
                 etapa = 1;
                 escolherPeca();
                 
                 console.log(campo);
                 desenhar();

                
            }

            
            
        })
        function desenhar() {
           if(etapa==1)
           {
            contexto.clearRect(0, 0, canvas.width, canvas.height)
            contexto.fillText("Pontuação: ",10,25);
            contexto.fillText(pontuacao, 90, 25);
            desenharMatriz();
            pecaAtual.desenhar();
            quadrado.desenhar();
            if (wait)
            {
                setTimeout(function()
                {
                    movimentacao();
                    
                },250);
            }else
            {
                movimentacao();
            }
            window.requestAnimationFrame(desenhar);
        }
        }
        function movimentacao() {
            if (maiorY() < 535 && verificarSeEstaVazioY()) {
            
                   
                
                    pecaAtual.pY += 2.5;
                    wait = false;
                    
               
                //alert("0:"+pecaAtual.quadrados[0].y+"\n1:"+pecaAtual.quadrados[1].y+"\n2:"+pecaAtual.quadrados[2].y+"\n3:"+pecaAtual.quadrados[3].y)
            } else {
                
                if(maiorY()<=0&&!verificarSeEstaVazioY()) 
                    {
                       
                        fimdejogo();
                        return
                    }
                wait=true;
                setTimeout(function ()
                {
                   
                    if(!verificarSeEstaVazioY()||maiorY() >= 535)
                    {
                        adicionarNaMatriz();
                        atualizarPontuacao();
                        escolherPeca(); 
                        pecaAtual.pY = -25;
                        pecaAtual.pX = 115;
                    }
                },250);
                
           
              
               
            }
            
        }
        document.addEventListener("keydown", function (e) {

            if (e.keyCode == 37 && verificarSeEstaVazioXe() && menorX() > 3) {
                pecaAtual.pX -= 28
            } else if (e.keyCode == 39 && verificarSeEstaVazioXd() && maiorX() < (286 - 6 - 25)) {
                pecaAtual.pX += 28
            } else if (e.keyCode == 38&&verificarSeEstaVazioY()&&verificarSeEstaVazioXd()&&verificarSeEstaVazioXe()) {

                pecaAtual.rotacao();
            }
        })
       
      
        function escolherPeca() {

            let valor = Math.floor(Math.random() * 7)
           
            switch (valor) {
                case 0:
                   pecaAtual.quadrados.splice(0,4);
                   pecaAtual = quadradoM;
                   
                   pecaAtual.inserir();
                    break;
                case 1:
                pecaAtual.quadrados.splice(0,4);
                    pecaAtual = l;
                    pecaAtual.inserir();
                    break;
                case 2:
                pecaAtual.quadrados.splice(0,4);   
                pecaAtual= lInvertido; 
                    pecaAtual.inserir();
                    break;
                case 3:
                pecaAtual.quadrados.splice(0,4);   
                pecaAtual = c;
                    pecaAtual.inserir();
                    break;
                case 4:
                pecaAtual.quadrados.splice(0,4);
                pecaAtual = t;
                    pecaAtual.inserir();
                    break;
                case 5:
                pecaAtual.quadrados.splice(0,4);
                    pecaAtual = s;
                    pecaAtual.inserir();
                    break;
                case 6:
                pecaAtual.quadrados.splice(0,4);
                    pecaAtual = sInvertido;
                    pecaAtual.inserir();
                    break;

            }
        }
        window.onload = function () {

            escolherPeca();


            desenhar();
        }
        function atualizarPontuacao() {
            for (var i = 0; i < 20; i++) {
                let pontos = 0;
                for (var j = 0; j < 10; j++) {
                    if (campo[i * 10 + j] == 1) {
                        pontos += 1;
                    }
                }
                if (pontos == 10) {
                    pontuacao+=100;
                    for (var j = 0; j < 10; j++) {
                        campo[i * 10 + j] = 0;
                    }
                    let l= i;
                    for (l; l > 0; l--) {
                       
                        for (var k = 0; k < 10; k++) {
                            campo[l*10+k]=campo[l*10+k-10];
                        }
                    }
                }
            }
        }
        function fimdejogo()
        {
            contexto.clearRect(0, 0, canvas.width, canvas.height)
            contexto.fillText("Pontuação: ",10,25);
            contexto.fillText(pontuacao, 70, 25);
         
            contexto.fillText("fim de jogo",80,283);
            contexto.fillText("click para começar de novo   ",60,306);
            etapa=2;
        }