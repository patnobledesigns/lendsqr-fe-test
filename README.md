
# LendSqr full stack engineering test

Project was built using React with TypeScript and SASS. 


## Requirements

- Build the 4 pages Login, Dashboard, User page, User details page
- The user pages should pull data from a mock api with 500 records
- Use local storage or indexedDB to store and retrieve user details on the user details page.
- The page must be mobile responsive


## Author

- [@patnobledesigns](https://www.github.com/patnobledesigns)


## API Reference

#### Get all Users

```http
  GET https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users
```

#### Get user by ID

```http
  GET https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}
```

## Installation

To install this project dependencies

```bash
  yarn install
  or
  npm install
```
After complete instalation, run project with:
```bash
  npm run dev
```

The login project has no backend authentication. Just add any dummy email and password and you will be automatically redirected to the dashboard page.

### PAGES

```http
  GET https://kalu-patrick-lendsqr-fe-test.netlify.app
```

```http
  GET https://kalu-patrick-lendsqr-fe-test.netlify.app/users
```

```http
  GET https://kalu-patrick-lendsqr-fe-test.netlify.app/users/${id}
```
