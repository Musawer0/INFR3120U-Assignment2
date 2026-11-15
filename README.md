# INFR3120U - Assignment 2: ExpressJS Portfolio Site

* **Student Name:** Musawer Beissed
* **Student Email:** AbdulMusawer.Beissed@ontariotechu.net 
* **GitHub Repository:** https://github.com/Musawer0/INFR3120U-Assignment2
* **LinkedIn Profile:** https://www.linkedin.com/in/musawer-beissed-a2516b320

---

## Project Overview
This is my personal portfolio built with Node.js, ExpressJS, and the EJS templating engine for INFR3120U (Web and Scripting Programming) at Ontario Tech University. The site was scaffolded using Express Generator `express-generator --view=ejs` and separates page logic, routes, static assets, and reusable EJS header/footer partials.

## Folder Structures
* `bin/www` — HTTP server startup script
* `app.js` — Main Express configuration (EJS view engine, static `public/` directory, and route mounting)
* `routes/index.js` — Express `router.get()` routes for `/`, `/about`, `/projects`, and `/contact`
* `views/` — EJS page templates (`index.ejs`, `about.ejs`, `projects.ejs`, `contact.ejs`, `error.ejs`)
* `views/partials/` — Shared layout partials (`header.ejs` and `footer.ejs`)
* `public/` — Static assets organized into `stylesheets/`, `javascripts/`, and `images/`

## External Libraries & Citations
The following external frameworks and tools are cited:
1. Express Generator: Used to scaffold the standard Node.js/Express/EJS directory structure. Source: https://expressjs.com/en/starter/generator.html
2. Bootstrap 5 (v5.3.3): Used via official jsDelivr CDN for responsive grid layout, navigation bar, buttons, cards, and form controls. Source: https://getbootstrap.com/
3. Font Awesome 6 (v6.5.1): Used via cdnjs CDN for navigation, project, and social media icons (GitHub and LinkedIn). Source: https://fontawesome.com/