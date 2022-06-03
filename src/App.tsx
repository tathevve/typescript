import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Customer from './components/Customer';
import Employee from './components/Employee';
import Greetings from './components/Greetings';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <React.Fragment>
      <h2 className='text-warning'>App Component</h2>
      <i className='fa fa-home fa-2x'/>

      <div>
        <Counter />
      </div>

      <div>
        <Greetings/>
      </div>
      <div>
        <LoginForm/>
      </div>
    </React.Fragment>
  );
}

export default App;
