import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material';
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import StartAdventurePage from "./pages/StartAdventurePage";
import SubscribePage from './pages/SubscribePage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/start-adventure" element={<StartAdventurePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;