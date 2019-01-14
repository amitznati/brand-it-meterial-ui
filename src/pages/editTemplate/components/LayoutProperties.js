import React from 'react';
import PropTypes from 'prop-types';
import {Grid, TextField, Select, InputLabel, FormControl, MenuItem, Input, Typography} from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../../withRoot';
import Autocomplete from '../../../components/core/Autocomplete';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	field: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: '90%',
	},
	formControl: {
		margin: theme.spacing.unit,
		padding: theme.spacing.unit
	},
	slider: {
		paddingTop: '31px'
	},
	selectControl: {
		margin: theme.spacing.unit
	},
	sliderContainer: {
		bottom: 0,
		position: 'absolute',
		paddingRight:  theme.spacing.unit * 2
	},
});

class LayoutProperties extends React.Component {
	
	state = {
		name: '',
		unit: 'cm',
		width: 0,
		height: 0
	};

	handleChange = name => event => {
		this.setState({[name]: event.target.value });
	};

	handleSliderChange = name => (event, value) => {
		this.setState({ [name]: value });
	};

	render() {
		const { classes } = this.props;
		const { name, width, height, unit } = this.state;
		return (
			<Grid container >
				<Grid item md={3}>
					<FormControl fullWidth className={classes.formControl}>
						<TextField
							id="standard-name"
							label="Name"
							value={name}
							onChange={this.handleChange('name').bind(this)}
						/>
					</FormControl>
				</Grid>
				<Grid item md={3}>
					<FormControl fullWidth className={classes.formControl}>
						<InputLabel htmlFor="unit">Unit</InputLabel>
						<Select
							value={unit}
							onChange={this.handleChange('unit').bind(this)}
							input={<Input name="unit" id="unit" />}
						>
							<MenuItem value={10}>cm</MenuItem>
							<MenuItem value={20}>px</MenuItem>
						</Select>
					</FormControl>
					<FormControl fullWidth className={classes.formControl}>
						<Typography htmlFor="width">Width</Typography>
						<Grid container className={classes.sliderContainer}>
							<Grid item xs={9}>
								<Slider
									value={width}
									className={classes.slider}
									aria-labelledby="width"
									onChange={this.handleSliderChange('width').bind(this)}
								/>
							</Grid>
							<Grid item xs={3}>
								<Input
									type="number"
									value={width}
									onChange={this.handleChange('width').bind(this)}
								/>
							</Grid>
						</Grid>
						
					</FormControl>
					<FormControl fullWidth className={classes.formControl}>
						<Typography htmlFor="height">Height</Typography>
						<Grid container className={classes.sliderContainer}>
							<Grid item xs={9}>
								<Slider
									value={height}
									className={classes.slider}
									aria-labelledby="height"
									onChange={this.handleSliderChange('height').bind(this)}
								/>
							</Grid>
							<Grid item xs={3}>
								<Input
									type="number"
									value={height}
									onChange={this.handleChange('height').bind(this)}
								/>
							</Grid>
						</Grid>
					</FormControl>
				</Grid>
				<Grid item md={3}>
					<FormControl fullWidth className={classes.selectControl}>
						<Autocomplete 
							isMulti={true} />
					</FormControl>
					
				</Grid>
				<Grid item md={3}>
				</Grid>
			</Grid>
							
						
		);
	}
}

LayoutProperties.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(LayoutProperties));
