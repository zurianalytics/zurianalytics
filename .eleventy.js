const htmlmin = require("html-minifier");
const CleanCSS = require("clean-css");
const Terser = require("terser");

module.exports = function(eleventyConfig) {

    /**
     * Include static resources
     */
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('config')
    eleventyConfig.addPassthroughCopy('images')
    eleventyConfig.addPassthroughCopy('js')
    eleventyConfig.addPassthroughCopy('CNAME')
    eleventyConfig.addPassthroughCopy('font')

    /**
     * Minify HTML
     */
    eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
        if( outputPath.endsWith(".html") ) {
            return htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
        }
        return content;
    });

    /**
     * Minify CSS
     */
    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });


    /**
     * Minify JS
     */
    eleventyConfig.addFilter("jsmin", function(code) {
        let minified = Terser.minify(code);
        if( minified.error ) {
            console.log("Terser error: ", minified.error);
            return code;
        }

        return minified.code;
    });

    return {
        passthroughFileCopy: true
    }
}
