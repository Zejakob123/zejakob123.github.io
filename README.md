# zejakob123.github.io
## Leong's Personal Portfolio

Portfolio Web App is built on branch React-js and deployed on branch gh-pages.

## Easy Guidance:
- Create React App: 
npx create-react-app <app_name>
cd my-app
npm start
- Set up gh-pages: npm install --save gh-pages
- Add following script to package.json: add "predeploy": "npm run build" and "deploy": "gh-pages -d build" into script.
    Exp: 
        "scripts": {
            "predeploy": "npm run build",
            "deploy": "gh-pages -d build",
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject"
        }
- Visit https://github.com/<Username>/<Username>.github.io/settings/pages
    - set the branch gh-pages with root directory to being built for github page
- Deploy: npm run deploy

### Set up React
Guidance: https://blog.logrocket.com/deploying-react-apps-github-pages/
Get Started: https://create-react-app.dev/docs/getting-started
Deployment: https://create-react-app.dev/docs/deployment/

### React Bootstrap
Set up with Bootstrap: https://create-react-app.dev/docs/adding-bootstrap/

### Font Awesome Icon
Set up with React: https://fontawesome.com/v6/docs/web/use-with/react/
Brand icon: https://www.npmjs.com/package/@fortawesome/free-brands-svg-icons

### File Structure
React file structure guidance: https://www.xenonstack.com/insights/reactjs-project-structure
