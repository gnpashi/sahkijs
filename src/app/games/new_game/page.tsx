"use client";
import React, { useEffect, useState } from "react";

const GameForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    instructions: "",
    time: "",
    numPeople: "",
    tags: [],
  });
  const [tags, setTags] = useState<string[]>([]);
  useEffect(() => {
    const getTags = async () => {
      const res = await fetch("/api/games");
      const games = await res.json();

      let tags: string[] = [];
      games.map((game) => {
        if (game.tags && game.tags.length > 0) {
          game.tags.map((tag: string) => {
            if (!tags.includes(tag)) {
              tags.push(tag);
            }
          });
        }
      });
      setTags(tags);
    };
    getTags();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e) => {
    const { options } = e.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setFormData({ ...formData, tags: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    const res = await fetch("/api/new_game", {
      method: "POST", // Specify the method
      headers: {
        // Headers are important to indicate the type of content you're sending
        "Content-Type": "application/json",
        // Add any other necessary headers
      },
      body: JSON.stringify(formData),
    });
    const game = await res.json();
    console.log(game);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-gray-800">משחק חדש</h1>{" "}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            שם
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            תיאור קצר
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="instructions"
          >
            הוראות מפורטות
          </label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="time"
          >
            כמה זמן?
          </label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            {/* Populate these options with the appropriate times */}
            <option value="">Select time...</option>
            <option value="15">15 min</option>
            <option value="30">30 min</option>
            {/* ... other options ... */}
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="numPeople"
          >
            כמה אנשים
          </label>
          <select
            id="numPeople"
            name="numPeople"
            value={formData.numPeople}
            onChange={handleInputChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="1-5">1-5</option>
            <option value="5-10">5-10</option>
            <option value="5-10">10+</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tags"
          >
            תגיות
          </label>
          <select
            id="tags"
            name="tags"
            multiple={true}
            value={formData.tags}
            onChange={handleSelectChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            {tags.map((tag, index) => {
              return (
                <option key={index} value={tag}>
                  {tag}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            שליחה
          </button>
        </div>
      </form>
    </div>
  );
};

export default GameForm;
