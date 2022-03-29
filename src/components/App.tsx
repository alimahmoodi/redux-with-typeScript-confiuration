import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./repositoriesList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>search</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
