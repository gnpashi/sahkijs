import { ObjectId } from "mongodb";

export interface IGame {
  _id: ObjectId; // Assuming you're using MongoDB's ObjectId
  name: string;
  description: string;
  instructions: string;
  time: string;
  numPeople: string;
  tags: string[];
}

export interface IGameProps {
  game: IGame;
}

export interface IGameListProps {
  games: IGame[];
}
