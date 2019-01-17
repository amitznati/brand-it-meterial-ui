import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Paper, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import withRoot from '../../withRoot';
import TemplateProperties from './components/TemplateProperties';
import LayoutsList from './components/LayoutsList';

import styles from './../../styles/styles';


class EditTemplate extends React.Component {

	state = {
		expanded: null,
	};

	handleChange = panel => (event, expanded) => {
		this.setState({
			expanded: expanded ? panel : false,
		});
	};

	render() {
		//const {expanded} = this.state;
		const {classes} = this.props;
		return (
			<Grid	container spacing={16}>
				<Grid item xs={12} >
					<Paper className={classes.paper}>
						<ExpansionPanel >
							<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
								<Typography className={classes.heading}>Template Properties</Typography>
								<Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<TemplateProperties />
							</ExpansionPanelDetails>
						</ExpansionPanel>
						
					</Paper>
				</Grid>
				<Grid item md={3}>
					<Paper className={classes.paper}>
	
						<ExpansionPanelSummary>
							<Typography className={classes.heading}>Layouts List</Typography>
						</ExpansionPanelSummary>

						<LayoutsList />

					</Paper>
				</Grid>
				<Grid item md={9}>
					<Paper className={classes.paper}>
						<Typography className={classes.heading}>Layouts List</Typography>
					</Paper>
				</Grid>
			</Grid>
		);
	}
}
EditTemplate.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(EditTemplate));
