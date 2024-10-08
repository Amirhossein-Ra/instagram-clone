import React from "react";
import Stories from "./Stories";

import Posts from "./Post";
import MiniProfile from "./MiniProfile";
import Suggestion from "./Suggestion";

export default function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
      <section className="md:col-span-2 ">
        <Stories />
        <Posts />
      </section>
      <section className=" hidden md:inline-grid md:grid-span-1 ">
        <div className="fixed w-[380px]">
          <MiniProfile />
          <Suggestion />
        </div>
      </section>
    </main>
  );
}
