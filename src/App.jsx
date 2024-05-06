import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./components/pages/Landing";
import SearchHobby from "./components/pages/SearchHobby";
import AddHobby from "./components/pages/AddHobby";
import FreeBoard from "./components/pages/FreeBoard";
import SignIn from "./components/pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "search",
    element: <SearchHobby />,
  },
  {
    path: "add",
    element: <AddHobby />,
  },
  { path: "freeboard", element: <FreeBoard /> },
  {
    path: "signin",
    element: <SignIn />,
  },
]);

const StyledApp = styled.div`
  background-color: #444444;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  a:link,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </StyledApp>
  );
}

export default App;
