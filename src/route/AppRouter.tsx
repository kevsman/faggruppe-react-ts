import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/header/Header";
import Home from '../pages/home/Home';
import Profile from "../pages/profile/Profile";


export default () => {
    return (
        <Router>
            <Header></Header>
            <Switch>
                <Route exact path='/'>
                    <Home message='velkommen'></Home>
                </Route>
                <Route exact path='/profile'>
                    <Profile></Profile>
                </Route>
            </Switch>
        </Router>
    );
}