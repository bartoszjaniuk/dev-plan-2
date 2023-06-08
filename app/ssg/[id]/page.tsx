import { fetchCharacterById } from "@/api/fetchCharacterById";
import { fetchCharacters } from "@/api/fetchCharacters";
import React from "react";

export const generateStaticParams = async () => {
  const { results } = await fetchCharacters();

  return results.map((result) => ({
    id: result.id.toString(),
  }));
};

export const dynamicParams = true;

const SingleCharacterPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const character = await fetchCharacterById({ characterId: id });

  return <div>{character.name}</div>;
};

export default SingleCharacterPage;
