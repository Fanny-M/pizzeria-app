import React from "react";

import Price from "../price";
import {
  CardActions,
  Button,
  CardMedia,
  Card,
  Typography,
  CardContent,
} from "@material-ui/core";
import { arrayOf, string, number } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const imageSize = 175;
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: imageSize,
    margin: `${theme.spacing(2)}px `,
  },
  button: {
    flexGrow: 1,
  },
}));

export default function PizzaCard({ name, ingredients, price, imageUrl }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      {imageUrl && (
        <CardMedia
          component="img"
          alt={name}
          height={imageSize}
          image={imageUrl}
          title={name}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {ingredients.join(", ")}
        </Typography>
        <Typography variant="h4" component="p">
          <Price value={price} />{" "}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button} color="primary" variant="contained">
          Ajouter
        </Button>
      </CardActions>
    </Card>
  );
}
PizzaCard.propTypes = {
  id: number,
  name: string.isRequired,
  ingredients: arrayOf(string).isRequired,
  price: number.isRequired,
  imageUrl: string,
};
PizzaCard.defaultProps = {
  imageUrl: null,
};
