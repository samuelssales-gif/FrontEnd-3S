const hobbies = [
    "correr",
    "Nadar",
    "Jogar Bola",
    "Viajar",
    "lutar",
    "Treinar"
];

const novosHobbies = hobbies.map ((hob) => {
 return`<p>${hob}</p>`;
})

console.log(novosHobbies);