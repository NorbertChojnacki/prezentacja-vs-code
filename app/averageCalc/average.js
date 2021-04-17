/**
 * @returns {Number[]} 
 */
function tenNumbersGen(){
    let numbers = [];
    for(let i = 0; i++; i<10){
        let num = Math.round(Math.random() * 10)
        numbers[i] = num;
    }
    return numbers;
}

/**
 * @param {Number[]} array 
 * 
 * @param {averageCallback} callback //? tworzymy własny typ danych averageCallback i przypisujemy go zmiennej callback 
 * @callback averageCallback //! bez tej linijki definicja averageCallback zwróci błąd, musimy zaznaczyć, że ta zmienna to callback
 * @param {number} averageValue //! pod callbackiem definiujemy '@param' ich ilosc oznacza ilosc zmiennych callback
*/
function averageCalculator(array, callback){
    let sum = 0;
    array.forEach(value=>{
        sum += value
    });
    callback(sum/array.length);
}
// hello
/**
 * @param {finalCall} callback
 * @callback finalCall
 * @param {Number[]} finalValues
 */
function executionFunction(callback){

    /**
     * @param {Number[]} averageValuesArray      
    */
    const averageValuesArray = new Array(10);

    for(let i = 0; i <10; i++){
        averageCalculator(tenNumbersGen(), val=>{
            averageValuesArray[i] = val;
        });
    }

    callback(averageValuesArray);
}


executionFunction(val =>{
    console.log(val);
})