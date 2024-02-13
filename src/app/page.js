import React from "react";
import { writeFile, readFile } from "../helpers/file-helpers";

const DB_PATH = "src/database.json";

async function Home() {
  const data = JSON.parse(readFile(DB_PATH));
  data.hits += 1;
  writeFile(DB_PATH, JSON.stringify(data));

  return (
    <main>
      <h1>Hello Next!</h1>
      <p>You are the visitor number: {data.hits}</p>
    </main>
  );
}

export default Home;
