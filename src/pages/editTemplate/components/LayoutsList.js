import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Grid, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import LayoutProperties from './LayoutsList/components/LayoutProperties';

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
});

const layouts = [
	{
		type: 'image',
		properties: {
			src: 'sdffds',
		}
	},
	{
		type: 'text',
		properties: {
			text: 'sdf sdf',
		}
	},
];
class LayoutsList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			expanded: null,
		};

	}
	
	
	handleChange = panel => (event, expanded) => {
		this.setState({
			expanded: expanded ? panel : false,
		});
	};

	renderLayout(l,i) {
		const {expanded} = this.state;
		const {classes} = this.props;
		return (
			<ExpansionPanel key={i} expanded={expanded === i} onChange={this.handleChange(i).bind(this)}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>{l.type}</Typography>
					<Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails >
					<Typography className={classes.heading}>Layout Properties</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		);
		
	}

	render() {
		
		//const {classes} = this.props;
		return (
			<Grid container >
				<Grid item xs={12} >
					{layouts.map((l,i) => this.renderLayout(l,i))}
				</Grid>
			</Grid>
		);
	}
}
LayoutsList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LayoutsList);
