import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchHotels } from '../../actions/HotelsActions';

import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import Body from '../../components/common/Body/Body';

/**
 * Container/Smart Componet which handles the State of the Page.
 */
class PageContainer extends Component {
    
    /**
     * On Component Load Fetch the Hotal Details
     * 
     */
    componentWillMount() {
        this.props.fetchHotels();
    }

    render() {
        return (
            <React.Fragment>
              <Header/>
              <Body/>
              <Footer/>
            </React.Fragment>
        );
    }
}

/**
 *  Dispatch to Props Mapper
 */
const mapDispatchToProps = (dispatch) => {  
    return {
        fetchHotels : () => {
            dispatch(fetchHotels());
        }
    }
}

/**
 * Connect the Contaier to the Store and mark the Container to provide routs
 */
export default withRouter(connect(
    null, 
    mapDispatchToProps
  )(PageContainer));