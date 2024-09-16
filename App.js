import React from "react"
import ReactDOM from "react-dom/client"

//React.createElement => ReactElement-Object =>HTMLElement(render)

// const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},
//     React.createElement("h1",{id:"heading"},"Hello World from React 🎉")))

const heading = React.createElement('h1',{id:"heading"}, "Namaste React")

// JSX - BABEL is converting to -> React.createElement => ReactElement-Object =>HTMLElement(render)
const jsxHeading = (<h1 id="heading" 
className="head" 
tabIndex={1}>
    Namaste React using JSX
    </h1>);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(jsxHeading)