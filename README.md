# Bijan Parvin's Portfolio built with Next.js (App Rotuer), Tailwind CSS 3 and TypeScript 

🚀 Portfolio in Next.js (App router), Tailwind CSS and TypeScript ⚡️ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, VSCode, Vercel, PostCSS, Tailwind CSS.

## Table of Contents
- [Features](#features)
- [Included Components](#included-templates)
- [Philosophy](#philosophy)
- [Requirements](#requirements)
  - [Development Environment](#development-environment)
- [Getting started](#getting-started)
- [SEO INFO and OpenGraph](#seo-info-and-opengraph)
- [Sitemap](#sitemap)
- [Deployments](#deployments)
  - [Deploying to Production](#deploying-to-production)
  - [Deploying with Vercel](#deploying-with-vercel)
  - [Running Production-Like Environment Locally](#running-production-like-environment-locally)
- [VSCode information (optional)](#vscode-information-optional)
- [License](#license)

## Features

Developer experience first:

- 🔥 [Next.js](https://nextjs.org) for Static Site Generator
- 🎨 Integrated with [Tailwind CSS](https://tailwindcss.com)
- 🎨 Integrated with [Flowbite React](https://www.flowbite-react.com/)
- 💅 PostCSS for processing Tailwind CSS and integrated to `styled-jsx`
- 🎉 Type checking [TypeScript](https://www.typescriptlang.org)
- ✅ Strict Mode for TypeScript and React 18
- ✏️ Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals and Airbnb configuration)
- 🛠 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🖱️ One click deployment with Netlify (or manual deployment to any hosting services)
- 🌈 Include a FREE theme
- 💯 Maximize lighthouse score
- [next-seo](https://github.com/garmeeh/next-seo) for SEO Details, Meta Tags, and OpenGraph Info
- [next-sitemap](https://www.npmjs.com/package/next-sitemap) implemented for sitemap and robots.txt file creation

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

## Philosophy

- Minimal code
- SEO-friendly
- 🚀 Production-ready


## Requirements

- Node.js and npm

### Development Environment

This project is configured to use Node.js version 20.11.0. Please make sure you have Node.js 20.11.0 installed before working on the project. To easily manage Node.js versions, consider using NVM (Node Version Manager).


## Getting started

Run the following command on your local environment:

For working inside this git remote repo
```
git clone git@github.com:bparvin12/BijanParvin_Portfolio_FE.git BijanParvin_Portfolio_FE
cd BijanParvin_Portfolio_FE
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project. For your information, Next JS need to take some time to compile the project for your first time.

```
├── README.md            # README file
├── next.config.js       # Next JS configuration
├── public               # Public folder
│       └── images       # Image used by default template
├── src
|   ├── components
│   ├── app              # Next JS pages
│   ├── styles           # PostCSS style folder with Tailwind
│   ├── templates        # Default template
│   └── utils            # Utility folder
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```


## SEO INFO and OpenGraph
This project utilizes Next.js implementations for SEO Metadata.


## Sitemap
Sitemap is generated dynamically after the `build` step with `postbuild` script. It is created via the [next-sitemap](https://www.npmjs.com/package/next-sitemap) package. It generates a simple sitemap.xml and robots.txt when the project is built and deployed. 


## Deployments
### Deploying to Production
Deployments are triggered automatically whenever you push to a branch or complete a merge request. The `main` branch deploys what Vercel considers Production, and the rest of the branches deploy a feature or development type of URL. 


### Deploying with Vercel
Follow instructions provided by Vercel and Next.js [here](https://nextjs.org/learn-pages-router/basics/deploying-nextjs-app/deploy)

### Running Production-Like Environment Locally

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build-prod
```

Now, your theme is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.


## VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.


## License

Licensed under the MIT License, Copyright © 2024

See [LICENSE](LICENSE) for more information.
