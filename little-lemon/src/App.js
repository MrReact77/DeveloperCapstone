import './App.css';

import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="wrapper">
      <Nav/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}


export default App;
