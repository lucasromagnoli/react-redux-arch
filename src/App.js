import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

// Components
import TodoList from './TodoList';

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
