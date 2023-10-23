import "./App.css";
import Footer from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { Images } from "./components/Images";
import { Links } from "./components/Links";

function App() {
  return (
    <Layout>
      <Navigation />
      <Images />
      <Links />
      <Footer />
    </Layout>
  );
}

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{ backgroundColor: "blue", height: 200, width: "auto", top: 0 }}
      >
        <h1
          style={{ display: "flex", justifyContent: "center", color: "white" }}
        >
          Header
        </h1>
      </div>
      {children}
      
    </>
  );
};

export default App;
