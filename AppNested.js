/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *      </div>
 * </div>
 * 
 */

const parent = React.createElement("div", { id: "parent" },React.createElement("div", { id: "child" },React.createElement("h1",{},"I'm H1 tag")));
const root = ReactDOM.createRoot(document.getElementById("root"));//creating a root & rendering something inside it - its job of React-dom
console.log(parent);
root.render(parent);