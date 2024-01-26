const { execSync } = require("child_process");
const { writeFileSync, copyFileSync } = require("fs");
const pkg = require("./package.json");

const addVersion = (version = "") => {
  return version
    .split(".")
    .reverse()
    .map((e, i) => (!i ? Number(e) + 1 : Number(e)))
    .reverse()
    .join(".");
};

console.log("start build " + new Date().toLocaleString());

execSync("rm -rf build", { stdio: "inherit" });

console.log("[√] delete build dir");

execSync("yarn build:pkg", { stdio: "inherit" });

console.log("[√] build success");

const newVersion = addVersion(pkg.version);

const info = {
  ...pkg,
  version: newVersion,
};

const newPkg = { ...info };

delete info.scripts;
delete info.dependencies;
delete info.devDependencies;

writeFileSync("./build/package.json", JSON.stringify(info, null, 2), "utf-8");

console.log("[√] write package.json");

copyFileSync("./Readme.md", "./build/Readme.md");

console.log("[√] copy Readme.md");

execSync("cd ./build && sudo npm publish -f", { stdio: "inherit" });

console.log("[√] publish success");

writeFileSync("./package.json", JSON.stringify(newPkg, null, 2), "utf-8");

console.log(`npm site： https://www.npmjs.com/package/${pkg.name}`);
