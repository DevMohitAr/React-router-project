import { useParams, NavLink, Outlet } from "react-router-dom";
import useArticle from "../../hooks/useArticle";
import useTeamsArticles from "../../hooks/useTeamsArticles";
import slugify from "../../utils/slugify";
import Loading from "./Loading";
export default function ArticlePage() {
  const { teamId } = useParams();

  const { response: articles, loading } = useTeamsArticles(teamId);
  if (loading) {
    return <Loading/>;
  }

  return (
    <div className="grid h-screen grid-cols-[auto_1.5fr_3fr_.25fr]">
      <div className="bg-cyan-900"></div>
      <div className="bg-cyan-200   text-cyan-900  py-4 ">
        <ul className="text-center space-y-4 ">
          {articles.map((article) => {
            return (
              <li className="text-lg font-semibold capitalize" key={article.id}>
                <NavLink to={`/${teamId}/articles/${slugify(article.title)}`}>
                  {article.id}
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
}
