import React from 'react';
import PropTypes from 'prop-types';
import {TextField, FormControl} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	formControl: {
		margin: theme.spacing.unit,
		padding: theme.spacing.unit
	},
});

const CoreText = props => {
	const {classes, value, handleTextChange, label} = props;
	return (
		<FormControl fullWidth className={classes.formControl}>
			<TextField
				label={label}
				value={value}
				onChange={handleTextChange}
			/>
		</FormControl>
	);
};

CoreText.propTypes = {
	classes: PropTypes.object.isRequired,
	value: PropTypes.string.isRequired,
	handleTextChange: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired
};

export default withStyles(styles)(CoreText);