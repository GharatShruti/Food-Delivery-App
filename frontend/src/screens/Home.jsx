import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>

        <div>
          <div className="card mt-3" style={{ width: "18rem", "maxHeight":"360PX"}}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is some important text.
              </p>
              <div className="container"> </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
