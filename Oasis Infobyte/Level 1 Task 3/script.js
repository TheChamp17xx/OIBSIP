function convert() {
    // Get the input temperature and units
    let inputTemp = document.getElementById("input").value;
    let inputUnit = document.getElementById("select1").value;
    let outputUnit = document.getElementById("select2").value;
  
    // Convert the input temperature to Kelvin
    let kelvinTemp;
    if (inputUnit === "celsius") {
      kelvinTemp = Number(inputTemp) + 273.15;
    } else if (inputUnit === "fahrenheit") {
      kelvinTemp = (Number(inputTemp) + 459.67) * 5 / 9;
    } else {
      kelvinTemp = Number(inputTemp);
    }
  
    // Convert Kelvin to the output temperature
    let outputTemp;
    if (outputUnit === "celsius") {
      outputTemp = kelvinTemp - 273.15;
    } else if (outputUnit === "fahrenheit") {
      outputTemp = kelvinTemp * 9 / 5 - 459.67;
    } else {
      outputTemp = kelvinTemp;
    }
  
    // Display the result in the output text box
    document.getElementById("result").value = outputTemp.toFixed(2);
  }