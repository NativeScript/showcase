const fs = require('fs');
const path = require('path');

const yellow = "\u001B[33m";

class Showcases {
	data() {
		return {
			permalink: '/showcases.json',
		}
	}

	render(data) {
		const apps = data.collections.apps.map((entry) => {
			const appData = entry.templateContent
			const logoFilename = entry.fileSlug + '.webp';
			const logoPath = entry.inputPath.replace('yaml', 'webp')

			const hasLogo = fs.existsSync(path.resolve(logoPath))
			
			if(!hasLogo) {
				console.warn(`\n\n${yellow}WARN: App "${appData.name}" located in ${entry.inputPath} has no associated logo (${logoPath} does not exist)\n\n`)
			}

			return {
				name: appData.name,
				description: appData.description,
				logo: hasLogo ? '/showcase-logos/' + logoFilename : undefined,
				links: {
					android: appData.links.android,
					ios: appData.links.ios,
				},
				flavor: appData.flavor,
			}
		})

		return JSON.stringify(apps, null, 2)
	}
}

module.exports = Showcases
