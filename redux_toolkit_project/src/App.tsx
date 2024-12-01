import { Provider } from "react-redux";
import "./App.css";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div>hi</div>
    </Provider>
  );
}

export default App;
