## Submit your app to https://nativescript.org/showcase

1. Fork this repo
2. Modify [showcases.json](showcases.json) to include your app information
3. Add your app logo to [assets/showcase-logos](assets/showcase-logos)
4. Submit a pull request with your changes

### Structure of each entry

```ts
{
    name: string; 
    description: string;
    logo: '/assets/showcase-logos/{your-added-logo}.webp',
    links: {
        android: string; // google play link
        ios: string; // app store link
    },
    flavor: 'angular' | 'vue' | 'react' | 'svelte' | 'capacitor' | 'javascript' | 'typescript';
}
```

If a `flavor` is specified, the framework logo will show up on the listing.

### Tips on adding app logo to assets/showcase-logos

Drag/drop your app's logo from Google Play is the easiest as it will drop a properly sized `.webp` file in the folder.

If using an app icon from the Apple App Store, you can inspect the DOM to reveal the background image (also a `.webp` file) which can be saved in the folder.
