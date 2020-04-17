import React from 'react';
import { Provider } from 'react-redux'
import PizzaCalculator from './Components/PizzaCalculator'
import configStore from "./store/configStore";

function App() {
  const store = configStore()

  return (
    <Provider store={store}>
      <div className="App">
        <PizzaCalculator />
      </div>
    </Provider>
  );
}

export default App;
