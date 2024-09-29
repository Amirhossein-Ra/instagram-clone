"use client";
import React, { useEffect, useState } from "react";
import minifaker, { jobTitle } from "minifaker";
import "minifaker/locales/en";
export default function Suggestion() {
  const [suggestions, setSuggestion] = useState([]);

  useEffect(() => {
    const suggesstions = minifaker.array(5, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      jobTitle: minifaker.jobTitle(),
      id: i,
    }));
    setSuggestion(suggesstions);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex items-center justify-between mb-5  text-sm">
        <h1 className="font-bold text-gray-400">Suggestion for you </h1>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>

      {suggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          className="flex items-center justify-between mt-3 "
        >
          <img
            src={`https://i.pravatar.cc/150?img=${Math.ceil(
              Math.random() * 70
            )}`}
            alt={suggestion.username}
            className="h-10 rounded-full border p-1"
          />
          <div className="flex-1 ml-4">
            <h1 className="font-bold text-gray-600 text-sm">
              {suggestion.username}
            </h1>
            <h3 className="text-sm text-gray-400 truncate max-w-[230]">
              {suggestion.jobTitle}
            </h3>
          </div>
          <button className="text-blue-400 text-sm">Follow</button>
        </div>
      ))}
    </div>
  );
}
