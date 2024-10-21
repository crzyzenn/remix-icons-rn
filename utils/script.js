const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Configure paths
const dirs = fs.readdirSync("./node_modules/remixicon/icons");
const iconDirs = dirs.map((dir) => `./node_modules/remixicon/icons/${dir}`);
const outputDir = "components/icons";

// Delete the old index.js if it exists
const indexPath = path.join(outputDir, "index.js");
if (fs.existsSync(indexPath)) {
  fs.unlinkSync(indexPath);
}

// Process each directory
iconDirs.forEach((dir) => {
  console.log("⚙️ Processing directory:", dir);
  const escapedDir = `"${dir}"`; // Enclose the path in double quotes
  execSync(`npx @svgr/cli --native --out-dir ${outputDir} ${escapedDir}`);
});

// Generate a single index.js file
const files = fs.readdirSync(outputDir);
const exportStatements = files
  .filter((file) => file.endsWith(".js"))
  .map((file) => {
    const basename = path.basename(file, path.extname(file));
    const componentName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    return `export { default as ${componentName} } from './${basename}';`;
  });

fs.writeFileSync(indexPath, exportStatements.join("\n"), "utf8");
