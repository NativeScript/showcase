## Submit your app to https://nativescript.org/showcase

1. Fork this repo
2. Create a new file (and folder): `apps/<appname>/<appname>.yaml`
3. Add your app logo to `apps/<appname>/<appname>.webp`
4. Submit a pull request with your changes

### Structure of each entry

```yaml
name:          # Name of the app
description:   # short description of the app
links:
  android:     # google play link
  ios:         # app store link
  repo:        # link to source code if publicly available
flavor:        # angular | vue | react | svelte | capacitor | javascript | typescript
```

A `name`, `description` and at least one link is required, the rest is optional. 

If a `flavor` is specified, the framework logo will show up on the listing.

*Specifying a `repo` does not show up on the site currently, however once we implement more filterin options, we'll start showing a link to the repo when available.*

### Tips on getting the .webp logo of the app

Drag/drop your app's logo from Google Play is the easiest as it will drop a properly sized `.webp` file in the folder.

If using an app icon from the Apple App Store, you can inspect the DOM to reveal the background image (also a `.webp` file) which can be saved in the folder.

> **Note**: the drag & drop method only works on retina screens, on non-retina screens you can use Chrome Devtools responsive view to set the Device Pixel-Ratio (DPR) to 2.0 or above and refresh the page. Now the icon should be a `.webp` image you can drag and drop into the `apps/<appname>/` folder, then manually rename it to `<appname>.webp`.
