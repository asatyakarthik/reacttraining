const heading = React.createElement("h1",{id:"heading", xyz:"abc"},"Hello World from React!"); //Job of React Core 
const root = ReactDOM.createRoot(document.getElementById("root"));//creating a root & rendering something inside it - its job of React-dom
root.render(heading);