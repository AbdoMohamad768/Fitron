import { useNavigate } from "react-router";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="m-auto text-center h-screen">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <button onClick={() => navigate(-1)}>Go back to the homepage</button>
    </div>
  );
}

export default PageNotFound;
