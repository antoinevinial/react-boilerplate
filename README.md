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

## Manage CSS in a React project

When you're building a React application, you will need to write CSS. CSS is a very controversial subject inside the Front-end community, especially when it comes to JS applications.

There is lot's of possibility and tools to write CSS inside Javascript applications. The one you choose depend of your project but mainly is a preference choice.

For my boilerplate, I decided to use [Stylus](http://stylus-lang.com/) to manage all the CSS (I used it during my previous jobs, with large scale corporate website). I added a specific package [create-react-app-stylus](https://github.com/rickharrison/create-react-app-stylus) to compile all the **.styl** files into a single CSS file. This CSS file is include inside the [App.js](./src/App.js).

My main **.styl** files are localised inside the [/css](./src/css) folder. Basically, I have some files to create global variables, media-queries, functions and other stuff for the whole project. Aside that, I have a **.styl** file for each new component created, located inside the component folder.

## How to create a route

During your developpement, you will need to create urls with specific template to render. I use [react-router-dom](https://reacttraining.com/react-router/web/guides/philosophy) for my router. It's very easy to render a specific view based on URL
1. Open the [App.js](./src/App.js) and find the `<Switch>` tag
2. Inside `<Switch>` tag, add a new line like `<Route path="/mypath" component={myView} />` where **myView** is a separate view file (basically a JSX file only used for view purpose)
3. Go to your url [http://localhost:3000/mypath](http://localhost:3000/mypath) and you will see your view

### Specific route params

There is 2 main features for the routes :
1. You can add an `exact` attribute to your route. If you do this, you URL needs to be exactly equal to the path attribute to render the view. If not, if you go to [http://localhost:3000/mypath/blablabla](http://localhost:3000/mypath/blablabla), you would also render the same view even if there is an extra piece inside url.
2. Inside the path attribute, you can add a dynamic param inside URL (for example, a slug or an id) like `<Route path="/articles/:id" component={myView} />`. Thanks to that, you can render the same view for all articles but you can have access to the param inside the view (for example, to fetch the corresponding article).

## How to create a simple component
