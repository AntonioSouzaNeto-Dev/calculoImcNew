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