const yaml = require('js-yaml')

module.exports = function (eleventyConfig) {
	// eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
	eleventyConfig.addTemplateFormats('yaml')
	eleventyConfig.addExtension('yaml', {
		compile(contents, filePath) {
			return (opts) => {
				return yaml.load(contents)
			}
		},
	})

	eleventyConfig.addCollection('apps', function (collectionApi) {
		return collectionApi.getFilteredByGlob('apps/**/*.yaml')
	})

	eleventyConfig.addGlobalData('permalink', false)
	eleventyConfig.addPassthroughCopy({ 'apps/**/*.webp': '/showcase-logos' })

	return {
		dir: {
			input: './apps',
			output: './dist/',
		},
	}
}
