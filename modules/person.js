export default class Foo {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    nameAge(){
        return `Jestem ${this.name} i mam ${this.age} lat`;
    }
}