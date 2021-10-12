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

			const links = {};
			if (appData.links.android) {
				links.android = appData.links.android;
			}
			if (appData.links.ios) {
				links.ios = appData.links.ios;
			}
			if (appData.links.repo) {
				links.repo = appData.links.repo;
			}

			return {
				name: appData.name,
				description: appData.description,
				logo: hasLogo ? '/assets/showcase-logos/' + logoFilename : undefined,
				links: links,
				flavor: appData.flavor,
			}
		})

		return JSON.stringify(apps, null, 2)
	}
}

module.exports = Showcases
