import React from 'react';
import PropTypes from 'prop-types';
import {Typography, Avatar} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './../../../styles/styles';
  
export const ImageLayoutHeader = props => {
	const {classes, layout} = props;
	return (
		<div>
			<Avatar alt="Remy Sharp" src={layout.properties.src} className={classes.bigAvatarAmit} />
		</div>
	);
};

ImageLayoutHeader.propTypes = {
	classes: PropTypes.object.isRequired,
	layout: PropTypes.object.isRequired,
};

export const ImageLayoutDetails = props => {
	const {classes, layout} = props;
	return (
		<div>
			<Typography className={classes.heading}>{layout.type}</Typography>
		</div>
	);
};

ImageLayoutDetails.propTypes = {
	classes: PropTypes.object.isRequired,
	layout: PropTypes.object.isRequired,
};

export default {
	ImageLayoutHeader: withStyles(styles)(ImageLayoutHeader),
	ImageLayoutDetails: withStyles(styles)(ImageLayoutDetails)
};