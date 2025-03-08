const pokemonId = document.getElementById('pokemon-id');
const pokemonName = document.getElementById('pokemon-name');
const types = document.getElementById('types');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('form-search');
const imgCont = document.querySelector(".img-container")

const getPokemon = async () =>{
    try{
        const pokemon = searchInput.value.toLocaleLowerCase()
        const response = await fetch(`
            https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}
        `);
        const data = await response.json();
        // console.log(data)

        pokemonId.innerHTML = `#${data.id}`
        pokemonName.innerHTML = data.name.toUpperCase();
        height.innerHTML = data.height;
        weight.innerHTML = data.weight;
        imgCont.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${data.name} front default sprite">`;
        types.innerHTML = data.types
        .map(obj => `<div class="pkm-type">${obj.type.name.toUpperCase()}</div>`)
        .join('');
        

        hp.textContent = data.stats[0].base_stat;
        attack.textContent = data.stats[1].base_stat;
        defense.textContent = data.stats[2].base_stat;
        specialAttack.textContent = data.stats[3].base_stat;
        specialDefense.textContent = data.stats[4].base_stat;
        speed.textContent = data.stats[5].base_stat;

    } catch(err){
        clear();
        alert('Pokémon not found')
    }
}

const clear = ()=>{
    searchInput.value = '';
    imgCont.removeChild(imgCont.firstChild);
    pokemonName.textContent = '';
    pokemonId.textContent = '';
    types.innerHTML = '';
    height.textContent = '';
    weight.textContent = '';
    hp.textContent = '';
    attack.textContent = '';
    defense.textContent = '';
    specialAttack.textContent = '';
    specialDefense.textContent = '';
    speed.textContent = '';
}


searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    getPokemon();
})
