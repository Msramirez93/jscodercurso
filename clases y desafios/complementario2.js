//esta funcion lop que hace es sumar dos listas de arrays que yo le proporcione
function testArray() {
    let list1 = [ 17, 8, 9, 5, 20 ];
    let list2 = [ 12, 4, 8, 15, 17, 5, 20, 11 ];
    
    let sum1 = addEnds(list1);
    let sum2 = addEnds(list2);
    
    let mid1 = getMiddle(list1);
    let mid2 = getMiddle(list2);
    
    let output =
            sum1 + '<br>' +
            sum2 + '<br>' +
            mid1 + '<br>' +
            mid2;
    
    
        document.getElementById('output').innerHTML = output;
    }
    function addEnds(list1){
        let sum = '';
        sum = list1[0] + list1[list1.length -1];
        return sum;
    }
    function getMiddle(list2) {
        let num1 = 0;
        let middle= 0;
    
        if (list2.length % 2 == 0){
            num1 = list2.length / 2;
            num2= (list2 [num1 -1] + list2 [num1]) / 2;
    }else {
            num1 = parseInt(list2.length / 2);
            num2= list2[num1];
    }
    return num2;
}
//metodo de comparacion  y ordenamiento con sort
const list1= [ 17, 8, 9, 5, 20 ];
list1 .sort(comparacion);
console.log (list1);

const list2 = [ 12, 4, 8, 15, 17, 5, 20, 11 ];
list2 .sort(comparacion);
console.log (list2);

function comparacion(a,b){
    return a-b
}