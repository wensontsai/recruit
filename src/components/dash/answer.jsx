import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { selectDisplay } from '../../actions/displays';

class Answer extends Component {
		render (){
			const { 
					displays,
					selectDisplay 
			} = this.props;

			return (
				<div className='answer-view'>
					<div>
						Answer area
					</div>
					<input type="text"/>
				</div>
			);
		}
}

export default connect(
	(state) => ({ displays: state.displays }),
	{ selectDisplay }
)(Answer);
