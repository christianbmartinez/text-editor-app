[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![alt text](https://github.com/christianbmartinez/text-editor-app/blob/main/jate.jpg)

# Text Editor App

A full stack Progressive Web App text editor that uses Open DB for storing and retrieving content.

### Table of Contents

**[User Story](#user-story)**<br>
**[Acceptance Criteria](#acceptance-criteria)**<br>
**[Installation Instructions](#installation)**<br>
**[Usage Instructions](#usage)**<br>
**[License](#license)**<br>
**[Contributing](#contributing)**<br>
**[Questions](#questions)**<br>

# User Story

- AS A developer
- I WANT to create notes or code snippets with or without an internet connection
- SO THAT I can reliably retrieve them for later use

# Acceptance Criteria

- GIVEN a text editor web application
- WHEN I open my application in my editor
- THEN I should see a client server folder structure
- WHEN I run `npm start` from the root directory
- THEN I find that my application should start up the backend and serve the client
- WHEN I run the text editor application from my terminal
- THEN I find that my JavaScript files have been bundled using webpack
- WHEN I run my webpack plugins
- THEN I find that I have a generated HTML file, service worker, and a manifest file
- WHEN I use next-gen JavaScript in my application
- THEN I find that the text editor still functions in the browser without errors
- WHEN I open the text editor
- THEN I find that IndexedDB has immediately created a database storage
- WHEN I enter content and subsequently click off of the DOM window
- THEN I find that the content in the text editor has been saved with IndexedDB
- WHEN I reopen the text editor after closing it
- THEN I find that the content in the text editor has been retrieved from our IndexedDB
- WHEN I click on the Install button
- THEN I download my web application as an icon on my desktop
- WHEN I load my web application
- THEN I should have a registered service worker using workbox
- WHEN I register a service worker
- THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
- WHEN I deploy to Heroku
- THEN I should have proper build scripts for a webpack application

# Installation

`git clone https://github.com/christianbmartinez/text-editor-app.git`

After you've cloned it, install the dependencies it by running:

```
npm install
```

Which installs concurrently, goes into the client and server folders, and installs all dependencies.

# Usage

After you've installed the dependencies, run:

```
npm start
```

Which both builds the client for you, and starts up the server.

You can view the bundled application on your [localhost](http://localhost:5000)

# License

This project is covered under the [MIT](https://opensource.org/licenses/MIT) license.

# Contributing

Contributing is welcomed! Please submit a pull request.

# Questions

Feel free to [email](mailto:hello@christianbmartinez.com?subject=[GitHub]%20Text%20Editor%20App) me with any questions or view [my github profile](https://github.com/christianbmartinez)

View the app live [here](https://jatetext-editor-app-86cd2942d7fd.herokuapp.com/)
