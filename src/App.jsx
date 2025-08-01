import React, { Component } from 'react';
import "./App.css";
class App extends Component {
  render() {
    return (
     <>
       <header>
           <nav><div className='logo'>My Website</div>
           <ul>
            <li>Home </li>
            <li>About</li>
            <li>Services</li>
            <li>Contact Us</li>
           </ul>
           </nav>
       </header>
       <section>
           <h1>WELCOME TO FRONT END DEVELOPMENT FRAMEWORKS</h1>
           <p>This program immerses us into innovation</p>
       </section>
       <footer>Copyright@2025. All rights reserved.</footer>
     </>
    );
  }
}

export default App;
