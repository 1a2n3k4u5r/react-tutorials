import React from 'react';
import ReactDOM from 'react-dom/client';
// import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'

function MyApp (){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    );
}

// const ReactElement = {
//     type: 'a',
//     props: {
//        href :  'https://google.com',
//         target :'_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href= "https://google.com" target='_blank'>Visit google</a>
)

 const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target: '_blank'},
    'click me to visit google',
    anotherElement
)


ReactDOM.createRoot(document.getElementById('root')).render(

    // <App/>
   reactElement
    // <MyApp/>
);

// . har ek react bundler use karta hai, jo work hota hai bundler ka behind the seen work karna ki syntax ko correct karna , syntax ko upgrade karna,  react ko html wala syntax nhi samaj ma ata hai tabhi hum usa jsx bolata hai

// Work of Bundler
// Reads all files.
// Combines files together.
// Converts JSX into JavaScript.
// Optimizes code.
// Sends final code to browser.

// Without a bundler, browsers cannot understand:

//  React has many method one method is that "createElement" ka andar ap apna koi bhi value/object  pass kar sakta hai

// what is the createRoot method and it usage
// the createRoot behind the sceen use to create a DOM like structure as like browser DOM because it compare a main DOM and its own create DOm and then update those things which is actually update in the  UI but browser remove all the DOM and then again repaint(web structure dobara se thar ho rha hai) all the DOM isko page reload bolta hai

// In Virtual DOM you can track/trace all the DOM in tree like structure and then those value that are change are pick from DOM and then again insert this is called virtual DOM.

//fibre is used to update the Virtual DOM