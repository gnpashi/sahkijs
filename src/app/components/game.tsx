"use client";
import React, { useState } from "react";
import { ClockIcon, UsersIcon } from "@heroicons/react/24/outline";
import { IGameProps } from "@/types";

export default function Game({ game }: IGameProps) {
  const [isOpen, setOpen] = useState(false);
  function openGame() {
    setOpen(!isOpen);
  }
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-3">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4">
          <button onClick={openGame}>{game.name}</button>
        </h2>
      </div>
      <div className="flex gap-2">
        <span className="flex">
          <ClockIcon className="h-6 w-6 text-gray-500" />
          {game.time}
        </span>
        <span className="flex">
          <UsersIcon className="h-6 w-6 text-gray-500" />
          {game.numPeople}
        </span>
      </div>
      <p>{game.description}</p>
      <p
        className={`transition-all ease-in-out duration-300 ${isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"} overflow-hidden`}
      >
        {game.instructions}
      </p>
      <div>
        {game.tags.map((tag, index) => (
          <span key={index} className="ml-2">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
