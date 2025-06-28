/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    var kelvin = celsius + 273.15
    var fahrenheit = celsius * 1.8 + 32.00
    var ans = [kelvin, fahrenheit]
    return ans
};