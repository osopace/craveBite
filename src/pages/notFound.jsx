import { Link } from "react-router-dom";
import Navbar from "../components/unsignedNav";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-gray-500">Oops! That page doesn't exist.</p>
        <Link to="/" className="text-orange-500 underline">
          Go back home
        </Link>
      </div>
    </div>
  );
}
