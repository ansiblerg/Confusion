import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Main from './components/mainComponent/mainComponent'
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';

const store = ConfigureStore();

class App extends React.Component {
  
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
      
    );
  }
}

export default App;
