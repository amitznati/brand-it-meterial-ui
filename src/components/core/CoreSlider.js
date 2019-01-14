import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Input, FormControl, Typography} from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	slider: {
		paddingTop: '31px'
	},
	sliderContainer: {
		bottom: 0,
		position: 'absolute',
		paddingRight:  theme.spacing.unit * 2
	},
	formControl: {
		margin: theme.spacing.unit,
		padding: theme.spacing.unit
	},
});

const CoreSlider = props => {
	const {classes, value, handleSliderChange, withNumberInput = true,label} = props;
	return (
		<FormControl fullWidth className={classes.formControl}>
			<Typography>{label}</Typography>
			<Grid container className={classes.sliderContainer}>
				<Grid item xs={withNumberInput ? 9 : 12}>
					<Slider
						value={value}
						className={classes.slider}
						onChange={handleSliderChange}
					/>
				</Grid>
				{withNumberInput && <Grid item xs={3}>
					<Input
						type="number"
						value={value}
						onChange={handleSliderChange}
					/>
				</Grid>}
			</Grid>
		</FormControl>
	);
};

CoreSlider.propTypes = {
	classes: PropTypes.object.isRequired,
	value: PropTypes.number.isRequired,
	handleSliderChange: PropTypes.func.isRequired,
	withNumberInput: PropTypes.bool,
	label: PropTypes.string.isRequired
};

export default withStyles(styles)(CoreSlider);