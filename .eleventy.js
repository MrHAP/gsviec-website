import path from "node:path";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  eleventyConfig.addFilter("readableDate", (value) => {
    return new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "short",
      day: "2-digit"
    }).format(new Date(value));
  });

  eleventyConfig.addFilter("isoDate", (value) => {
    return new Date(value).toISOString();
  });

  eleventyConfig.addFilter("relativeUrl", (target, currentUrl = "/") => {
    if (!target || !target.startsWith("/") || target.startsWith("//")) return target;

    const markerIndex = target.search(/[?#]/);
    const baseTarget = markerIndex >= 0 ? target.slice(0, markerIndex) : target;
    const suffix = markerIndex >= 0 ? target.slice(markerIndex) : "";
    const currentDir = currentUrl.endsWith("/")
      ? currentUrl.slice(0, -1) || "/"
      : path.posix.dirname(currentUrl);
    const cleanTarget =
      baseTarget !== "/" && baseTarget.endsWith("/")
        ? baseTarget.slice(0, -1)
        : baseTarget;
    let relative = path.posix.relative(currentDir, cleanTarget) || ".";

    if (baseTarget.endsWith("/") && relative !== ".") {
      relative += "/";
    }

    if (baseTarget === "/" && relative === ".") {
      relative = "./";
    }

    return `${relative}${suffix}`;
  });

  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/posts/*.md")
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
}
