import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { getIdFromUrl } from '@/utils/getUrlId';

interface Props {
  data: {
    name: string;
    url: string;
  };
}

const imageCache: Record<string, string> = {};
const preloadedImages: Record<string, string> = {};

const PokeCard: React.FC<Props> = (props) => {
  const { name, url } = props.data;
  const [imageSrc, setImageSrc] = useState<string>('');

  const id: string = getIdFromUrl(url);

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
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
          );
          if (response.ok) {
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setImageSrc(imageUrl);
            imageCache[id] = imageUrl; 
            preloadedImages[id] = imageUrl; 
          }
        } catch (error) {
          console.error('Error loading image:', error);
        }
      }
    };

    loadImage();
  }, [id]);

  return (
    <Link to={`/detail/wild/${name}`} className='flex flex-col h-full dark:border-white border-black rounded-md border-2'>
      <div className='flex h-full w-full items-center justify-center p-3'>
        {imageSrc ? (
          <img src={imageSrc} alt='pokemon' />
        ) : (
          <Loader2 className="mr-2 h-4 animate-spin" />
        )}
      </div>
      <p className='w-full bg-black py-2 text-center font-arcade text-xs font-bold uppercase tracking-widest text-white'>{name}</p>
    </Link>
  );
};

export default PokeCard;
