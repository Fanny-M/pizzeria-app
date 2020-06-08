import { arrayOf, number, string } from "prop-types";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Price from "../price";
import PizzaList from "../PizzaList";
import shape from "@material-ui/core/styles/shape";

const imageSize = 175;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 175,
    margin: `${theme.spacing(2)}px auto`,
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
          <Price value={price} />
        </Typography>
      </CardContent>
    </Card>
  );
}

PizzaCard.propTypes = {
  name: string.isRequired,
  ingredients: arrayOf(string).isRequired,
  price: number.isRequired,
  imageUrl: string,
};

PizzaCard.defaultProps = {
  imageUrl: null,
};
