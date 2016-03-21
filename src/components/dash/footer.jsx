import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { selectDisplay } from '../../actions/displays';
import './dash.scss';

class DisplaysAll extends Component {
    render(){
        const { 
            displays, 
            selectDisplay 
        } = this.props;

        return (
            <div className='footer-view'>
                Footer goes here
            </div>
        );
    }
}

export default connect(
  state => ({ displays: state.displays }),
  { selectDisplay }
)(DisplaysAll);
