function customRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;

    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    // container.appendChild(domElement);




   const domElement =  document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children

   for (const prop in reactElement.props) {
        if (prop === 'children') continue; 
        domElement.setAttribute(prop, reactElement.props[prop])
   }
   container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
};

const mainContainer = document.querySelector('#root');
// console.log(maincontainer);
customRender(reactElement, mainContainer); // reactElement — the first parameter. It receives the object describing the element you want to create. // the second parameter. It receives the HTML element where the new element will be inserted.


// props is a object in which you can add properties.

// A custom renderer might manually create DOM elements and insert them into a container.
// Syntax for customRender = 
// function customRender(name) {
//     document.getElementById("app").innerHTML = `<h1>Hello ${name}</h1>`;
// }

// customRender("Anurag");
// customRender is generally used to create a custom way of displaying/rendering content on a webpage.