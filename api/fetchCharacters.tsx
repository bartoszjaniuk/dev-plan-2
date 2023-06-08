import { RickAndMortyBaseApiUrl } from "@/app/consts";
import { CharacterAPIResponse } from "@/app/character";

type FetchOptionsProps = Pick<RequestInit, "next" | "cache">;

export const fetchCharacters = async (
  fetchOptions: FetchOptionsProps = {}
): Promise<CharacterAPIResponse> => {
  const res = await fetch(
    `${RickAndMortyBaseApiUrl}/character?page=42`,
    fetchOptions
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
