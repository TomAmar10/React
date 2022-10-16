import { BrowserRouter } from "react-router-dom";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Main from "../Layout/Main/Main";
import Menu from "../Layout/Menu/Menu";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
  return (
    <div className="MainLayout">
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main>
          <Main />
        </main>
        <menu>
          <Menu />
        </menu>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default MainLayout;
