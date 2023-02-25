const fetchPokemon = async() => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let data = await fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        } else {
            return res.json();
        }
    });

    if (data) {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeInfo1 = data.abilities;
        let pokeInfo2 = data.stats;
        pokeImage(pokeImg);
        pokeData(pokeInfo1);
        pokeData2(pokeInfo2);
        pokeData3(pokeInfo2);
        pokeData4(pokeInfo2);
        pokeData5(pokeInfo2);
        console.log(pokeImg);
    }
};

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.style.width = "150px"
    pokePhoto.src = url;
    pokePhoto.style.margin = "0px 50px 0px 50px"
}

const pokeData = (abilities) => {
    const pokeAbilities = document.getElementById("abilities");
    const abilitiesName = abilities.map(item => item.ability.name);

    pokeAbilities.innerHTML = "<p>Habilidades:</p>" + abilitiesName.join(','+'\n')
}

const pokeData2 = (stats) =>{
    const pokeHp = document.getElementById("hp");
    const hp = stats[0].base_stat;

    pokeHp.innerHTML = "<p>Hp: <p>" + hp
}

const pokeData3 = (stats) => {
    const pokeDef = document.getElementById("defensa");
    const def = stats[2].base_stat;

    pokeDef.innerHTML = "<p>Defensa: <p>" + def
}

const pokeData4 = (stats) => {
    const pokeAtt = document.getElementById("ataque");
    const att = stats[1].base_stat;

    pokeAtt.innerHTML = "<p>Ataque:<p>" + att
}

const pokeData5 = (stats => {
    const pokeSpeed = document.getElementById("velocidad");
    const speed = stats[5].base_stat;

    pokeSpeed.innerHTML = "<p>Velocidad: <p>" + speed
})