import React from "react";
import Stories from "./Stories";

import Posts from "./Post";

export default function Feed() {
  return (
    <main>
      <section>
        <Stories />
        <Posts />
      </section>
      <section></section>
    </main>
  );
}
