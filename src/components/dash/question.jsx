import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { selectDisplay } from '../../actions/displays';

class Question extends Component {
		render (){
				const { 

				} = this.props;

				return (
						<div className='question-view'>
								Question prompt
								<div>
									<i>"as;ldkjf;laksjd;lfkj;alkasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfoiu2938oryialshdfjkaksjckhflasdfiulyhawkjefjasldkjfhaslkdjfhlaiuyweilfhalskjdfhlaskjhdfa98yweilufha8yoiuhwefiulhjkewfasyiul43ewfyuief8yiulh34erwf8iulrefsyuihrewfsyuilhrefsduilefuihefuyilherwfsdyiuherwafyiulhewafyilureafluihfaiulhwafyiulhwef"</i>
								</div>
						</div>
				);
		}
}

export default connect(
	(state) => ({ displays: state.displays }),
	{ selectDisplay }
)(Question);
