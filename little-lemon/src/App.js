import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import TableReservation from "./components/TableReservation";

function App() {
  return (
    <>
      <Nav className="nav"/>
      <div className="wrapper">
        <div className="HeaderWrapper">
          <Routes>
            <Route path="/" element={<Header />}></Route>
            <Route path="/reservations" element={<TableReservation />} />
          </Routes>
        </div>
        <div className="Main">
          <Routes>
            <Route path="/" element={<Main />}></Route>
          </Routes>
        </div>
        <div className="FooterWrapper">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
