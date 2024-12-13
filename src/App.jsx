import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import MainComponent from './components/MainComponent';


function App() {
  //parte html da ritornare
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <MainComponent />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App
