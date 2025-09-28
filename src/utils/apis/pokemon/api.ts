import { PayloadPagination } from "@/utils/types/api";
import { Pokemon } from ".";
import axios from "axios";

export const getPokemon = async (offset?: number) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
      );
      return response.data as PayloadPagination<Pokemon[]>;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  };

  export const getPokemonDetail = async (name: string) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  };