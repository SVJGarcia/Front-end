

//Converter  a temperetura de Fahrenheit para Celsius
     

        //document.write(converteFparaC(212));

        function converter(){
            var distance_miles = document.getElementById("milhas").value;
            var tipo = document.getElementById("converte").value;
           
            //1 milha é igual a 1,60934 quilômetros
            let distance_km = distance_miles * 1.60934;
            document.write.getElementById("resultado").innerHTML ='Quilômetros:'+ distance_km;
            if (tipo==1){
                let distance_km = distance_miles * 1.60934;
                document.write.getElementById("resultado").innerHTML ='Quilômetros:'+ distance_km;
            }else if(tipo==2){

            }
        }
          /*          
        //conversor de libras para km
        "use strict";

        Object.defineProperty(exports, "__esModule", {
        value: true
        });
        exports.default = conversor;
        function conversor(numero, unidad) {
         var resultado = void 0;
        if (unidad == "kg" || unidad == "kilos") {
        return kiloALibra(numero);
        } else if (unidad == "libra" || unidad == "lb") {
        return libraAKilo(numero);
        }
        function kiloALibra(numero) {
        let lb = numero * 2.20462;
        resultado = lb.toFixed(2) + " lb";
        return resultado;
        }
        function libraAKilo(numero) {
        let kg = numero * 0.453592;
        resultado = kg.toFixed(2) + " kg";
        return resultado;
        }
        
        }*/