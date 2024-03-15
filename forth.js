// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
var car = {
    manufacturer: manufacturer,
    model: model
};
for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
    var _a = properties_1[_i], key = _a[0], value = _a[1];
    car[key] = value;
    return car;
}
var MyCar = Car_creation("BMW", "PORSCHE", ["color", "black"], ["Optional Features", "RS Turbo"]);
console.log(MyCar);
