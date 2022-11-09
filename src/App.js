import "./App.css";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import TVShow from "./pages/TVShows/TVShow";
import Contacts from "./pages/Contacts/Contacts";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/movies" exact Component={Movies} />
        <HomeTemplate path="/tvshows" exact Component={TVShow} />
        <Route path="/login" exact Component={Login} />
        <Route path="/register" exact Component={Register} />
        <HomeTemplate path="/contacts" exact Component={Contacts} />
      </Switch>
    </Router>
  );
}

export default App;
