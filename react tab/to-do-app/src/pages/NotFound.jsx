import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function NotFound() {
  return (
    <>
      <Navbar />

      <main className="simple-page not-found">
        <h1>404</h1>
        <h2>Page Not Found</h2>

        <p>The page you're looking for doesn't exist.</p>

        <Link to="/" className="back-home">
          Back to Home
        </Link>
      </main>
    </>
  );
}

export default NotFound;