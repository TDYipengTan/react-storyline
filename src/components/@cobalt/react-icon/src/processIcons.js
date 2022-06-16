const fs = require("fs");
const prettier = require("prettier");
const readline = require("readline");
const fetch = require("node-fetch");

function writeNamesFiles(catalog, version) {
  const names = [
    ...Object.values(catalog).reduce(
      (currNames, ligature) => [...currNames, ...ligature],
      []
    )
  ];

  const header = `// This file is generated automatically by processIcons.ts

`;

  const catalogString = `${header} export const iconsCatalog = ${JSON.stringify(
    catalog
  )}`;

  fs.writeFile(
    `${__dirname}/iconsCatalog.ts`,
    prettier.format(catalogString, { parser: "typescript" }),
    () => {
      console.log("iconsCatalog.ts generated!");
    }
  );

  const typesHeader = `${header} const names = <const>[`;

  const namesArrayString = names.reduce((currString, name) => {
    return `${currString}
    "${name}",`;
  }, typesHeader);

  const formattedVersion = version.split(".").join("-");

  const completeString = `${namesArrayString.substr(
    0,
    namesArrayString.length - 1
  )}
  ];

  export type Name = typeof names[number];

  export const FONT_FAMILY_VERSION = "${formattedVersion}";
  `;

  fs.writeFile(
    `${__dirname}/names.ts`,
    prettier.format(completeString, { parser: "typescript" }),
    () => {
      console.log("names.ts generated!");
    }
  );
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Assets version: ", version => {
  const PRD_URL = `https://prd-cdn-talkdesk.talkdesk.com/cobalt-utils/assets/${version}/icons/catalog.json`;

  fetch(PRD_URL)
    .then(response => response.json())
    .then(catalog => writeNamesFiles(catalog, version))
    .catch(error => console.error(error));

  rl.close();
});
