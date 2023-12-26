
import slugify from "../../utils/slugify";
import {  Outlet, NavLink } from "react-router-dom";
import useTeamNames from "../../hooks/useTeamNames";
import Loading from "./Loading";
export default function Teams (){
  const { response: teamNames, loading } = useTeamNames();
  if (loading) {
    return <Loading/>;
  }
  return (
    <div className="grid h-[93vh] grid-cols-[auto_1fr_3fr_.25fr]">
      <div className="bg-cyan-900"></div>
      <div className="bg-cyan-200   text-cyan-900  py-4 ">
        <ul className="text-center space-y-2 ">
          {teamNames.map((team) => {
            return (
              <li className="text-lg font-semibold capitalize" key={team}>
                <NavLink to={`/teams/${slugify(team)}`}>{team}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="justify-center  bg-cyan-950 ">
        <Outlet />
      </div>
      <div className="bg-cyan-950"></div>
    </div>
  );
}