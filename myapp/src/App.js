import React from 'react';
import Header from './components/Header'
import MainBody from './components/MainBody'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <MainBody variable="test"/>
      <Footer />
    </div>
  );
}

export default App;
