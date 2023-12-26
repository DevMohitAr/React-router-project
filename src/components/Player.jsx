import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import usePlayer from "../../hooks/usePlayer";
import Loading from "./Loading";

export default function Player() {
  const location = useLocation();
  const teamPlayer = location.pathname.split("/")[2];
  const { response: player, loading } = usePlayer(teamPlayer);
  const navigate = useNavigate()
  if (loading) {
    return <Loading/>;
  }
  if(!player){
    navigate("/players")
  }
  

  const { name, teamId,  avatar, apg, spg, rpg, ppg } =
    player;
   
  return (
    <>
     
        <div className="mt-10 sticky top-4 ">
          <div className="grid justify-center">
            <img
              className="block object-contain rounded-full h-72  "
              src={avatar}
              alt={name}
            />
          </div>
          <h2 className=" text-cyan-100 mt-4 text-center text-6xl">{name}</h2>
          <p className="mt-3 text-center text-2xl text-yellow-400 ">{teamId}</p>

          <div className="grid grid-cols-2 gap-10 mt-10">
            <div
              className=" text-2xl justify-self-center
        "
            >
              <p className="text-cyan-300">APG</p>
              <h3 className="text-cyan-100 text-center">{apg}</h3>
            </div>
            <div className="text-2xl justify-self-center">
              <p className="text-cyan-300">SPG</p>
              <h3 className="text-cyan-100 text-center">{spg}</h3>
            </div>
            <div className=" text-2xl justify-self-center">
              <p className="text-cyan-300">ppg</p>
              <h3 className="text-cyan-100 text-center">{ppg}</h3>
            </div>
            <div className="text-2xl justify-self-center">
              <p className="text-cyan-300">rpg</p>
              <h3 className="text-cyan-100 text-center">{rpg}</h3>
            </div>
          </div>
    
        </div>
      
    </>
  );
}
