const marvel_heros = ["thor","Iron","Spidermen"]
const dc_heros= ["supermen","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); //[ 'thor', 'Iron', 'Spidermen', [ 'supermen', 'flash', 'batman' ] ] it has taken the dc_heros as single element

// console.log(marvel_heros[3])

// const allHeros = marvel_heros.concat(dc_heros) // concat return new array 
// console.log(allHeros)

const all_new_herosv = [...marvel_heros, ...dc_heros]///  spread ...
// console.log(all_new_herosv);

const another_array = [1,2,3,[4,5,6],7,[6,7[4,5]]]
const real_another_array = another_array.flat(Infinity) /// flat use to solve the internal arr and marage it into th emain arrr

// console.log(real_another_array);

Array.isArray("dhiraj")
// console.log(Array.isArray("dhiraj"));
console.log(Array.from('dhiraj'));
console.log(Array.from({name: "dhiraj"})); //intersting as it will return a empty arr because it has to be mentioned here that name or dhraj which have to be converted 



const score1=22
const score2=322
const score3=2232

console.log(Array.of(score1,score2,score3))