import useRouterElement from "./routes/useRouterElement";

function App() {
  const routerElement = useRouterElement({});
  return <div>{routerElement}</div>;
}

export default App;
