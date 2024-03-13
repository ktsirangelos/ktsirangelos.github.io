import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { Footer } from "./footer/Footer";
import "./App.scss";

export const App = () => {
  return (
    <div className="app">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Main />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
