import { inputUrl } from "./robots/input";

const inputText = inputUrl();

const arraySplit = inputText.split(`"`)

const urlText = `${arraySplit[1]}`
const urlTextReplace = urlText
    .replace("em=2", "app=excel")
    .replace("embed", "download");

console.log("\n");
console.log(urlTextReplace);


