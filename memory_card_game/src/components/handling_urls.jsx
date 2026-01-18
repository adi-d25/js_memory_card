async function getUrl(url) {
    return fetch(url)
        .then((res) => {
            if (res.status === 200) {
                return res;
            } else {
                throw Error(res);
            }
        })
        .then((result) => {
            return result.json();
        });
}

async function pikachu() {
    let promises = [];

    for (let i = 1; i < 13; i++) {
        promises.push(getUrl(`https://pokeapi.co/api/v2/pokemon/${i}/`));
    }

    let results = await Promise.all(promises);

    // console.log("Pokemon Array:", results);

    return results.map((pkmn) => ({
        id: pkmn.id,
        name: pkmn.name,
        src: pkmn?.sprites?.front_default,
    }));
}

export { pikachu };
