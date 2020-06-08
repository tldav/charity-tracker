import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	Button
} from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		maxWidth: 345
	},
	media: {
		height: 140
	}
});

const CharityCard = (props) => {
	const classes = useStyles();
	const { name, image, about } = props.charity;

	return (
		<>
			<Grid item key={props.id} xs={12} sm={6} md={4}>
				<Card className={classes.root}>
					<CardMedia
						className={classes.media}
						image={image}
						title={name}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{name}
						</Typography>
						<Typography>{about}</Typography>
					</CardContent>
					<CardActions>
						<Button size="small" color="primary">
							View
						</Button>
						{props.isSignedIn === true ? (
							<Button size="small" color="primary">
								Edit
							</Button>
						) : null}
					</CardActions>
				</Card>
			</Grid>
		</>
	);
};

export default CharityCard;
