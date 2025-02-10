import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Footer from './components/Footer';
import ChatBox from './components/ChatBox';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
      </main>
      <Footer />
      <ChatBox />
    </div>
  );
}

export default App;