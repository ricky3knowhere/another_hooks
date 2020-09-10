import React from 'react';
import PostList from './components/PostLIst'
import DeleteButton from './components/DeleteButton'
import AddButton from './components/AddButton'
import { Provider } from 'react-redux'
import store from './store'
import NewInput from './components/NewInput'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PostList />
        <AddButton />
        <DeleteButton />
        <NewInput />
      </Provider>
    </div>
  );
}

export default App;
