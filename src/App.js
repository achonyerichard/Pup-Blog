import { useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Blog from "./Blog/Blog";
import blogs from "./Data.js";
import Landing from "./Landing-Page/Landing";


const theme = createTheme({
  palette: {
    primary: {
      main: "#0A0A0A",
    },
    secondary: {
      main: "#E3E8E8",
    },
  },
});

function App() {
  const [blogData, setBlogData] = useState(blogs);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home blogData={blogData} />} />
          <Route
            path="/blog"
            element={<Blog blogData={blogData} setBlogData={setBlogData} />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
