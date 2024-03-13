import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { Footer } from "./footer/Footer";
import "./App.scss";

export const App = () => {
  return (
    <div className="app">
      <header className="navbar">
        <Header />
      </header>
      <main className="trees">
        <Main />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
