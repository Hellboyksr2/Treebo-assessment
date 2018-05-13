import React, { Component } from 'react';

import Paper from 'material-ui/Paper';

const style = {
    padding : '30px',
    color : "#AAAAAA",
    textAlign: 'center',
    backgroundColor: '#000000',
};

/**
 * Default Footer Component for the project
 */
class Header extends Component {

    render() {
        return (
            <Paper style={style} zDepth={1} rounded={false} >
                Copyright © 2014 - 2018, Treebo.com
            </Paper>
        )
    }
}

export default Header;