import React from "react"
import ReactDOM from "react-dom/client"

//  React.createElement => ReactElement-Object =>HTMLElement(render)

// const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},
//     React.createElement("h1",{id:"heading"},"Hello World from React 🎉")))

const heading = React.createElement('h1',{id:"heading"}, "Namaste React")

// JSX - BABEL is converting to -> React.createElement => ReactElement-Object =>HTMLElement(render)
const jsxHeading = (<h1 id="heading" 
className="head" 
tabIndex={1}>
    Namaste React using JSX
    </h1>);


// React Functional Component
const HeadingComponent = () => {
    return <h1 className="heading">Namaste React Functional Component</h1>
}
// for single line
const HeadingComponent2 = () => <h1 className="heading">Namaste React Another Functional Component</h1>

// const HeadingComponent2 = function (){
//     return (
//         <h1 className="heading">Namaste React Another Functional Component</h1>
//     )
// } 


const number = 10000;  // JavaScript code
const elem = <span> React Element </span>  // React Element

// for multiple line 
// Component Composition  --> Component inside component
const HeadingComponent3 = () => (
    <div id="container">
        {number}
        {elem}
        <HeadingComponent2></HeadingComponent2>
        <HeadingComponent2 />   
        {HeadingComponent2()}  
        <h1 className="heading">Namaste React Functional Component</h1>

    </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(jsxHeading)

root.render(<HeadingComponent3 />)




