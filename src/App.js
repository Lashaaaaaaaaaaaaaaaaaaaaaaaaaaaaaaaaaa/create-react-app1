// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//            Flacko <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import myImage from './photos/385881207_652446280038213_5774922146432893413_n.jpg'

function App() {
  return (
    <div className="App">
      <header class="header">
        <a href="#" class="logo">Flacko</a>
        <i class='bx bx-menu' id="menu-icon"></i>
        <nav class="navbar">
            <a href="#" id="#home" class="active">Home</a>
            <a href="#" id="#about">About</a>
            <a href="#" id="#services">Services</a>
            <a href="#" id="#portfolio">Portfolio</a>
            <a href="#" id="#contact">Contact</a>
        </nav>
    </header>

    <section class="home" id="home">
        <div class="home-content">
            <h3>Hello, I'm</h3>
            <h1>Pretty Flacko</h1>
            <h3>And I'm a <span>FrontEnd Developer</span></h3>
            <p> I be that pretty motherfuckerr 
                </p>
            <div class="social-media">
                <a href="https://www.facebook.com/Mexobazariaraaa"><i class='bx bxl-facebook'></i></a>
                <a href="https://www.youtube.com/watch?v=7lCcnxePKGk"><i class='bx bxl-youtube'></i></a>
                <a href="https://www.tiktok.com/@prettyyflackkoo"><i class="bx bxl-tiktok"></i></a>
                <a href="https://github.com/Lashaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"><i class="bx bxl-github"></i></a>
                <link href='https://cdn.jsdelivr.net/npm/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            </div>
            <a href="https://www.instagram.com/pretyyflackoo/" class="btn">Follow Me</a>
        </div>
        <div class="home-img">
          <img src={myImage} alt="Pretty Flacko" style={{ width: '439px', height: 'auto' }} />
        </div>
    </section>


    <footer class="footer">
        <div class="footer-text">
            <p>Copyright &copy; 2024 by sL Code <span>Hub</span> | All Rights Reserved</p>
        </div>
    </footer>
    </div>
  );
}

export default App;
