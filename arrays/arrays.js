//activity 01
const arrays=['one', 'two', 'three'];
const newarray=arrays.map(function (array){
    return `<li>${array}</li>`;
});
document.getElementById("myList").innerHTML = newarray.join();

//activity 02
const letters=['A', 'B', 'A'];
const convertir=function(letter){
    let points=0;
    if (letter=='A'){
        points=4;
    }
    
    else if (letter=='B'){
        points=3;
    };
    return points;
}
const gpaPonits=letter.map(convertir);

//activity 03
const GPA=gpaPonits.reduce((total,item)=>total+item/length(gpaPonits));

//activity 04
const fruits= ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const selectedfruits=fruits.filter(fruit=>fruit.length<6);
console.log(selectedfruits);

//activity 05
const numbers=[12, 34, 21, 54];
const lucknumber=21;
let result=numbers.indexOf(lucknumber);
console.log(result);