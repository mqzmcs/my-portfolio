import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>This page doesn't seem to exist</p>
      <h4>include routing to <Link to='/'>home</Link></h4>
    </div>
  );
}

export default NotFoundPage;
