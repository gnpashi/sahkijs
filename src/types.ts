export interface Game {
  id: string;
  name: string;
  description: string;
  instructions: string;
  time: string;
  numPeople: string;
  tags: string[];
}

export interface GameProps {
  game: Game;
}
