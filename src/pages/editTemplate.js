import React from 'react';
//import PropTypes from 'prop-types';
import {Grid, Paper} from '@material-ui/core';
import withRoot from '../withRoot';
import LayoutProperties from './editTemplate/components/LayoutProperties';


class EditTemplate extends React.Component {

	render() {
		return (
			<Grid	container spacing={16}>
				<Grid item xs={12} >
					<Paper style={{margin: '8px'}}	>
						<LayoutProperties />
					</Paper>
				</Grid>
				<Grid item md={3}>
					<Paper	>

					</Paper>
				</Grid>
			</Grid>
		);
	}
}


export default withRoot(EditTemplate);
