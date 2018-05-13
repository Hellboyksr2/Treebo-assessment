import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const LinkStyles = {
    color : "#FFFFFF",
    marginTop : '5px'
}



/**
 * Default Header Component for the project
 * 
 * Which is Used for Providing the Essential Routing Links
 */
class Header extends Component {

    render() {
        return (
            <AppBar title="Treebo - Assessment" showMenuIconButton={false} 
                iconElementRight={
                <React.Fragment>
                    <Link to='/'><FlatButton label="Home" style={LinkStyles}/></Link>
                </React.Fragment>
                }/>
        )
    }
}

export default Header;