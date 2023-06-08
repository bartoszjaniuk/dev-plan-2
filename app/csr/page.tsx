"use client";
import fetcher from "@/utils/fetcher";
import React from "react";
import useSWR from "swr";
import { CharacterAPIResponse } from "../character";
import { Card } from "@/components/card/Card";
import { RickAndMortyBaseApiUrl } from "../consts";

// Static Metadata - not avaliable on CSR
// export const metadata: Metadata = {
//   title: "Client Side Rendering Page",
//   description: "On this site data is provided by CSR",
// };

const CsrPage = () => {
  const {
    data,
    isLoading,
    mutate: fetchData,
  } = useSWR<CharacterAPIResponse>(
    `${RickAndMortyBaseApiUrl}/character`,
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <h1>CSR</h1>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 relative">
        {data?.results.map((result) => (
          <Card key={result.id} {...result} />
        ))}
      </main>
    </>
  );
};

export default CsrPage;
