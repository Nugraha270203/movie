import Navbar from "./component/Navbar";
import Carausel from "./component/Carausel";
import Video from "./component/Video";
import Footer from "./component/Footer";
import foto1 from "../src/assets/1.jpg";
function App() {
  return (
    <>
      <div className="bg-dark">
        <Navbar />
        <section id="home">
          <br></br>
          <br></br>
          <div class="mt-4 card text-bg-dark" style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}>
            <Carausel />
          </div>
          <br></br>
          <hr></hr>
        </section>
        <section id="content">
          <Video />
        </section>
        <section id="Footer">
        <Footer />
        </section>
      </div>

    </>
  );
}

export default App;
