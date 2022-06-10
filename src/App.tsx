import React from 'react';
import './App.css';
import RobotForm from './Components/RobotForm';
import RobotSection from './Components/RobotSection';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <RobotSection />
      <RobotForm />
    </div>
  );
}

export default App;
