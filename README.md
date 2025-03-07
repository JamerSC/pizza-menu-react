# A simple pizza menu app in React

# JSX, Components, & Props.

# Index.js - webpack module bundle is the entry point of index.js

# Debugging

- Double check if Npm is running
- Browser High reload
- Keep terminal open
- Inspecting
- React display error
- Read Error message
  -- copy error & google it.
  -- Stackover Flow
- ES Slint warns you for declaring wrong code.

# Components

- React made out ofcomponents
- Building Block or UI
- Components has its own data, logic, & appearance.
- build complex UI by building multiple components & combining them.
- Components can be reused, nested, inside other, and pass data between them.

component = {"Data", "Logic", "Appearance"};

# Remove Colored lines in the gutter

Settings > Diff Decorations > Set to None

# What is JSX?

- JSX - declarative syntax to describe what components look like and how they work.
- Components must return a block of JSX
- JSX extension of JS allows to embed JS, CSS, & React ccomponents into HTML
- Eash JSX element is converted to React.createElement function call
- We could use React w/out JSX

# JS is an imperative approach - How to do things

- Manual DOM element selections and DOM traversing.
- Step by stem dom mutations until me reach desired UI

# JSX is declarative approach - What we want

- Describe what UI should look like using JSX, based on current data
- React is an abstraction away from DOM: we never touch the DOM
- instead, we think of the UI as a reflection of current data.

# Created More Components

- Nested Components

# Separation Concerns

- Before one technology per file
- Traditional separate of concerns
- One technology per file Ex. Html, CSS, & JS File
- One component per file React ex. Question, Menu, Filters, & Player (New paradigm)

- Component with Data, Logic, & Apperance
- Rise of interactive SPAs -> JS is in charge of HTML -> Logic & UI are coupled -> why keep them separated? -> Reach components + JSX

# Styling React Applications

- React is more of a library than a framework
- We can choose different options to style our components or applications.
- Ex. Inline, External, SASS, CSS module, Tailwind CSS using to style components

# Writing inline javascript

- By default inline styling: <h1 style="color=red;"><h1>
- In React need to use a JavasScript Mode
- Ex. <h1 style={{ color: "red" }}>Fast React Pizza Co.</h1>;
- In React CSS property is converted into JSX
- const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
- In css we use <h1 class="container">Header 1</h1>
- In react it uses the converted css to JSX
- <h1 className="container">Header 1</h1>
- Applying external css file & importing to index.js
- import "./index.css"; // importing css file

# Passing & Receiving props

- 2 steps to define props
- 1st pass the props into the component
- 2nd we receive the props pass into component

# Props?

- used to pass data from parent component to child components (down the component tree).
- essential tool to configure and customize components (line function parameters).
- with props, parent components control how child components look & work.
- Props are like arguments can pass single values, functions, array objects.
- PROPS ARE READ-ONLY

# Data - Props & State

- State are internal component data that can be updated by component logic
- Props is a data coming from the outside, and can only be updated by the parent component.
- Props are read-only they are immutable. React strict rule
- If you need to mutate props, you actually need state.

# JSX

- JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

# Rendering List using MAP Method

- {pizzaData.map((pizza) => (
-       <Pizza pizzaObj={pizza} key={pizza.name} />
- ))}
