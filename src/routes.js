import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Index";
import Cadastro from "./pages/Cadastro/Index";
import Error from "./pages/Error/Index";
import Home from "./pages/Home"
import Perfil from "./pages/Perfil/Index";


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
            <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/cadastro' component={Cadastro}/>
                <Route exact path='/perfil' component={Perfil}/>
                <Route path='*' component={Error}/>
            </Switch>
        </BrowserRouter>
    )
} 