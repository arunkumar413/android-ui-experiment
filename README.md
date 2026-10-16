# App Icon Library

A responsive React app for browsing a curated collection of app icons. Each app appears once in the grid and can be filtered by its labels.

## Features

- Browse all app icons in a responsive grid, including a four-column layout on mobile.
- Filter the collection with the sticky group menu. Each button shows the number of apps in that group.
- Search apps by name or label without duplicate results. Focusing search switches the selected group to **All** so search covers the complete collection.
- View the app count for **All** and for each group.

## Run locally

Requirements: Node.js and npm.

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

### Open on a phone over Wi-Fi

Connect your phone and computer to the same trusted Wi-Fi network, then start Vite so it accepts connections from the local network:

```sh
npm run dev -- --host 0.0.0.0
```

On macOS, find the computer's local IP address with:

```sh
ipconfig getifaddr en0
```

Open `http://<computer-ip-address>:5173` in the phone's browser, replacing the placeholder with the IP address. Your firewall may ask permission for the connection.

## Available scripts

```sh
npm run dev      # Start the Vite development server
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run Oxlint
```

## Deploy to GitHub Pages

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys
the app when code is pushed to the `main` or `master` branch. It derives the
Vite base path from the repository name so the app and its assets work from a
GitHub Pages project URL. Repositories named `<owner>.github.io` use the root
path.

To enable deployment:

1. Push the project to a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Set **Build and deployment → Source** to **GitHub Actions**.
4. Push to `main` or `master`, or run the **Deploy to GitHub Pages** workflow
   manually from the **Actions** tab.

After the workflow succeeds, the Pages URL appears in the workflow run's
deployment summary.
