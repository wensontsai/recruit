import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

// import { selectDisplay } from '../../actions/displays';

class Profile extends Component {
		render (){
				const {
						
				} = this.props;

				return (
						<div className='profile-view'>
								<div>
									User information goes here:
								</div>
								{'\n'}
								<div>
									when you are ready to begin, click here:
								</div>
									<button className='btn btn-sm' >Start!</button> :: 01:59:34
								<div>
									<hr />
									// on click, area below will be shown,
									and timer begins to count down
								</div>
						</div>
				);
		}
}

export default connect(
	(state) => ({ displays: state.displays }),
	// { selectDisplay }
)(Profile);
