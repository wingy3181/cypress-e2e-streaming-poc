import Pokemons from "@/components/pokemons";
import PokemonClient from "@/components/pokemon-client";

export default async function Home() {
  return (
    <main>
      <h1>Pokemon</h1>
      <PokemonClient />
      {/*<Pokemons />*/}
    </main>
  )
}
