# Enginex

**Learn. Practice. Recall. Master.**

Enginex is a responsive engineering study-planning prototype. It includes a landing page, a seven-step curriculum setup, a dashboard, study tasks, active-recall quizzes, daily practice, timed weekly tests, progress analytics, resources, and settings.

## Run locally on Windows

1. Install [Node.js](https://nodejs.org/) if it is not already installed.
2. Double-click `start-enginex.bat`, or run `node server.js` in this folder.
3. Open <http://localhost:4173>.

The static app can also be opened directly from `index.html`.

## Publish with GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys the site after a push to `main`.

1. Create a GitHub repository and push the app files to its `main` branch.
2. In the repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
3. The workflow run publishes the site and reports its URL.

## Prototype boundaries

- Student data and progress are stored in this browser's local storage; there is no account service, server database, or cross-device synchronization.
- Sample subjects and topic questions are illustrative starter material. Verify them against the applicable university syllabus.
- Questions marked **PYQ-Style Practice** are not represented as authentic university past papers. No PYQ source has been verified by this prototype.
- Supported YouTube video and playlist links can be played in an embedded YouTube player inside Enginex. Playback still depends on the source video's embedding permissions and network access.
- Uploaded document contents are not parsed. Paste syllabus topics manually to use them in the generated schedule.
- Curriculum generation currently uses deterministic, built-in topic templates. It does not call an AI service.
