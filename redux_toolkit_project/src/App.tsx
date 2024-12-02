import { Provider } from "react-redux";
import "./App.css";
import store from "./store/store";
import { Container, Typography } from "@mui/material";
import AddHabitForm from "./components/add_habit_form";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" align="center">
          습관 리스트
        </Typography>
        <AddHabitForm />
      </Container>
    </Provider>
  );
}

export default App;
