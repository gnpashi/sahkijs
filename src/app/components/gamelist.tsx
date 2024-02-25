import React from "react";
import Game from "./game";
import {  IGameListProps } from "@/types";

export default function gamelist({ games }: IGameListProps) {
  return (
    <div className="p-2">
      {games.map((game, index) => (
        <Game game={game} key={index} />
      ))}
    </div>
  );
}
