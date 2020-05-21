const htmlmin = require("html-minifier");


module.exports = function(eleventyConfig) {

    /**
     * Include static resources
     */
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('config')
    eleventyConfig.addPassthroughCopy('images')
    eleventyConfig.addPassthroughCopy('js')
    eleventyConfig.addPassthroughCopy('webfonts')
    eleventyConfig.addPassthroughCopy('CNAME')

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

    return {
        passthroughFileCopy: true
    }
}
