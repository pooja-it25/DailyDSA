// Program to Calculate the Area of a Triangle
// area = (base * height) / 2

const prompt=require('prompt-sync')()
const baseValue = prompt('Enter the base of a triangle: ');
const heightValue = prompt('Enter the height of a triangle: ');

// calculate the area
const areaValue = (baseValue * heightValue) / 2;

console.log(`The area of the triangle is ${areaValue}`
);