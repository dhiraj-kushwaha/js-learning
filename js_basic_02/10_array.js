const marvel_heros = ["thor","Iron","Spidermen"]
const dc_heros= ["supermen","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// console.log(marvel_heros[3])

const allHeros= marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...dc_heros,...marvel_heros]
console.log(all_new_heros);