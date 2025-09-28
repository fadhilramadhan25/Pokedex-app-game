import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { PokemonDetail } from "@/utils/apis/pokemon";

interface Props {
  data: PokemonDetail;
  onRemove: (nickname: string) => void;
}

const imageCache: Record<string, string> = {};
const preloadedImages: Record<string, string> = {};

const MyPokeCard: React.FC<Props> = (props) => {
    const {data, onRemove} = props
  const { name, id, nickname } = data;
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    const loadImage = async () => {
      if (imageCache[id]) {
        setImageSrc(imageCache[id]);
      } else if (preloadedImages[id]) {
        setImageSrc(preloadedImages[id]);
        imageCache[id] = preloadedImages[id]; 
      } else {
        try {
          const response = await fetch(
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
          );
          if (response.ok) {
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setImageSrc(imageUrl);
            imageCache[id] = imageUrl; 
            preloadedImages[id] = imageUrl; 
          }
        } catch (error) {
          console.error("Error loading image:", error);
        }
      }
    };

    loadImage();
  }, [id]);

  return (
    <div
      className="flex flex-col relative h-full"
      style={{ textDecoration: "none" }}
    >
      <div className="flex justify-end absolute top-0 right-0">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 1024 1024"
          className="h-8 w-8 justify-items-end text-black dark:text-white cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => onRemove(nickname)}
        >
          <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
        </svg>
      </div>
      <Link to={`/detail/tamed/${name}`} className="flex flex-col h-full dark:border-white border-black rounded-md border-2">
        <div className="flex h-full w-full items-center justify-center p-3">
          {imageSrc ? (
            <img src={imageSrc} alt="poke" />
          ) : (
            <Loader2 className="mr-2 h-4 animate-spin" />
          )}
        </div>
        <div className="w-full bg-black py-2 text-center font-arcade text-xs font-bold uppercase tracking-widest text-white">
          <p>{nickname}</p>
          <p>{`<${name}>`}</p>
        </div>
      </Link>
    </div>
  );
};

export default MyPokeCard;
