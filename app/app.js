
const Foo = require("../modules/person").default

let foo = new Foo("Norbert", 12);
console.log(foo.nameAge());

//?  Ile jeszcze można zrobić z pomocą JSDocs

//* Tworzenie typu "Test"
/**
 * @typedef Test
 * @type {object}
 * @property {number} id
 * @property {string} age
 * @property {string} name
 */

//* Odwoływanie się do interface Person

/**
 * @param {Person} emo
 */
function Moo(emo){
    emo
}

/** @type {Test} */
let obj;

//obj.id = "string"; //! podkreśla błąd bo to number chce przypisać string

// obj.name = "Norbert";
