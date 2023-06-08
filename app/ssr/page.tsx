import React from "react";
import { Metadata } from "next";
import { Card } from "@/components/card/Card";
import { fetchCharacters } from "@/api/fetchCharacters";

export const metadata: Metadata = {
  title: "SSR",
  description: "On this site data is provided by SSR",
};

const SsrPage = async () => {
  const { results } = await fetchCharacters({ cache: "no-store" });
  return (
    <>
      <h1>SSR</h1>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 relative">
        {results.map((result) => (
          <Card key={result.id} {...result} />
        ))}
      </main>
    </>
  );
};

export default SsrPage;
