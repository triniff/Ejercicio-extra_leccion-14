function convertirCelcius(degree) {
    var x;
        x = (document.getElementById("farenheit").value -32) * 5 / 9;
        document.getElementById("celcius").value = Math.round(x);     
}