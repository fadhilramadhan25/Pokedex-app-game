import { Abilities, Move, Stats, Type } from "@/utils/apis/pokemon/types";
import { Link, useParams } from "react-router-dom";
import { PokemonDetail, getPokemonDetail } from "@/utils/apis/pokemon";
import React, { useEffect, useState } from "react";

import Layout from "@/components/layout";
import { typeColors } from "@/utils/typeColor";

const Detail: React.FC = () => {
  const { pokeId, status } = useParams();
  const [poke, setPoke] = useState<PokemonDetail | null>(null);

  useEffect(() => {
    if (pokeId) {
      fetchPokemon(pokeId);
    }
  }, [pokeId]);

  const fetchPokemon = async (id: string) => {
    try {
      const result = await getPokemonDetail(id);
      setPoke(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      {poke && (
        <div className="grid h-full grid-flow-row auto-rows-max grid-cols-2">
          <div className="rounded-2xl border border-black shadow-lg shadow-black dark:border-white m-3 p-5 flex flex-col justify-center">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`}
              alt={poke.name}
            />
            <div className="grid grid-flow-row auto-rows-max grid-cols-2 gap-4 mt-1">
              {poke.types.map((item: Type, key: number) => (
                <p
                  key={key}
                  className={`overflow-hidden break-all rounded-full border border-black p-2 text-center font-arcade text-xs capitalize tracking-wide text-white dark:border-white ${
                    typeColors[item.type.name.toLowerCase()]
                  }`}
                >
                  {item.type.name}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-black shadow-lg shadow-black dark:border-white m-3 p-5 flex flex-col justify-center">
            {poke.stats.map((item: Stats, key: number) => (
              <div className="w-full" key={key}>
                <p className="overflow-hidden break-all font-arcade text-xs capitalize tracking-wide text-black dark:text-white">
                  {item.stat.name}
                </p>
                <div className="h-1 w-full bg-gray-400 dark:bg-gray-200">
                  <div
                    className="h-1 bg-blue-600"
                    style={{ width: `${item.base_stat}%` }}
                  ></div>
                </div>
                <p className="overflow-hidden break-all font-arcade text-xs capitalize tracking-wide text-black dark:text-white">
                  {item.base_stat}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-black shadow-lg shadow-black dark:border-white m-3 p-5 col-span-2">
            <p className="overflow-hidden break-all font-arcade text-xs capitalize tracking-wide text-black dark:text-white">
              Name: {poke.name}
            </p>
            <p className="overflow-hidden break-all font-arcade text-xs capitalize tracking-wide text-black dark:text-white">
              Weight: {poke.weight}
            </p>
            <p className="overflow-hidden break-all font-arcade text-xs capitalize tracking-wide text-black dark:text-white">
              Height: {poke.height}
            </p>
          </div>
          <div className="rounded-2xl border border-black shadow-lg shadow-black dark:border-white m-3 p-5">
            <ul className="ml-3 list-outside list-disc">
              {poke.abilities.map((item: Abilities, key: number) => (
                <li
                  key={key}
                  className="overflow-hidden break-all font-arcade text-xs capitalize tracking-wide text-black dark:text-white"
                >
                  {item.ability.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-black shadow-lg shadow-black dark:border-white m-3 p-5 undefined undefined undefined">
            <ul className="ml-3 list-outside list-disc">
              {poke.moves.slice(0, 5).map((item: Move, key: number) => (
                <li
                  key={key}
                  className="overflow-hidden break-all font-arcade text-xs capitalize tracking-wide text-black dark:text-white"
                >
                  {item.move.name}
                </li>
              ))}
            </ul>
          </div>
          {status === "wild" && (
            <div className="false m-3 p-5 flex flex-col justify-center col-span-2">
              <Link
                className="$font-arcade place-self-center overflow-hidden break-all rounded-xl border-2 border-black p-2 text-xs font-bold capitalize tracking-wide text-black shadow-md shadow-black hover:ring dark:border-white dark:text-white"
                to={`/battle/${pokeId}`}
              >
                Catch!
              </Link>
            </div>
          )}
        </div>
      )}
    </Layout>
  );
};

export default Detail;
