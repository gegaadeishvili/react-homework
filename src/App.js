import "./App.css";
import { Footer } from "./components/footer";
import { Navigation } from "./components/navigation";
import { Images } from "./components/images";
import { Links } from "./components/links";
function App() {
  return (
    <Layout>
      <Navigation />
      <Images />
      <Links />
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
      <Footer />
    </>
  );
};

export default App;
