 English | [中文](./README.md)
## vite-react-crx
[This repository](https://github.com/Mirrorgo/vite-react-crx) is developed for Chrome extension using React and various cutting-edge technologies.

> The master branch contains the common configurations, while my personal preferences are reflected in the mirrorgo branch.

## Technology Stack & Development Environment
* pnpm 6.31.0
  * See more details👉[pnpm](https://juejin.cn/post/6932046455733485575)
* vite 2.8.0
  * Fast
  * Bundleless will definitely become mainstream in the future. Currently, Vite provides a better development experience.
  * [Further details](https://www.yuque.com/lalala-wm82o/qvhwgq/qkvgeo)
* React 17.0.2
* Manifest version: 3
  * v2 is to be deprecated
* TypeScript

## Main Features
* Code completion for Chrome-related APIs
* Write JSX for content_script injection instead of native JS
* Optimize the development experience in the dev environment. Able to directly view the UI injected by content_script.js (no need to view the effect of content_script.js injection in a real web page)
* Plugin hot reload (no need for manual refreshing)

## Project Structure Used in This Project
```
.
├── dist // Packaged files
|   ├── manifest.json
|   ├── options.js
|   ├── popup.js
|   ├── src_crx
|   │   ├── service_worker.js
|   │   ├── content_script.js
|   │   ├── options.html
|   │   ├── popup.html
|   │   └── src_content-script
|   │       └── main.js
|   └── ...//Other content, not necessary to list all
├── README.md
├── index.html // Page used for testing in the dev environment, not used in packaging
├── manifest.json // Entry point for the Chrome extension
├── package.json
├── pnpm-lock.yaml
├── src // React files for index.html
│   ├── App.tsx
│   ├── favicon.svg
│   ├── main.tsx
│   └── vite-env.d.ts
├── src_crx
│   ├── service_worker.ts // Will be service_worker.js after packaging
│   ├── content_script.ts // Will be content_script.js after packaging, contains an injected DOM node and a script tag (pointing to src_content_script)
│   ├── options.html // Entry for the options page
│   ├── popup.html // Entry for the popup page
│   ├── src_content_script // Will be main.js after packaging, describes the React file for the content-script injected UI
│   │   ├── App.tsx
│   │   ├── dev_index.html // HTML file created for easier viewing of the content-script injected UI effect in the dev environment, excluded after build
│   │   └── main.tsx
│   ├── src_options // React files for the options page
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── src_popup // React files for the popup page
│       ├── App.tsx
│       └── main.tsx
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts // Vite's configuration file
```

## Usage
### Regular Development Environment
* Run `dev`, it will lead to a dedicated development page, which won't be included in the package during the build process.

The Chrome extension itself is a multi-page application, where all pages are independent HTML files.
The content above the divider is also an HTML page after packaging.
Below the divider, the content will not practically exist during packaging. For instance, the content-script is a JS file injected into the page the user is browsing, but here, an HTML page is additionally authored to showcase the UI injected by content_script for easier viewing during development.

### Chrome Extension Environment
* Run `watch`.
See below in the "Plugin Hot Reload" section.
* Run `build`.

Both methods involve running scripts and importing the `dist` folder in developer mode.
When running `watch`, changes in the source code will auto-refresh.
For `build`, manual refreshing of the plugin is necessary after the build.

### Plugin Hot Reload
The instructions for plugin hot reload are already configured in the project's `package.json` by default:

```json
"scripts": {
    "dev": "vite",
    "watch": "tsc && vite build --watch", // Use during development for hot reload of the plugin
    "build": "tsc && vite build",
    "preview": "vite preview"
}
```

This way, using `watch` during development enables the hot reload feature, which manifests in two ways (upon saving changes):
* Automatic updates of the current plugin in the Chrome browser.
* Automatic refresh of the currently invoked web page.
However, during packaging and release, use `build`. During hot reload, temporary files supporting the hot reload feature, unrelated to your project, will be generated in the `dist` folder.

## Setup Methods
### Method 1 (Even if using Method 1, it's essential to review Method 2 to modify your project's configuration better)
Download this project locally and delete unnecessary content.

### Method 2
Step-by-step, set up a project identical to this project's structure. Check the [tutorial](docs/guide.md).

## References
The documentation was partly referenced from👉[this article](https://github.com/yeqisong/vite-plugin-vue-crx3/blob/master/README.md).
The project's construction was inspired by👉[this project](https://github.com/KipSong/vite-chrome-extension).

## Acknowledgments
Thanks to the author of the [vite-chrome-extension project](https://github.com/KipSong) for clarifying queries.

---
Hey friend, how about giving a STAR? 😘
