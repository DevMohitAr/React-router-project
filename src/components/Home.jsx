import { Link } from "react-router-dom";
import useTeamNames from "../../hooks/useTeamNames";
import Loading from "./Loading";
export default function Home() {
  const { response: teamnames, loading } = useTeamNames();
  if (loading) {
    return <Loading />;
  }

  return (
    <section className="grid grid-rows-[1fr_auto_auto_1fr] place-content-center h-[650px]  ">
      <div></div>
      <h1 className="text-7xl text-center  text-cyan-100  ">Select a Team</h1>
      <div className="grid justify-center items-start grid-cols-[1fr_1fr_1.7fr_1fr_1.4fr] mt-16">
        {teamnames.map((team, index) => {
          return (
            <article
              key={index}
              className=" text-3xl  font-semibold  p-10 rounded-lg  justify-self-center  ring-2 ring-cyan-200  shadow-md capitalize text-white"
            >
              <Link to={`/${team}`}>{team}</Link>
            </article>
          );
        })}
      </div>
      <div></div>
    </section>
  );
}
