"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
const magicianNames = ['Harry Porter', 'David Copperfield', 'Ron Weasley'];
function show_magicians(magician) {
    for (const magician of magicianNames) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const Greatmagicians = magicians.map(magician => magician);
    return Greatmagicians;
}
const GreatmagiciansNames = make_great(magicianNames);
console.log("Original Magicians:");
show_magicians(magicianNames);
console.log("\nGreat Magician:");
show_magicians(GreatmagiciansNames);
