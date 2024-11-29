import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import "./App.css";

function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Main />
      </section>

      <Footer />
    </>
  );
}

export default App;
