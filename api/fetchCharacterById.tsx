import { RickAndMortyBaseApiUrl } from "@/app/consts";
import { CharacterAPIResponse } from "@/app/character";
import { SingleCharacter } from "@/app/singleCharacter";

type FetchOptionsProps = Pick<RequestInit, "next" | "cache"> & {
  characterId: string;
};

export const fetchCharacterById = async ({
  characterId,
  ...fetchOptions
}: FetchOptionsProps): Promise<SingleCharacter> => {
  const res = await fetch(
    `${RickAndMortyBaseApiUrl}/character/${characterId}`,
    fetchOptions
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
