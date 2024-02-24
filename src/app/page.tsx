import Search from "./components/search";
import NavBar from "./components/navbar";
import GameList from "./components/gamelist";
import { getGames } from "./utils";

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
