//Import React
import { useContext } from "react";
//Import Component
import PostListCard from "../component/PostListCard";
import ThemeContext from "../contexts/ThemeContext";
//Import Mui
import { Grid } from "@mui/material";

function PostListPage() {
  const { postList, filtredList } = useContext(ThemeContext);

  return (
    <>
      <Grid container justifyContent={"center"} className="grid-container">
        {filtredList.length > 0
          ? filtredList.map((post, key) => (
              <PostListCard key={key} item={post} />
            ))
          : postList.map((post, key) => <PostListCard key={key} item={post} />)}
      </Grid>
    </>
  );
}

export default PostListPage;
