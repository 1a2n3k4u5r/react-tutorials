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