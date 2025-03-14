# Portfolio - Main Branch

This is the **main branch** of my portfolio website. It contains the source code for development and production builds.

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone git@github.com-personal:yuliapsavinkova/yuliapsavinkova.github.io.git
cd yuliapsavinkova.github.io
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Run in Development Mode

```sh
npm run dev
```

This starts a local development server using **Vite**.

## 🔨 Building for Production

```sh
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 🌍 Deploying to GitHub Pages

### 🔹 Build for GitHub Pages

```sh
npm run github_build
```

- Deletes the previous `dist/` folder.
- Builds the project.
- Copies the `README_gh-pages.md` file for the deployed version.
- Creates a `.nojekyll` file to prevent GitHub Pages from ignoring files.

### 🔹 Deploy to GitHub Pages

```sh
npm run github_deploy
```

This pushes the built files to the `gh-pages` branch.

## 🖥️ Previewing Production Build Locally

```sh
npm run preview
```

This serves the production build locally before deploying.

## 📌 Notes

- The `main` branch is for source code and development.
- The `gh-pages` branch is only for deployment and should not be edited manually.
- Any changes to the source code should be made in `main`, then built and deployed.
