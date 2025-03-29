# [Fakeflix](https://fakeflix.th3wall.codes)

[![Fakeflix](https://cdn.jsdelivr.net/gh/Th3Wall/assets-cdn/Fakeflix/Fakeflix_readme.png)](https://fakeflix.th3wall.codes)

## Table of Contents

- [About](#about)
- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Run Locally](#run-locally)
- [Requirements](#requirements)
- [Testing](#testing)
- [License](#license)

## Demo

## [Watch the demo video](123811962-01474580-d8f4-11eb-83ba-66cded3f321f.mp4)

## About

Fakeflix is a web application that allows users to browse movies and TV series, sign in with a custom or Google account, and manage their personal watchlist.

- Users can sign up or sign in through an authentication page.
- After logging in, users are redirected to the homepage, where they can browse a mix of movies and series categorized in rows.
- Each row represents a category and leads to a dedicated page with infinite scrolling.
- Users can navigate to different sections, including movies, series, new & popular, and favorites.
- Movies and series can be added or removed from "My List" using plus and minus buttons.
- The play button triggers a custom CSS-only animation.
- A search functionality allows users to search by movie name, actor, or director using TMDb’s catalog.

---

## Features

- Displays movies and series, including upcoming and popular titles.
- Category-specific pages with infinite scroll.
- Search by title, actor, or director.
- Add and remove movies from "My List".
- Detailed modal with additional information about each movie or series.
- Custom splash animation with Netflix-like sound.
- Play animation with Netflix-like sound.
- Google login support.
- User authentication with sign-in and sign-up options.
- Use of React hooks and custom hooks.
- Persistent favorites list using session storage.
- Fully responsive layout.
- Swipeable movie lists.
- Loading skeletons for improved user experience.
- Smooth route transitions and micro-interactions using Framer Motion.

---

## Technologies

- [TMDb API](https://www.themoviedb.org/)
- [React](https://reactjs.org/)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Hook Form](https://react-hook-form.com/)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [Redux](https://redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Redux Saga](https://redux-saga.js.org/)
- [Redux Persist](https://github.com/rt2zz/redux-persist)
- [Redux Logger](https://github.com/LogRocket/redux-logger)
- [Reselect](https://github.com/reduxjs/reselect)
- [Firebase](https://firebase.google.com/)
- [SCSS](https://sass-lang.com/)
- [SwiperJS](https://swiperjs.com/react)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## Run Locally

1. Clone the project

   ```
   git clone https://github.com/sayederfanarefin/ud-cps-518-fakeflix
   ```

2. Navigate to the project directory

   ```
   cd fakeflix
   ```

3. Install dependencies

   ```
   npm install
   ```

4. Create a .env file

   ```
   touch .env
   ```

5. Obtain a TMDb API key

- Sign up at The Movie Database (TMDb). [TMDb API](https://www.themoviedb.org/)
- Navigate to API settings and copy the API key.
- Add the following line to the .env file:

  ```
  REACT_APP_API_KEY=your_tmdb_api_key
  ```

6. Set up Firebase

- Sign up at Firebase.
- Create a project named "Fakeflix".
- Enable Google Analytics.
- Create a web app in [Firebase](https://firebase.google.com/)
- Copy the Firebase configuration details and add them to the .env file:

  ```
  REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
  REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
  REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
  REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
  REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
  REACT_APP_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
  ```

7. Start the development server
   ```
   npm start
   ```

## Requirements

- Git installed on your system
- Node.js installed on your system

## Testing

- Run the linter

  ```
  npm run lint
  ```

- Run the test suite
  ```
  npm test
  ```

## License

    MIT
