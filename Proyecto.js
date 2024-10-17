function calcular(){
    
    let num = parseInt(document.getElementById('Ninput').value);


    let resultado1 =num*0.668;
    let resultado2 =num*0.0148;
    let resultado3 =num*0.001;
    let resultado4 =num*0.0112;
    let resultado5 =num*0.3050;
    
    document.getElementById('resultado1').textContent= 'El porcentaje Hidraúlico es '+resultado1.toFixed(2)+' kW/h';0.2
    document.getElementById('resultado2').textContent= 'El porcentaje Solar es '+resultado2.toFixed(2)+' kW/h';0.2
    document.getElementById('resultado3').textContent= 'El porcentaje Eólica es '+resultado3.toFixed(2)+' kW/h';0.2
    document.getElementById('resultado4').textContent= 'El porcentaje Biomasa es '+resultado4.toFixed(2)+' kW/h';0.2
    document.getElementById('resultado5').textContent= 'El porcentaje Combustible fósil y Energia térmica '+resultado5.toFixed(2)+' kW/h';0.2


      }
   