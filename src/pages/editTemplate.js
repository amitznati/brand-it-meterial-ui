import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Paper, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import withRoot from '../withRoot';
import LayoutProperties from './editTemplate/components/LayoutProperties';
import LayoutsList from './editTemplate/components/LayoutsList';

const styles = theme => ({
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
	paper: {
		margin: '8px'
	}
});

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
								<LayoutProperties />
							</ExpansionPanelDetails>
						</ExpansionPanel>
						
					</Paper>
				</Grid>
				<Grid item md={3}>
					<Paper className={classes.paper}>
						<LayoutsList />
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
