
import { Link } from "react-router-dom";
export default function Navbar() {
 
  return (
    <div className="flex justify-around bg-cyan-800 text-cyan-100 text-lg font-semibold p-3">
      <Link to="/">Home</Link>

      <Link to="/players">Players</Link>

      <Link to="/teams">Teams</Link>
    </div>
  );
}
