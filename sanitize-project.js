const fs = require("fs");
const path = require("path");

// Configuration
const sourceDir = __dirname;
const outputDir = path.join(__dirname, "clean-project");

console.log("Starting sanitization process...");

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Find all HTML files in the current directory
const htmlFiles = fs
  .readdirSync(sourceDir)
  .filter((file) => file.endsWith(".html"));

htmlFiles.forEach((file) => {
  const filePath = path.join(sourceDir, file);
  let content = fs.readFileSync(filePath, "utf-8");

  // 1. Remove ALL HTML comments (This deletes the AI "IMAGE PROMPT" and SDK comments)
  content = content.replace(/<!--[\s\S]*?-->/g, "");

  // 2. Remove all actual code blocks (Replaces them with a clean placeholder)
  content = content.replace(
    /<div class="code-block">[\s\S]*?<\/div>/g,
    '\n<div class="alert alert-secondary text-center my-3 border-0"><i>[ Code implementation omitted for theory presentation ]</i></div>\n',
  );

  // 3. Remove all terminal/code output blocks
  content = content.replace(/<div class="code-output">[\s\S]*?<\/div>/g, "");

  // Save the cleaned content into the new folder
  const outputPath = path.join(outputDir, file);
  fs.writeFileSync(outputPath, content);
  console.log(`✅ Cleaned and saved: ${file}`);
});

console.log(
  '\n🎉 Success! Your clean project without code/comments is ready in the "clean-project" folder.',
);
console.log(
  '👉 Next Step: Copy your "images" folder into the "clean-project" folder so the pictures still load!',
);
