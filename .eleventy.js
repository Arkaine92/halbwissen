export default function(eleventyConfig) {
  // Beispiel: Bilder kopieren
  eleventyConfig.addPassthroughCopy("./assets");

  return {
    dir: {
      input: "./",
      output: "_site"
    }
  };
}
