import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Index";
import Cadastro from "./pages/Cadastro/Index";
import Error from "./pages/Error/Index";

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/cadastro' component={Cadastro}/>
                <Route path='*' component={Error}/>
            </Switch>
        </BrowserRouter>
    )
} 