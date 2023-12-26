import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useTeamNames from "../../hooks/useTeamNames";
import useTeam from "../../hooks/useTeam";
import useTeamsArticles from "../../hooks/useTeamsArticles";
import slugify from "../../utils/slugify.js";
import Loading from "./Loading.jsx";

function useTeamPageData(teamId) {
  const { response: teamnames, loading: loadingTeamNames } = useTeamNames();
  const { response: team, loading: loadingTeam } = useTeam(teamId);

  const { response: articles, loading: loadingArticles } =
    useTeamsArticles(teamId);

  return {
    teamnames,
    articles,
    team,
    loading: loadingArticles || loadingTeam || loadingTeamNames,
  };
}

export default function TeamPage() {
  const { id } = useParams();
  const {  team, articles, loading } = useTeamPageData(id);
  if (loading) {
    return <Loading/>;
  }
  
  return (
    <main className="bg-cyan-900">
      <Link to="/" className="px-10 text-cyan-50 ">
        Back to teams
      </Link>
      <section className="grid grid-cols-[0.5fr_2fr_2fr_0.5fr] grid-rows-[auto_auto] max-w-[1180px] m-auto mt-10 rounded-md mb-10 pb-10 ">
        <div></div>
        <div className="bg-cyan-950 space-y-2 text-center border-l-8 border-red-500">
          <h1 className="text-4xl mt-4 text-cyan-100">{team.name}</h1>
          <h4>
            <Link
              className="text-yellow-400 font-semibold"
              to={{ pathname: "/players", search: `?teamId=${id}` }}
            >
              View roaster
            </Link>
          </h4>
          <div className=" p-4">
            <h4 className="text-lg text-cyan-300">Championship</h4>

            <ul className="flex justify-center gap-5">
              {team.championships.map((ship) => (
                <li className="text-cyan-50" key={ship}>
                  {ship}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-cyan-950 grid grid-cols-2  ">
          <div className="grid place-content-center  ">
            <p className="text-cyan-300 ">
              Established
            </p>
            <p className="text-center text-cyan-50">{team.established}</p>
          </div>
          <div className=" bg-cyan-950 text-cyan-100 grid place-content-center ">
            <p className="text-cyan-300">Managerial</p>
            <p className="text-center">{team.manager}</p>
          </div>
          <div className="bg-cyan-950 grid place-content-center text-cyan-100">
            <p className="text-center text-cyan-300">Coach</p>
            <p className="text-center">{team.coach}</p>
          </div>
          <div className="bg-cyan-950 grid place-content-center ">
            <p className="text-cyan-300">Record</p>
            <p className="text-center text-cyan-50">{team.wins}</p>
          </div>
        </div>
        <div></div>
        <div className="col-start-2 col-end-4 bg-cyan-100 text-cyan-900 text-center pb-10  ">
          <h2 className="  text-3xl text-cyan-900  mb-2 p-4 ">Articles</h2>
          <ul className="space-y-4">
            {articles?.map((article) => {
              return (
                <li key={article.id} className="text-lg text-cyan-600  tracking-wider">
                  <Link to={`/${id}/articles/${slugify(article.title)}`}>
                    {article.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};
