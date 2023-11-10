function buscadado(){
       var escolha=document.getElementById("converte").value;
       if(escolha==1){
              document.getElementById("descricao").textContent = ''
              document.getElementById("descricao").textContent = 'Digite o valor em milhas:'
             
       }else if(escolha==2){
              document.getElementById("descricao").textContent = ''
              document.getElementById("descricao").textContent = 'Digite o valor em Pés:'
             
       }else if(escolha==3){
              document.getElementById("descricao").textContent = ''
              document.getElementById("descricao").textContent = 'Digite o valor em Libras:'
              
       }else if(escolha==4){
              document.getElementById("descricao").textContent = ''
              document.getElementById("descricao").textContent = 'Digite o valor em Galões:'
              
       }else if(escolha==5){
              document.getElementById("descricao").textContent = ''
              document.getElementById("descricao").textContent = 'Digite o valor em Dólares:'
            
       }else{
              alert('garcia');
       }
}
function blbl(){
       var escolha=document.getElementById("converte").value;
       var Ventrada = document.getElementById("valor").value;
       if(escolha==1){
              var mi = 1604.38;
              var metros = (Ventrada*mi) / (1000);
              document.getElementById("convertido").textContent =Ventrada+' a medida em Quilômetros é: '+metros;
       }else if(escolha==2){
              var ft = 0.3048;
              var metros = (Ventrada*ft);
              document.getElementById("convertido").textContent = 'pés '+Ventrada+'Valor em metros'+metros;
       }else if(escolha==3){
              var lb = 0.45359237;
              var quilos = (Ventrada*lb);
              document.getElementById("convertido").textContent = 'libras'+Ventrada+'Valor em quilos'+quilos;
       }else if(escolha==4){
              var gal = 3.785411784;
              var litros = (Ventrada*gal);
              document.getElementById("convertido").textContent = 'galoes'+Ventrada+'Valor em galões'+litros;
       }else if(escolha==5){
              var us = 4.92;
              var reais = (Ventrada*us);
              document.getElementById("descricao").textContent = 'dólares'+Ventrada+'Valor em Dólares'+reais
       }else{
              alert('garcia');
       }
}

/*
      //Uma milha equivale à 1604.38 metros.
       var milhas = parseFloat(prompt("Digite a medida em Milhas:"));
       var mi = 1604.38;
       var metros = (milhas*mi) / (1000);
       alert(milhas+" a medida em Quilômetros é: "+ metros);

       //Um Pé equivale a 0.3048 Metros.
       var pés = parseFloat(prompt("Digite o comprimento em Pés:"));
       var ft = 0.3048;
       var metros = (pés*ft);
       alert(pés+" O comprimento em Metros é: "+ metros);

       //Uma Libra equivale a 0.45359237 Quilôgramas.
       var libras = parseFloat(prompt("Digite a massa em Libras:"));
       var lb = 0.45359237;
       var quilos = (libras*lb);
       alert(libras+" A massa em Quilôgramas é: "+ quilos);

       //Um Galão equivale a 3.785411784 Litros.
       var galões = parseFloat(prompt("Digite o volume em Galões:"));
       var gal = 3.785411784;
       var litros = (galões*gal);
       alert(galões+" O volume em Litros é: "+ litros);

       //Um Dólar equivale a 4.91 Reais.
       var dólar = parseFloat(prompt("Digite o descricao em Dólares:"));
       var us = 4.92;
       var reais = (dólar*us);
       alert(dólar+" O descricao em Reais é: "+ reais);
*/