import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainComponent from './components/MainComponent';
import TagList from './components/TagList';


function App() {
  //parte html da ritornare
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <MainComponent />
          <TagList />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App
