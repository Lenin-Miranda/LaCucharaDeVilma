# La Cuchara de Vilma

Website for a family restaurant celebrating Nicaraguan cuisine in Las Vegas. Built with Next.js, React, TypeScript and Tailwind CSS, with restaurant photos, its story, reviews and visit/contact information.

## Local development

Requires Git, Node.js and npm. Use a Node release compatible with the dependencies in `package.json`.

```bash
git clone https://github.com/Lenin-Miranda/LaCucharaDeVilma.git
cd LaCucharaDeVilma
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Development commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Check source with ESLint |
| `npm run build` | Compile the production app |
| `npm start` | Serve the production build |

Run the build before starting the production server.

## Content and structure

- [src/app/components/](src/app/components/): page sections and navigation.
- [src/app/globals.css](src/app/globals.css): shared styles.
- [public/images/](public/images/): restaurant and food imagery.
- [package.json](package.json): exact dependency ranges and available commands.

Edit the relevant page sections to update restaurant information and replace images in `public/images/`. Keep filenames and references aligned, supply descriptive alternative text, and verify the navigation and visit links at mobile and desktop sizes.

## Deployment

Build and run from the repository root on a host that supports Next.js. The current source does not define application-specific environment variables. No automated test script is provided; use lint, the production build and a browser review when updating content.
