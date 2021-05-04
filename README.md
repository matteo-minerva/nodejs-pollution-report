<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://canostra.000webhostapp.com/">
    <img src="/logo.png" alt="Screenshot" style="border-radius: 9999px;">
  </a>

  <h3 align="center">Pollution Reporter</h3>

  <p align="center">
    Project created for NodeJS Super Guide
    <br />
    <br />
    <a href="https://canostra.000webhostapp.com/">Live Demo</a>
    ·
    <a href="https://github.com/matteo-minerva/nodejs-pollution-report/issues">Report Bug</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Website Screenshot][product-screenshot]](https://example.com)

Make a Node application that helps report polluted places nearby.

Requirements:

- You will be able to provide the application with a graphical interface, or you will be able to implement only the API, this at your complete discretion;

- In order to use it, you will need to make available the upload of photos certifying the environmental pollution taking place, and the address/location of the same;

- The application will then have to provide an endpoint to display the list of all the reported places.

### Built With

- [NodeJS](https://nodejs.org/)
- [ExpressJS](https://expressjs.com/)

<!-- GETTING STARTED -->

## Getting Started

1. Clone the repo
   ```sh
   git clone https://github.com/matteo-minerva/nodejs-pollution-report
   ```
2. Setup a DB (eg. using XAMPP or w/e).
3. Import the project table from the migration file `nodejs_matteo_minerva.sql`.
4. Create a `.env` file and fill it like so
   ```env
   DB_HOST=YOUR_HOST
   DB_USER=YOUR_USERNAME
   DB_PASSWORD=YOUR_PASSWORD
   DB_NAME=YOUR_DB_NAME
   ```
5. Install all the missing dependecies running

```node
npm install
```

6. Now you should be able to run the server with nodemon

```node
nodemon server.js
```

<!-- USAGE -->

## Usage

You can access the form to submit data by visiting

```url
http://localhost:3000/
```

The server has only one endpoint that allows the user to see the full list of reports

```url
http://localhost:3000/api/all
```

<!-- CONTACT -->

## Contact

Matteo Minerva - m.minerva@outlook.it

start2impact personal page: https://talent.start2impact.it/profile/matteo-minerva

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [dotenv](https://github.com/motdotla/dotenv)
- [EJS](https://ejs.co/)
- [Multer](https://github.com/expressjs/multer)
- [mysql](https://github.com/mysqljs/mysql)
- [nodemon](https://github.com/remy/nodemon)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[issues-shield]: https://img.shields.io/github/issues/matteo-minerva/nodejs-pollution-report/repo.svg?style=for-the-badge
[issues-url]: https://github.com/matteo-minerva/nodejs-pollution-report/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/m-minerva
[product-screenshot]: /screenshot.png
