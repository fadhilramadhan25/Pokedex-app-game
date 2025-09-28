import { getPokemonsFromLocalStorage, savePokemonsToLocalStorage } from "@/utils/savePoke";
import { useEffect, useState } from "react";

import Layout from "../../components/layout";
import MyPokeCard from "@/components/my-poke-card";
import { PokemonDetail } from "@/utils/apis/pokemon";

const Mypokemon = () => {
  const [poke, setPoke] = useState<PokemonDetail[]>([]);

  useEffect(() => {
    const pokemons = getPokemonsFromLocalStorage();
    setPoke(pokemons)
  }, []);

  const onRemovePokemon = (nickname: string) => {
    const pokemons = getPokemonsFromLocalStorage();

    const updatedPokemons = pokemons.filter(
      (pokemon) => pokemon.nickname !== nickname
    );

    savePokemonsToLocalStorage(updatedPokemons);
    setPoke(updatedPokemons)
  };

  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 gap-3 p-6">
        {poke.map((item, index) => (
          <MyPokeCard data={item} key={index} onRemove={onRemovePokemon}/>
        ))}
      </div>
    </Layout>)
};

export default Mypokemon;
