import React, { Component } from 'react';

import Chip from 'material-ui/Chip';
import { CardHeader, CardText } from 'material-ui/Card';

const styles = {
    chip: {
      margin: 4,
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  };
  
/**
 * Reusable Component to show the Chips Based section in the Entire Project.
 * 
 * Will Need Section Title and Chips Details.
 */
class ChipDetails extends Component {
    
    render() {
        return (
            <CardText>
                <CardHeader title={this.props.title} className="bold-text"/>
                <div style={styles.wrapper}>
                    {   
                        this.props.chips ? 
                        (this.props.chips.map((value, index) => {
                            return <Chip key={index} style={styles.chip}>{value}</Chip>
                        })) : null
                    }
                </div>
            </CardText>
        )
    }
}

export default ChipDetails;