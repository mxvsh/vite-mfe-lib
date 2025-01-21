// @ts-expect-error - valid
import RemoteApp from "remote/App";

console.log(RemoteApp);

function App() {
  return <RemoteApp />;
}

export default App;
