import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Content from "./components/Content";
import "./styles.css";
const App = () => {
  return (
    <div className="shop">
      <Header />

      <div className="body">
        <Menu />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default App;
