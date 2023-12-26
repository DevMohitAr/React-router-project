import * as React from "react";
import { BrowserRouter,  useRoutes } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading";
import Navbar  from "./components/Navbar";
import PageNotFound from "./components/NotFound";
const Home = React.lazy(() => import("./components/Home"));
const Players = React.lazy(() => import("./components/Players"));
const Teams = React.lazy(() => import("./components/Teams"));
const TeamPage = React.lazy(() => import("./components/TeamPage"));
const Team = React.lazy(() => import("./components/Team"));
const Player = React.lazy(() => import("./components/Player"));
const ArticlePage = React.lazy(() => import("./components/ArticlePage"));
const Article = React.lazy(() => import("./components/Article"));
function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
      exact:true
    },
    {
      path: "/players",
      element: <Players />,
      children: [
        { path: ":playerId", element: <Player /> },
        {
          path: "",
          element: (
            <div className="grid place-content-center ">
              <p className="text-6xl  text-center text-yellow-400 mt-[200px] ">
                Select a Player
              </p>
            </div>
          ),
        },
      ],
    },
    {
      path: "/teams",
      element: <Teams />,
      children: [
        { path: ":teamId", element: <Team /> },
        {
          path: "",
          element: (
            <div className="grid place-content-center ">
              <p className="text-6xl mt-[200px]  text-center text-yellow-400 ">
                Select a Team
              </p>
            </div>
          ),
        },
      ],
    },
    {path:":id",element:<TeamPage/>},
    {path:"/:teamId/articles",element:<ArticlePage/>,children:[{path:":articleId",element:<Article/>}]},
    {path:"*",element:<PageNotFound/>},
  ]);
}

function App() {
  
   
  return (
    <BrowserRouter >
      <Navbar  />
      <React.Suspense fallback={<Loading />}>
        <Routes/>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
