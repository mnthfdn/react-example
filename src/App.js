//Import React
import * as React from "react";
import { Route, Routes } from "react-router";
import { ThemeProvider } from "./contexts/ThemeContext";
//Import Component
import Header from "./component/Header";
import UserDetailPage from "./pages/UserDetailPage";
import UserListPage from "./pages/UserListPage";
import PostListPage from "./pages/PostListPage";
//Import style
import "./App.css";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<PostListPage />} />
            <Route path="/UserDetailPage/:id" element={<UserDetailPage />} />
            <Route path="/PostListPage" element={<PostListPage />} />
            <Route path="/UserListPage" element={<UserListPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
