"use client";

import { Pokemon } from "@/types/pokemon";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      const response = await fetch("/api/pokemons");
      const data = await response.json();
      setPokemons(data);
    };
    fetchInitialData();
  }, []);
  return (
    <div>
      <h1 className="text-center text-2xl font-bold py-4">포켓몬 도감</h1>
      {pokemons.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
          <p className="text-xl font-semibold">불러오는 중입니다</p>
        </div>
      ) : (
        <div className="grid grid-cols-6 gap-4 ml-3">
          {pokemons.map((pokemon) => (
            <Link
              key={pokemon.id}
              href={`/pokemon/${pokemon.id}`}
              className="flex flex-col items-center justify-center p-4 border border-dotted border-rose-500 rounded-md text-center"
            >
              <div className="text-black">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.korean_name}
                  width={96}
                  height={96}
                />
                <p>포켓몬 이름: {pokemon.korean_name}</p>
                <p>도감번호 : {pokemon.id}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default PokemonList;
