import Search from "@/app/components/search";
import GameList from "@/app/components/gamelist";
import { getGames } from "@/app/utils";
import { IGame } from "@/types";

export default async function Home() {
  const games: IGame[] = (await getGames()) as unknown as IGame[];
  let times: string[] = [];
  let numPeoples: string[] = [];
  let tags: string[] = [];
  games.map((game) => {
    game.tags.map((tag: string) => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
    if (!numPeoples.includes(game.numPeople)) {
      numPeoples.push(game.numPeople);
    }
    if (!times.includes(game.time)) {
      times.push(game.time);
    }
  });
  return (
    <main>
      <Search times={times} numPeoples={numPeoples} tags={tags} />
      <GameList games={games} />
    </main>
  );
}
