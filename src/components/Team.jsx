import { Link, useNavigate, useParams } from "react-router-dom";
import useTeam from "../../hooks/useTeam";
import Loading from "./Loading";

export default function Team() {
  const { teamId } = useParams();
  const navigate =useNavigate()
  const { response: team, loading } = useTeam(teamId);

  if (loading) {
    return <Loading/>;
  }
  if(!team){
navigate("/teams")
  }
  const { name, id, coach, established, losses, wins } = team;

  return (
    <div className="mt-[100px]">
      <h2 className=" text-cyan-100 mt-4 text-center text-6xl">{name}</h2>
      <p className="mt-3 text-center text-2xl text-yellow-400 ">
        <Link to={`/${teamId}`}>{id}</Link>
      </p>

      <div className="grid grid-cols-2 gap-10 mt-[80px]">
        <div
          className=" text-2xl justify-self-center
        "
        >
          <p className="text-cyan-300 text-center">Coach</p>
          <h3 className="text-cyan-100 text-center">{coach}</h3>
        </div>
        <div className="text-2xl justify-self-center">
          <p className="text-cyan-300">Estab.</p>
          <h3 className="text-cyan-100 text-center">{established}</h3>
        </div>
        <div className=" text-2xl justify-self-center">
          <p className="text-cyan-300">Losses</p>
          <h3 className="text-cyan-100 text-center">{losses}</h3>
        </div>
        <div className="text-2xl justify-self-center">
          <p className="text-cyan-300">Wins</p>
          <h3 className="text-cyan-100 text-center">{wins}</h3>
        </div>
      </div>
    </div>
  );
}
