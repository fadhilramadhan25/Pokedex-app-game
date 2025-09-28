import { Pokemon, getPokemon } from "@/utils/apis/pokemon";
import { useEffect, useState } from "react";

import Layout from "../../components/layout";
import PokeCard from "@/components/poke-card";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@/utils/useQuery";

const Home = () => {
  const query = useQuery();
  const navigate = useNavigate()
  const [poke, setPoke] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetchPokemon();
  }, [query]);

  const fetchPokemon = async () => {
    const offset = query.get("offset") === null ? 0 : query.get("offset")
    try {
      const result = await getPokemon(offset as number);
      setPoke(result.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext = () => {
    const offset = query.get("offset") === null ? 0 : parseInt(query.get("offset") as string, 10);

    navigate(`/home?offset=${offset + 20}`)
  }

  const handleBack = () => {
    const offset = query.get("offset") === null ? 0 : parseInt(query.get("offset") as string, 10);

    if(offset > 0){
      navigate(`/home?offset=${offset - 20}`)
    }
  }

  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 gap-3 p-6">
        {poke.map((item, index) => (
          <PokeCard data={item} key={index}/>
        ))}
        <div className="col-span-2 flex justify-between">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 192 512"
            className="h-10 w-10 cursor-pointer text-black dark:text-white"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleBack}
          >
            <path d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 192 512"
            className="h-10 w-10 cursor-pointer text-black dark:text-white"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleNext}
          >
            <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
          </svg>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
