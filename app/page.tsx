"use client";
import { useAllFilmsSuspenseQuery } from "@graphql/generated";
import { useMemo } from "react";

export default function Home() {
  const { data } = useAllFilmsSuspenseQuery();

  const allFilms = useMemo(() => {
    const converted = data.allFilms?.edges?.map((x) => ({
      id: x?.node?.id,
      episodeID: x?.node?.episodeID,
      title: x?.node?.title,
      releaseDate: x?.node?.releaseDate,
      characters: x?.node?.characterConnection?.characters,
    }));
    return (converted ?? []).sort(
      (a, b) => (a.episodeID && b.episodeID && a.episodeID - b.episodeID) || 0,
    );
  }, [data]);

  return (
    <main className={"flex flex-col items-center gap-8 p-12"}>
      <h1 className={"text-4xl font-bold"}>Star Wars Films</h1>

      {allFilms.map((film) => (
        <li key={film.id} className={"flex flex-col items-center list-none"}>
          <p>Episode {film.episodeID}</p>
          <h2
            className={"text-xl font-bold"}
          >{`${film.title}(${film.releaseDate})`}</h2>
          <div className={"flex flex-wrap gap-2 mt-4"}>
            {film.characters?.map((character) => (
              <div key={character?.name} className={"text-xs"}>
                {character?.name}
              </div>
            ))}
          </div>
        </li>
      ))}
    </main>
  );
}
