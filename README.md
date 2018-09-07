# React Boilerplate

This is my boilerplate to start a new project in React.

## Structure

Inside the [/src](./src/views) folder, you can find all the sources files of the application.

The [index.js](./src/index.js) file init the application by append the code inside the target element.

The [History.js](./src/History.js) file create a browser history during navigation. You can create redirections or manage urls by importing this file inside other ones and use build-in methods (see [doc](https://www.npmjs.com/package/history))

This [App.js](./src/App.js) file is the root of your application. Usually, I put my router inside this file and create all the different pages for my application.

I like to split my project into 3 different themes :
- [/views](./src/views) with a specific folder for each URL inside router
- [/components](./src/components) with all the components used inside the project
- [/actions](./src/actions), [/constants](./src/constants) and [/stores](./src/stores) to manage all my data interactions (with an external API)

## How to create a route

During your developpement, you will need to create urls with specific template to render. I use [react-router-dom](https://reacttraining.com/react-router/web/guides/philosophy) for my router. It's very easy to render a specific view based on URL
1. Open the [App.js](./src/App.js) and find the `<Switch>` tag
2. Inside `<Switch>` tag, add a new line like `<Route path="/mypath" component={myView} />` where **myView** is a separate view file (basically a JSX file only used for view purpose)
3. Go to your url (http://localhost:3000/mypath) and you will see your view