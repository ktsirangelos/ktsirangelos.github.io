import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { Footer } from "./footer/Footer";
import "./scss/main.scss";

export const App = () => {
  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
