function converteMatrizEmVetor(linha,coluna)
{
    let posicao = linha*10+coluna;
    return posicao;
}
function verificarSeEstaVazioY()
{
    for(let i=0;i<4;i++)
    {
        let posicao = converteMatrizEmVetor(obterPy(pecaAtual.quadrados[i].y),obterPx(pecaAtual.quadrados[i].x));
        if(campo[posicao+10]==1)
        {
            
            return false;
        }
    }
    return true;
}
function adicionarNaMatriz() {
    for (let i = 0; i < 4; i++) {
        pX = obterPx(pecaAtual.quadrados[i].x) // coluna
        pY = obterPy(pecaAtual.quadrados[i].y) // linha
        pM = converteMatrizEmVetor(pY, pX);     // como é um vetor é n uma matriz é necessario fazer um calcula para achar a posição no vetor
        campo[pM] = 1;
    }

}
function desenharMatriz() {

    for (let i = 0; i < 20 * 10; i++) {
        if (campo[i] == 1) {

            pX = i % 10;
            pY = Math.floor(i / 10);

            contexto.fillRect(3 + 3 * pX + 25 * pX, 3 + 25 * pY + 3 * pY, 25, 25)
        }
    }
}
function verificarSeEstaVazioXd()
{
    for(let i=0;i<4;i++)
    {
        let posicao = converteMatrizEmVetor(obterPy(pecaAtual.quadrados[i].y),obterPx(pecaAtual.quadrados[i].x));
        if(campo[posicao+1]==1)
        {
            
            return false;
        }
    }
    return true;
}
function verificarSeEstaVazioXe()
{
    for(let i=0;i<4;i++)
    {
        let posicao = converteMatrizEmVetor(obterPy(pecaAtual.quadrados[i].y),obterPx(pecaAtual.quadrados[i].x));
        if(campo[posicao-1]==1)
        {
            
            return false;
        }
    }
    return true;
}
function obterPx( x)
{
    return Math.floor(x/28)
}
function obterPy( y)
{
    return Math.floor(y/28)
}
function maiorY()
{
    let maior=0;
    for(var i=0;i<4;i++)
    {
        if(pecaAtual.quadrados[i].y>maior)
        {
            maior=pecaAtual.quadrados[i].y
           
        }
    }

    return maior;
}
function menorX()
{
    let menor= 570;
    for(var i=0;i<4;i++)
    {
       
        if(pecaAtual.quadrados[i].x<menor)
        {
            menor=pecaAtual.quadrados[i].x
           
        }
    }
 
    return menor;
}
function maiorX()
{
    let maior=0;
    for(var i=0;i<4;i++)
    {
        if(pecaAtual.quadrados[i].x>maior)
        {
            maior=pecaAtual.quadrados[i].x
           
        }
    }
    
    return maior;
}