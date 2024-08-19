import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { ThemeProvider } from "react-bootstrap";

function App() {
  return (
    <ThemeProvider breakpoints={["lg", "md, sm"]} minBreakpoint="sm">
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
