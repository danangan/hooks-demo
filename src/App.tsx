import { ClassComponent } from "./ClassComponent";
import { FunctionComponent } from "./FunctionComponent";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <h2>Get to know React Hooks and its awesomeness</h2>
      <ClassComponent />
      <FunctionComponent />
    </div>
  );
}
