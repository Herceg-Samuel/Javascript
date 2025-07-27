const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

const convertTemperature = (temp, unit) => {
  if (unit === "C") {
    return `${temp}°C is ${celsiusToFahrenheit(temp)}°F`;
  } else if (unit === "F") {
    return `${temp}°F is ${fahrenheitToCelsius(temp)}°C`;
  }
};

console.log(convertTemperature(0, "C"));
console.log(convertTemperature(32, "F"));
console.log(convertTemperature(100, "C"));
console.log(convertTemperature(248, "F"));
