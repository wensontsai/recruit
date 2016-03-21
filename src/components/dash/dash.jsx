import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { selectDisplay } from '../../actions/displays';
import './dash.scss';

import Nav from '../nav/nav';

import Map from '../dash/map';
import Sidebar from '../dash/sidebar';
import Footer from '../dash/footer';

class DisplaysAll extends Component {
    render(){
        const { 
            displays, 
            selectDisplay 
        } = this.props;

        return (
            <div className='display-all-container'>
                <Nav />
                <div className='page'>
                <div className='row001'>
                    <Map />
                    <Sidebar />
                </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default connect(
  state => ({ displays: state.displays }),
  { selectDisplay }
)(DisplaysAll);
