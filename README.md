# Soundboard

[![Deploy to GitHub Pages](https://github.com/tunviii/Soundboard/actions/workflows/deploy.yml/badge.svg)](https://github.com/tunviii/Soundboard/actions/workflows/deploy.yml)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=111)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-enabled-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)
[![GitHub Pages](https://img.shields.io/badge/deployed_with-GitHub_Pages-222?logo=githubpages&logoColor=white)](https://tunviii.github.io/Soundboard/)

A playful React soundboard with 12 buttons, one-at-a-time audio playback, volume control, and GitHub Pages deployment.

**Live app:** [tunviii.github.io/Soundboard](https://tunviii.github.io/Soundboard/)

## Table of Contents

- [Features](#features)
- [Sound Buttons](#sound-buttons)
- [Controls](#controls)
- [Run Locally](#run-locally)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Project Structure](#project-structure)

## Features

- 12 sound buttons arranged in a responsive soundboard grid.
- 6 x 2 desktop layout for fast scanning and clicking.
- One-at-a-time playback, so a new sound stops the previous sound first.
- Volume slider that updates the current sound immediately.
- Pause Audio button for pausing the current clip.
- Responsive layout for smaller screens.
- Automated GitHub Pages deployment with GitHub Actions.


## Controls

<details open>
<summary>How playback works</summary>

| Control | What it does |
|---|---|
| Sound button | Stops the current sound and starts the selected sound. |
| Volume slider | Changes the app volume and updates the current sound. |
| Pause Audio | Pauses the current sound without starting another sound. |

</details>

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Available Scripts

<details>
<summary>View npm scripts</summary>

| Script | Description |
|---|---|
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Builds the production app into `dist`. |
| `npm run lint` | Runs ESLint checks. |
| `npm run preview` | Serves the production build locally. |

</details>

## Deployment

This project deploys to GitHub Pages through:

```text
.github/workflows/deploy.yml
```

The workflow runs when changes are pushed to `main` or `master`. It installs dependencies, builds the Vite app, uploads `dist`, and publishes it with GitHub Pages.

<details>
<summary>Manual deployment checklist</summary>

- Commit your changes.
- Push to `main` or `master`.
- Open the repository's **Actions** tab.
- Select **Deploy to GitHub Pages**.
- Wait for the workflow to complete.
- Visit the live app link at the top of this README.

</details>

## Project Structure

```text
soundboard/
  .github/
    workflows/
      deploy.yml
  src/
    assets/
    components/
      SoundButton.jsx
      SoundButton.css
    App.jsx
    App.css
  package.json
  README.md
```
