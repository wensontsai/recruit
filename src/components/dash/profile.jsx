import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { selectDisplay } from '../../actions/displays';

class Profile extends Component {
		render (){
				const {
						displays,
						selectDisplay
				} = this.props;

				return (
						<div className='profile-view'>
								User information goes here
						</div>
				);
		}
}

export default connect(
	(state) => ({ displays: state.displays }),
	{ selectDisplay }
)(Profile);
