# CampusLink — Student Portal (CSCI426 Project, Phase 1)

CampusLink is a frontend-only student portal built with **React**. Students can browse a course
catalog, open a details page for each course, log in (demo), enroll in courses, see a weekly
timetable, track their GPA by semester and test grade scenarios with a GPA calculator.

> All data is fictional and lives in the frontend (`src/data`). There is no backend: login is a
> mock that stores a demo profile in `localStorage`.

## Live demo

`<add your Vercel / Netlify / GitHub Pages link here>`

## Features

- 8 routes: Home, About, Courses, **Course Details (dynamic `/courses/:id`)**, Contact, Login,
  Dashboard, 404
- Search, department filter and sorting on the course catalog
- Enroll / drop courses (saved in `localStorage`)
- Dashboard: stat tiles, GPA-by-semester chart (hand-written SVG), GPA calculator, weekly timetable
- Contact form with validation
- Dark mode toggle (remembered between visits)
- Responsive layout (mobile, tablet, desktop) with a hamburger navbar

## Tech stack

| Tech | Why |
|---|---|
| React 19 + Vite | fast dev server and build |
| React Router (HashRouter) | client-side routing; hash routing works on GitHub Pages without extra config |
| Bootstrap 5 | responsive grid and components |
| Context API | theme and mock-auth state |
| localStorage | persistence without a backend |

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build
```

Requires Node 18+.

## Deploy

**Vercel / Netlify (easiest):** import the GitHub repo. Build command `npm run build`, output
directory `dist`. No extra settings.

**GitHub Pages:** `npm run build`, then publish the `dist/` folder (for example with the
`gh-pages` package or a GitHub Action). `base: './'` and `HashRouter` are already configured.

## Project structure

```
src/
  components/   Navbar, Footer, CourseCard, GpaChart
  context/      ThemeContext, AuthContext (mock login + enrollment)
  data/         courses.js, student.js (fictional data)
  pages/        Home, About, Courses, CourseDetails, Contact, Login, Dashboard, NotFound
  styles.css    custom theme on top of Bootstrap
```

## Screenshots

Add screenshots to a `screenshots/` folder and link them here:

```
![Home](screenshots/home.png)
![Courses](screenshots/courses.png)
![Dashboard](screenshots/dashboard.png)
![Mobile](screenshots/mobile.png)
```

## Credits and sources

- Bootstrap 5 (MIT) for the base grid and components
- Emoji icons are native system emoji
- Course names, people, and the CampusLink brand are fictional

## Team contribution

| Member | Contribution |
|---|---|
| `<Name 1>` | `<e.g. Home, About, Navbar, styling, deployment>` |
| `<Name 2>` | `<e.g. Courses, Course Details, Dashboard, Contact, README>` |
