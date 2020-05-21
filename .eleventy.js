module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('config')
    eleventyConfig.addPassthroughCopy('images')
    eleventyConfig.addPassthroughCopy('js')
    eleventyConfig.addPassthroughCopy('webfonts')
    eleventyConfig.addPassthroughCopy('CNAME')
    return {
        passthroughFileCopy: true
    }
}