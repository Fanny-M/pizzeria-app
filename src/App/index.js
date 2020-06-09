import React from "react";
import { CssBaseline, CircularProgress } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { useQuery } from "react-query";

import { theme } from "./theme";
import Header from "../Header";
import PizzaList from "../PizzaList";
import PopinCard from "../PopinCart";

const fetchPizzas = () => {
  const baseUrlApi =
    process.env.REACT_APP_BASE_URL_API || "http://localhost:3001";

  return fetch(`${baseUrlApi}/pizzas`).then((response) => response.json());
};

export default function App() {
  //const [pizzas, setPizzas] = React.useState([]);
  const { status, data } = useQuery("pizzas", fetchPizzas);
  const [popinCartOpen, setPopinCartOpen] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header shoppingCartCount={3} />
      {status === "loading" && <CircularProgress />}
      {status === "success" && <PizzaList data={data} />}
      <PopinCard open={popinCartOpen} />
    </ThemeProvider>
  );
}
