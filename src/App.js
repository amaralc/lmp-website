import React from 'react';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>      
      {this.props.children}
    </div>
  );
}

export default App;
