import React from 'react'
import './App.css';
import ShowMore from './components/ShowMore/showMore';
import Input from './components/Input/input';


const App = () => {

  return (

    <div>
      <div className="container-pokemon">
        <div className="app">
          <Input />
        </div>
      </div>
      <ShowMore />
    </div>
  );
}

export default App;
