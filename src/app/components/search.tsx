"use client";
import { ISearchProps } from "@/types";
import {
  MagnifyingGlassIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Search({ times, numPeoples, tags }: ISearchProps) {
  const [isOpen, setOpen] = useState(false);
  function openSearch() {
    setOpen(!isOpen);
  }
  return (
    <div className="m-2">
      {isOpen ? (
        <div>
          <ChevronUpIcon onClick={openSearch} className="h-6 w-6" />
          {times.map((time, index) => (
            <span key={index}>{time}</span>
          ))}
          {numPeoples.map((numPeople, index) => (
            <span key={index}>{numPeople}</span>
          ))}
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      ) : (
        <button
          onClick={openSearch}
          className="flex gap-2 text-gray-600 p-2 border-2 rounded-full w-full"
        >
          <MagnifyingGlassIcon className="h-6 w-6" />
          <span>חיפוש</span>
        </button>
      )}
    </div>
  );
}
