# React Boilerplate

This is my boilerplate to start a new project in React.

## Structure

Inside the [/src](./src/views) folder, you can find all the sources files of the application.

The [/index.js](./index.js) file init the application by append the code inside the target element.

The [/History.js](./History.js) file create a browser history during navigation. You can create redirections or manage urls by importing this file inside other ones and use build-in methods (see [doc](https://www.npmjs.com/package/history))

This [/App.js](./App.js) file is the root of your application. Usually, I put my router inside this file and create all the different pages for my application.

I like to split my project into 3 different themes :
- [/views](./src/views) with a specific file for each URL inside router
- [/components](./src/components) with all the component used inside the project
- [/actions](./src/actions), [/constants](./src/constants) and [/stores](./src/stores) to manage all my data interactions (with an external API)