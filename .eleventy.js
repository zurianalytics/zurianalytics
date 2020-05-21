module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('config')
    eleventyConfig.addPassthroughCopy('images')
    eleventyConfig.addPassthroughCopy('js')
    eleventyConfig.addPassthroughCopy('webfonts')
    return {
        passthroughFileCopy: true
    }
}