const vetor = [1,2,3,6,8,15,18,9,10,20];
//posiçao      0 1 2 3 4  5  6 7 8  9
let contPar = 0;
let contImpar = 0;
for(let i = 0; i <vetor.length; i++){
    if(vetor[i]%2===0){
        contPar++;
    }
    else{
        contImpar++;
    }

}
console.log("O vetor possui: "+ contPar + " valores pares");
console.log("O vetor possui: "+ contImpar + " valores impares");