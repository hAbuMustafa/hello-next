import React from "react";
import { writeFile, readFile } from "../../helpers/file-helpers";

const DB_PATH = "src/database.json";

function HitCounter() {
  let { hits } = JSON.parse(readFile(DB_PATH));
  hits += 1;
  writeFile(DB_PATH, JSON.stringify({ hits }));

  return hits;
}

export default HitCounter;
