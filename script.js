/*weight.addEventListener('keydown', function (e) {
    if (e.key === 'e' || e.key === 'E') {
        e.preventDefault(); // Impede que a letra "e" seja digitada
    }
});*/

weight.addEventListener('input', function (){
    if (weight.value <=0 || weight.value >=300 || isNaN(weight.value)){
        weight.value = ""
    }
})

height.addEventListener('input', function(){
    if (height.value <=0 || height.value >=300 || isNaN(height.value)){
        height.value = ""
    }
})

age.addEventListener('input', function(){
    if (age.value <=0 || age.value >=150 || isNaN(age.value)){
        age.value = ""
    }
})


function calculateIMC(){
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const imc = weight / (height * height);
    
    let result = '';
    if (imc < 18.5) {
        result = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        result = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        result = 'Sobrepeso';
    } else {
        result = 'Obesidade';
    }
    
    document.getElementById('result').value = `Seu IMC é ${imc.toFixed(2)} - ${result}`;
}
