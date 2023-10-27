/*
//Converter  a temperetura de Fahrenheit para Celsius
        function converteFparaC(F) {
            var celsius = (F - 32) * (5/9)
            return celsius;
        }

        //document.write(converteFparaC(212));
*/
        function converter(){
            var distance_miles = document.getElementById("dados").value;
             //1 milha é igual a 1,60934 quilômetros
            let distance_km = distance_miles * 1.60934;
            document.write.getElementById("resultado").innerHTML ='Quilômetros:'+ distance_km;
            
        }
        