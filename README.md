# React Boilerplate

This is my boilerplate to start a new project in React.
- `npm install` to install all the dependencies
- `npm start` to launch the application
- `npm build` to build the application for production use

## Modules and Dependencies

This starter use several packages to add extra features :
- [React](https://reactjs.org/) default dependencies.
- [Flux](https://facebook.github.io/flux/) to manage data flow inside our application.
- [create-react-app-stylus](https://github.com/rickharrison/create-react-app-stylus) to compile all .styl files into single .css file
- [React Helmet](https://github.com/nfl/react-helmet) to add dynamic meta tags for SEO purpose
- [uuid](https://www.npmjs.com/package/uuid) to create single unique ID for list items (usefull when you need to force rendering in specific use cases)

## Structure

Inside the [/src](./src/views) folder, you can find the main files to start the application
- The [index.js](./src/index.js) file init the application
- The [History.js](./src/History.js) file create a browser history during navigation. You can create redirections or manage urls by importing this file inside other ones and use [build-in methods](https://www.npmjs.com/package/history)
- This [App.js](./src/App.js) file is the root of your application. Usually, I put my router inside this file and create all the different pages for my application.

In addition, I like to add 5 extra folders into my React project :
- [/views](./src/views) with a specific folder for each URL inside router
- [/components](./src/components) with all the components used inside the project
- [/actions](./src/actions), [/constants](./src/constants) and [/stores](./src/stores) to manage all my data interactions (using Flux architecture)

## Manage CSS in a React project

Writing CSS for JS application a very controversial subject inside the Front-end community. There is lot's of possibility and tools to write CSS inside a JS project. The one you choose depend of your project but mainly is a preference choice.

For my boilerplate, I decided to use [Stylus](http://stylus-lang.com/) to manage all the CSS (I used it during my previous jobs, with large scale corporate website). I added a specific package [create-react-app-stylus](https://github.com/rickharrison/create-react-app-stylus) to compile all the `.styl` files into a single CSS file. This CSS file is include inside the [App.js](./src/App.js).

My main `.styl` files are localised inside the [/css](./src/css) folder. Basically, I use them to create global variables, media-queries, functions and other stuff for the whole project. Aside that, I have a single `.styl` file for each new component created, located inside the component folder.

## Components : the basics

A React Application is basically a stack of several components. When you want to create a component, go to the [/components](./src/components) folder and create a new component folder. Inside this folder, create a `MyComponent.js` file. Every component should has this following piece of code to be a functional React component

```javascript
// Import modules.
import React, { Component } from 'react';

// Init component.
class MyComponent extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<div>My Component</div>
		);
	}
}

export default MyComponent;
```

The constructor function is here to init the component with the React properties. The render function is the DOM output of your component. Inside your component, you can add any custom function you need and also use all the React Component built-in methods (see [doc](https://reactjs.org/docs/react-component.html)). Basically, each component inside a React application has some lifecycle methods you can use to create your application logic (`componentWillMount`, `componentDidUpdate`, etc...). Also, don't forget to create a `.styl` file for each component in its folder : it will help you in the future when your project will grow.

## Router and routes

When you're building a website, you need to add different views and match it with specific URL path. I use [react-router-dom](https://reacttraining.com/react-router/web/guides/philosophy) for my router. It's very easy to render a specific view based on URL
1. Open the [App.js](./src/App.js) and find the `<Switch>` tag
2. Inside `<Switch>` tag, add a new line like `<Route path="/mypath" component={myView} />` where `myView` is a separate view file (basically a React Component file only used for view purpose)
3. Go to your url [http://localhost:3000/mypath](http://localhost:3000/mypath) and you will see your view

### Specific route params

There is 2 main features for the routes :
1. Inside the path attribute, you can add a dynamic param inside URL (for example, a slug or an id) like `<Route path="/articles/:id" component={myView} />`. Thanks to that, you can render the same view for all articles but you can have access to the param inside the view (for example, to fetch the corresponding article).
2. You can add an `exact` attribute to your route. If you do this, you URL needs to be exactly equal to the path attribute to render the view. If not, if you go to [http://localhost:3000/mypath/blablabla](http://localhost:3000/mypath/blablabla), you would also render the same view even if there is an extra piece inside url.

## Create a simple Cover component

Let's say we want to create a cover with an image, a title and a description. Let's create a [Cover.js](./src/components/Cover/Cover.js) file and add our markup inside the render function. In your component, you will have access to **props**. [Props](https://reactjs.org/docs/components-and-props.html) are basically data that you can pass to a component to render dynamic content. This data are send by the parent component (in our case, the one that include our cover).

```javascript
// Import modules.
import React, { Component } from 'react';

// Init component.
class Cover extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<div className="cover">
				<img className="cover__img" src={`http://placehold.it/${this.props.imageSize}`} alt=""/>
				<div className="cover__container">
					<h1 className="cover__title">{this.props.title}</h1>
					<p className="cover__description">{this.props.description}</p>
				</div>
			</div>
		);
	}
}

export default Cover;
```

Now that our Cover component is ready, let's include it in our [HomeView.js](./src/components/HomeView/HomeView.js). We create our view, import our component and add it to the render function. Inside the render, we pass all the props needed (title, description, imageSize) with the data.

```javascript
// Import modules.
import React, { Component } from 'react';

// Import components.
import Cover from '../../components/Cover/Cover';

// Init view.
class HomeView extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<main className="main">
				<div className="grid">

					{/* Cover */}
					<Cover title="Homepage" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." imageSize="1280x800"/>

				</div>
			</main>
		);
	}
}

export default HomeView;
```

## Create an interactive FAQ component

For the moment, we created a simple component with props. But what if we want to add some interactions? We're going to create a new FAQ component with several panels where you can click on the question to see the answer. Let's start by creating an [FAQ](./src/components/FAQ) folder inside our [/components](./src/components) folder. Inside this folder, I'm going to create 3 different files :
- [FAQ.js](./src/components/FAQ/FAQ.js) to put my FAQ javascript logic
- [FAQ.styl](./src/components/FAQ/FAQ.styl) to add my styles
- [/Single](./src/components/FAQ/Single) folder where I'm going to add a new JS file called [FAQSingle.js](./src/components/FAQ/Single/FAQSingle.js)

First of all, let's build our [FAQSingle.js](./src/components/FAQ/Single/FAQSingle.js) file. Same for our previous component, we add a constructor and render function. Inside the constructor function, we are going to initialize our [State](https://reactjs.org/docs/state-and-lifecycle.html). State is a core feature in React. State are data that belong to a specific component. You can update this data with special React methods. Each time you update your state, the render function will be executed, which mean you're going to see your changes in real time. For our FAQSingle, we're going to create a boolean `isOpen` to toggle answer display (*nb* : state is always an object, but you can store any type of variable you want inside it).

As you can see below, we added an `onClick` listener on the question button which trigger the `toggleQuestion` function (don't forget to rebind your function inside the constructor to keep the global class context). Inside the `toggleQuestion`, we update the `isOpen` variable stored inside state. We also added an `is-open` class on our item to show/hide the answer (see [FAQ.styl](./src/components/FAQ/FAQ.styl) file for CSS properties). As our render function is trigger each time our state is updated, we already have an interactive component which work in real time.

```javascript
// Import modules.
import React, { Component } from 'react';

// Init component.
class FAQSingle extends Component {

	constructor(props) {
		super();

		// Init state.
		this.state = {
			isOpen: false
		};

		// Rebind ES6.
		this.toggleQuestion = this.toggleQuestion.bind(this);
	}

	toggleQuestion() {
		// Update state.
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}));
	}

	render() {
		return (
			<li className={`faq__item ${this.state.isOpen ? 'is-open' : ''}`}>
				<button className="faq__btn" onClick={this.toggleQuestion}>{this.props.item.question}</button>
				<p className="faq__text">{this.props.item.answer}</p>
			</li>
		);
	}
}

export default FAQSingle;
```

We now have our [FAQSingle.js](./src/components/FAQ/Single/FAQSingle.js) component ready, it's time to create the questions list. Let's go inside our [FAQ.js](./src/components/FAQ/FAQ.js) file. Inside our state, we add fake data to create the questions/answers. Usually, you will fetch this data with an external API. We create an `items` array. Each item of this array is an object with 2 keys : question and answer. Inside the render function, we create an `Items` variable to build all the single FAQ. The `buildItems` function loop through all items and return a single `<FAQSingle/>` component. We pass 2 props : a [key](https://reactjs.org/docs/lists-and-keys.html) variable (basically a single ID used by React to keep track of DOM changes and only update necessary piece of HTML) and an `item` variable with data.

```javascript
// Import modules.
import React, { Component } from 'react';

// Import components.
import FAQSingle from './Single/FAQSingle';

// Init component.
class FAQ extends Component {

	constructor(props) {
		super();

		// Init states.
		this.state = {
			items: [
				{
					question: 'Lorem ipsum dolor sit amet?',
					answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend tortor quis mattis pulvinar. Vestibulum vulputate libero elit, at pretium ipsum tempus id.'
				},
				{
					question: 'Class aptent taciti sociosqu?',
					answer: ' Praesent bibendum vulputate auctor. Nulla ornare metus eget erat sagittis hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
				},
				{
					question: 'Molestie ut pulvinar et?',
					answer: 'Morbi sagittis enim et lacus bibendum dignissim. Nullam neque magna, molestie ut pulvinar et, ultricies vitae risus.'
				},
				{
					question: 'Gravida at ipsum?',
					answer: 'Fusce et blandit arcu, vitae accumsan lectus. Aliquam sem ante, viverra et euismod elementum, gravida at ipsum.'
				}
			]
		};
	}

	buildItems() {
		return this.state.items.map((item, key) => {
			return <FAQSingle key={key} item={item} />
		});
	}

	render() {
		// Build items.
		const Items = this.buildItems();

		// Return component.
		return (
			<section className="faq">
				<ul className="faq__list">
					{Items}
				</ul>
			</section>
		);
	}
}

export default FAQ;
```

## Data : Fetch and retrieve from API

One of the most complex thing to manage in a React application are data, especially when it comes to fetch this data with an external API. You will have to face to different challenges : loading time, empty state, missing keys, etc... Fortunately, there are some package out there to help us. Personaly, I used [Flux](https://facebook.github.io/flux/) to manage my data. According to the documentation :

> Flux is the application architecture that Facebook uses for building client-side web applications. It complements React's composable view components by utilizing a unidirectional data flow. It's more of a pattern rather than a formal framework, and you can start using Flux immediately without a lot of new code.

![Flux architecture](https://facebook.github.io/flux/img/flux-simple-f8-diagram-with-client-action-1300w.png)

It's basically organise in 3 different steps : action, dispatcher and store :
1. When you're inside a view, you will call an action to get specific content (eg : `PageActions.getPage()` to fetch page content). The action will create a method with params you pass and provide it to the dispatcher.
2. The dispatcher will send this to the store
3. The store will launch the request to the API with the params and once it's done, will emit a custom event with the API response. To get back this data, you usually add `eventListener` inside your view to update your state.

## Getting an article from API and show it inside our view

Before fetching any data, we need to update our fetch API URL. I added a [.env](./.env) file where you can defined global variables to use through your application. You can add multiple .env files for any environement you have (staging, prepropd, prod, etc..). Be carefull : if you want to have access to this variable, you will need to add the **REACT_APP** prefix. If you don't do that, React won't see it. Also, if you update the variables inside your .env file, you have to re-start the npm server to see your changes. For this example, I will name my API variable **REACT_APP_API_URL** and use the [jsonplaceholder](https://jsonplaceholder.typicode.com) API.

If you go to [Store.js](./src/mixins/Store.js) mixin file, you can see how to access to variables saved inside your .env file :

```javascript
constructor() {
	super();
	this._api = `${process.env.REACT_APP_API_URL}`;
	this.setMaxListeners(1000);
}
```

If you build a classic website, it's usually a good practice to create a **view** for each URL. Inside this **view**, you will fetch the API to get the page content (it could be a list, a full page or anything you want to show). So let's create an [ArticleView.js](./src/views/Article/ArticleView.js) file to try this. I added a specific `<Route>` inside [App.js](./src/Apps.js) to match the url [http://localhost:3000/article](http://localhost:3000/article). Here is our file :

```javascript
// Import modules.
import React, { Component } from 'react';

// Import actions.
import ArticleActions from '../../actions/Article';

// Import stores.
import ArticleStore from '../../stores/Article';

// Import components.
import Article from '../../components/Article/Article';

// Init view.
class ArticleView extends Component {

	constructor(props) {
		super();

		// Init state.
		this.state = {
			article: null
		};

		// Rebind ES6.
		this.getArticleHandler = this.getArticleHandler.bind(this);
	}

	componentDidMount() {
		// Get page.
		ArticleActions.getArticle({
			id: 1
		});
		
		// Add listeners.
		ArticleStore.addListener('article:getArticle', this.getArticleHandler);
	}

	componentWillUnmount() {
		// Remove listeners.
		ArticleStore.removeListener('article:getArticle', this.getArticleHandler);
	}

	getArticleHandler(res) {
		// Update state.
		this.setState({
			article: res
		});
	}

	render() {
		return (
			<main className="main">
				<div className="grid">

					{/* Content */}
					{this.state.article ?
						<Article article={this.state.article}/>
					:
						'Loading...'
					}

				</div>
			</main>
		);
	}
}

export default ArticleView;
```

So what's going on here?! :
1. When the component mount, we want to launch the request, in other word to launch the `ArticleActions.getArticle()` action. As you can notice, we can pass params to our actions (in our case, a static article id).
2. This action will be dispatch and send to the store. The store will fetch the API with the params and emit an event with the response.
3. Our view has a listener to execute the `getArticleHandler` function when store emits its event (don't forget to remove your events on the `componentWillUnmount` function).
4. Inside the `getArticleHandler` we update our state (don't forget that you **MUST NOT** update your state like a classic variable, but use the `setState` method).

As you can see inside the render method, based on the `this.state.article` value, we show different element : if we don't have any article yet, we show a loading state. Once it's done, we show the `<Article/>` component and pass the data as a prop.

## SEO in React

One of the tricky point in React when you're building a website is to have an efficient SEO. For the moment, our application doesn't have any `<meta>` tags or any pre-rendering features. If you put our website like this inside an SEO tool, you will have a terrible final score.

First of all, we need to add custom `<meta>` (title, description, og, etc..) for each our view. There is a very usefull package called [React Helmet](https://github.com/nfl/react-helmet) which manage all the changes inside the document head. As we added a specific view for each URL, it's now very easy to add a custom React Helmet block inside each view.

```javascript
<Helmet>
	<title>My view</title>
	<meta name="description" content="This is the homepage of my project." />
	<link rel="canonical" href="http://mysite.com/example" />
</Helmet>
```

Now that we have custom meta tags for each page, we need to deal with an other problem. If you go to your website with Javascript disable, you won't see any content. And that's perfectly normal, because all our website use Javascript to fetch data and display content on all pages. Some people say that Google start to execute Javascript when it crawls website but it doesn't seem to be the case each time. And all the SEO tools can't fetch any information even if you use React Helmet.

To solve this problem, we have 2 solutions :
- Using [React Snap](https://www.npmjs.com/package/react-snap) : this package is going to crawl your website locally each time you launch the deploy command. As a result, you will have a folder with generated .html files pages. You can now redirect Google Crawlers based on user agent to this particular folder.
- [Prerender.io](https://prerender.io/) : this service is really popular inside the JS community. It does same thing than React Snap but with more flexible features. You can, for example, add webhooks to renew your cached pages based on the content changes on the website.