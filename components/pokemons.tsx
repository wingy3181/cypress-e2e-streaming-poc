async function getPokemons() {
    const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon', {cache: "no-cache"}).then(res => res.json());
    await new Promise((resolve) => setTimeout(resolve, 4_000));
    return pokemons;
}

export default async function Pokemons() {
    const pokemons = await getPokemons();

    return (
        <div>
            {JSON.stringify(pokemons, null, 2)}
        </div>
    )
}
