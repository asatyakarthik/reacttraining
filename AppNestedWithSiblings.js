/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm H1 tag</h1>
 *          <h2>I'm H2 tag</h2>
 *      </div>
 * </div>
 * 
 */

const parent = React.createElement("div", { id: "parent" },
                    [React.createElement("div", { id: "child1" },
                    [React.createElement("h1",{},"I'm H1 tag"),React.createElement("h2",{},"I'm H2 tag")]
                    ),
                    React.createElement("div", { id: "child2" },
                    [React.createElement("h1",{},"I'm H1 tag"),React.createElement("h2",{},"I'm H2 tag")])]
                );
const root = ReactDOM.createRoot(document.getElementById("root"));//creating a root & rendering something inside it - its job of React-dom
console.log(parent);
root.render(parent);