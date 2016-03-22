import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { selectDisplay } from '../../actions/displays';

class Question extends Component {
		render (){
				const { 
						displays,
						selectDisplay
				} = this.props;

				return (
						<div className='question-view'>
								Question prompt
						</div>
				);
		}
}

export default connect(
	(state) => ({ displays: state.displays }),
	{ selectDisplay }
)(Question);
