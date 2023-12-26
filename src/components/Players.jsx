import React from "react";
import { useLocation, useSearchParams, Link, NavLink } from "react-router-dom";
import usePlayerNames from "../../hooks/usePlayerNames";
import slugify from "../../utils/slugify";
import { Outlet } from "react-router-dom";
import Loading from "./Loading";
export default function Players (){
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [team, setTeam] = React.useState(searchParams.get("teamId"));
  const { response: teamPlayers, loading } = usePlayerNames(team);
  React.useEffect(() => {
    if (team === null) {
      searchParams.delete("teamId");
      setSearchParams(searchParams);
    } else {
      setTeam(searchParams.get("teamId"));
    }
  }, [searchParams]);

  if (loading) {
    return <Loading/>;
  }
  return (
    <div className="grid h-[93vh]  grid-cols-[auto_1fr_3fr_.25fr]">
      <div className="bg-cyan-900"></div>
      <div className="bg-cyan-200   text-cyan-900  py-4 ">
        <ul className="text-center space-y-2 ">
          {teamPlayers.map((player) => {
            return (
              <li className="text-lg font-semibold" key={player}>
                <NavLink
                  to={`/players/${slugify(player)}?teamId=${team}`}
                
                >
                  {player}
                </NavLink>
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
};
