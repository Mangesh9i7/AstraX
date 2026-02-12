import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="container">
      <div className="col-3 py-5"></div>
      <div className="col-6 my-5 py-5">
        <h1 style={{ fontSize: "4rem", margin: "0" }}>404</h1>
        <h2 style={{ margin: "0.5rem 0" }}>Page Not Found</h2>
        <p>The page you’re looking for doesn’t exist or the link is broken.</p>
        <Link elem to="/">
          <button className="btn btn-primary">Go Home</button>
        </Link>
      </div>
      <div className="col-3 my-5 py-5"></div>
    </div>
  );
}
