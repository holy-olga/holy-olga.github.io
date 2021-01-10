import React from 'react';
import { Link } from 'react-router';
import {Gh1, Gh2} from './Gh';

export default class MainMenu extends React.Component {
    render() {
        return ( <div id="mainMenu">
            <div className="cover">
            </div>
            <div className="flexing">
                <Gh2 onlyhover glitchtype="2" className="menuItem">
                    <Link to="/c/log">Art Projects</Link>
                </Gh2>
                <Gh2 onlyhover glitchtype="2" className="menuItem">
                    <Link to="/c/works">Exhibitions</Link>
                </Gh2>
                <Gh2 onlyhover glitchtype="2" className="menuItem">
                    <Link to="/c/ware">Festivals</Link>
                </Gh2>
                <Gh2 onlyhover glitchtype="2" className="menuItem">
                    <Link to="/c/ware">Issues</Link>
                </Gh2>
                <Gh2 onlyhover glitchtype="2" className="menuItem">
                    <Link to="/c/ware">Applied Works</Link>
                </Gh2>
                <Gh2 onlyhover glitchtype="2" className="menuItem">
                    <Link to="/c/about">About</Link>
                </Gh2>
            </div>
        </div> )
    }
}