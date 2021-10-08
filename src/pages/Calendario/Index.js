import './style.css';
import React from 'react';
import logo from '../../assets/images/calendar.png'
import { Link } from "react-router-dom"

export default function Calendario(){
    return(
        <body>
            <section className="header"/>
            <nav>
                <Link to="/"><img src={logo}
                    widht="500"
                    height="125"/></Link>
            </nav>  
            <div className="calendar">
                <p>Calendário</p>
                </div>
        </body>
    );
}