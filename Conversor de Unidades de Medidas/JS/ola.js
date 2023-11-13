function buscadado(){
       var escolha=document.getElementById("converte").value;
       if(escolha==1){
              document.getElementById("descricao").textContent = ''
              document.getElementById("descricao").textContent = 'Digite o valor em milhas:';
             
       }else if(escolha==2){
              document.getElementById("descricao").textContent = ''
              document.getElementById("descricao").textContent = 'Digite o valor em Pés:';
             
       }else if(escolha==3){
              document.getElementById("descricao").textContent = ''
              document.getElementById("descricao").textContent = 'Digite o valor em Libras:';
              
       }else if(escolha==4){
              document.getElementById("descricao").textContent = ''
              document.getElementById("descricao").textContent = 'Digite o valor em Galões:';
              
       }else if(escolha==5){
              document.getElementById("descricao").textContent = ''
              document.getElementById("descricao").textContent = 'Digite o valor em Dólares:';
            
       }else if(escolha==6){
              document.getElementById("descricao").textContent = ''
              document.getElementById("descricao").textContent = 'Digite o valor em Jardas:';
       } 
}

function blbl(){
       var escolha=document.getElementById("converte").value;
       var Ventrada = document.getElementById("valor").value;
       if(escolha==1){
              //Uma milha equivale à 1604.38 metros.
              var mi = 1604.38;
              var metros = (Ventrada*mi) / (1000);
              document.getElementById("convertido").textContent = Ventrada+' Milhas em Quilômetros é: '+metros;
       }else if(escolha==2){
              //Um Pé equivale a 0.3048 Metros.
              var ft = 0.3048;
              var metros = (Ventrada*ft);
              document.getElementById("convertido").textContent = Ventrada+' Pés em Metros é: '+metros;
       }else if(escolha==3){
              //Uma Libra equivale a 0.45359237 Quilôgramas.
              var lb = 0.45359237;
              var quilos = (Ventrada*lb);
              document.getElementById("convertido").textContent = Ventrada+' Libras em Quilos é: '+quilos;
       }else if(escolha==4){
              //Um Galão equivale a 3.785411784 Litros.
              var gal = 3.785411784;
              var litros = (Ventrada*gal);
              document.getElementById("convertido").textContent = Ventrada+' Galões em Litros é: '+litros;
       }else if(escolha==5){
              //Um Dólar equivale a 4.94 Reais.
              var us = 4.94;
              var reais = (Ventrada*us);
              document.getElementById("convertido").textContent = Ventrada+' Dólares em Reais é: '+reais;
       }else if(escolha==6){
              //Uma Jarda equivale a 0,9144 metros.
              var yd = 0.9144;
              var metros = (Ventrada*yd);
              document.getElementById("convertido").textContent = Ventrada+' Jardas em Metros é: '+metros;
       }
               
}