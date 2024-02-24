import Search from "@/app/components/search";
import NavBar from "@/app/components/navbar";
import GameList from "@/app/components/gamelist";
import { getGames } from "@/app/utils";

export default async function Home() {
  const games = await getGames();
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
      <NavBar />
      <Search times={times} numPeoples={numPeoples} tags={tags} />
      <GameList games={games} />
    </main>
  );
}
