import { RickAndMortyBaseApiUrl } from "@/app/consts";
import { LocationAPIResponse } from "@/app/location.types";

type FetchOptionsProps = Pick<RequestInit, "next" | "cache">;

export const fetchLocations = async (
  fetchOptions: FetchOptionsProps = {}
): Promise<LocationAPIResponse> => {
  const res = await fetch(`${RickAndMortyBaseApiUrl}/location`, fetchOptions);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
