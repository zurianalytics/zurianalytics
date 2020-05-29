module.exports = function(eleventyConfig) {

    // Add passthrough file copy of generated dir
    eleventyConfig.addPassthroughCopy({"src/images": "images"});
    eleventyConfig.addPassthroughCopy({"src/config": "config"});
    eleventyConfig.addPassthroughCopy("src/CNAME");

    return {
      passthroughFileCopy: true
    }
  }