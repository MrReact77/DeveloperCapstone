import './App.css';
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
  <>
    <Nav/>
      <div className="wrapper">
      <div className="HeaderWrapper">
          <Header />
      </div>
        <Main />
      <div className="FooterWrapper">
          <Footer />
      </div>
    </div>
  </>
  );
}


export default App;
