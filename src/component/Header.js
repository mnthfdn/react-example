import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import {  useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: 0,

  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Header() {
  const {
    postList,
    setPostList,
    filtredList,
    setFiltredList,
  } = useContext(ThemeContext);

  let list = [];

  function something(value) {
    if (postList.length) {
      list = postList.filter(
        (item) => {
          const filterPost = item.owner.firstName.toUpperCase() + " " +item.owner.lastName.toUpperCase();
          const searchPost = value.toUpperCase(); 
          return filterPost.indexOf(searchPost) > -1;
        }
      );
      if(value){
        setFiltredList(list);
      }else{
        setFiltredList([])
      }
     
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DUMMYAPI.IO
          </Typography>

          <MenuItem>
            <Typography textAlign="center">
              <Link to="/PostListPage">Post List</Link>
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography textAlign="center">
              <Link to="/UserListPage">User List</Link>
            </Typography>
          </MenuItem>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={(e) => {
                something(e.target.value);
              }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            >
              {" "}
            </StyledInputBase>
          </Search>
        </Toolbar>
      </AppBar>

      <div></div>
    </Box>
  );
}
export default Header;
