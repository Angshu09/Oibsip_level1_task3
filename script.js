var celsius = document.getElementById("cel");
var fahrenheit = document.getElementById("fah");

celsius.addEventListener('input', function(){
    let c = this.value;
    let f = (c*9/5)+32;
    fah.value = f;
})

fahrenheit.addEventListener('input', function(){
    let f = this.value;
    let c = (f-32)*5/9;
    fah.value = f;
    cel.value = c;
})