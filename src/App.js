import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Sidebar />
    </ThemeProvider>
  );
}

export default App;
