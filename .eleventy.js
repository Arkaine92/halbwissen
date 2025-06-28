import yaml from "js-yaml";

export default function(eleventyConfig) {
  // Beispiel: Bilder kopieren
  eleventyConfig.addPassthroughCopy("./assets");
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));
  eleventyConfig.addPassthroughCopy("./admin");


  return {
    dir: {
      input: "./",
      output: "_site"
    }
  };
}
