This project was bootstrapped with custom create react app(https://dev.to/nikhilkumaran/don-t-use-create-react-app-how-you-can-set-up-your-own-reactjs-boilerplate-43l0).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run docs`

Generates the docs folder, which contains html files and can be opened to view the detailed documentation.
Consists all the functions, their descriptions and parameters along with type, description.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Running SonarQube for code metrics.

Download and install SonarQube, and enter the command \$./sonar.sh console in /Sonar/sonarqube-8.0/bin/linux-x86-64

And enter the command \$ ~/Sonar/sonar-scanner-cli-4.2.0.1873-linux/sonar-scanner-4.2.0.1873-linux/bin/sonar-scanner -X

Create sonar-project.properties and add the following patterns for coverage inclusions and exclusion paths :
sonar.exclusions=**/node_modules/**,**/coverage/**,src/apiCalls.js,src/components/**mocks**/_,src/index.js,src/serviceWorker.js,src/testUtils/_,src/components/reducers/**mocks**/_
sonar.test.inclusions = \*\*/_.test.js,\*_/_.test.jsx
sonar.javascript.lcov.reportPaths=coverage/lcov.info

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify