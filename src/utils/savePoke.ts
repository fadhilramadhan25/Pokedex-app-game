import { PokemonDetail } from "./apis/pokemon";

export const getPokemonsFromLocalStorage = (): PokemonDetail[] => {
  const pokemonsJSON = localStorage.getItem("pokemons");
  return pokemonsJSON ? JSON.parse(pokemonsJSON) : [];
};

export const savePokemonsToLocalStorage = (pokemons: PokemonDetail[]): void => {
  localStorage.setItem("pokemons", JSON.stringify(pokemons));
};

export const isNicknameUsed = (
  pokemons: PokemonDetail[],
  nickname: string
): boolean => {
  return pokemons.some((pokemon) => pokemon.nickname === nickname);
};
