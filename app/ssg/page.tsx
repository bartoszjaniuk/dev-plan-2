import React from "react";
import { Metadata } from "next";
import { Card } from "@/components/card/Card";
import { fetchCharacters } from "@/api/fetchCharacters";

export const metadata: Metadata = {
  title: "SSG",
  description: "On this site data is provided by SSG",
};

const SsgPage = async () => {
  const { results } = await fetchCharacters();

  return (
    <>
      <h1>SSG</h1>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 relative">
        {results.map((result) => (
          <Card key={result.id} {...result} />
        ))}
      </main>
    </>
  );
};

export default SsgPage;
