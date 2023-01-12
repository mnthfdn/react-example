//Import React
import * as React from "react";
//Import Mui
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
//Import style
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#ec4899",
  textAlign: "center",
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));
//const navigate = useNavigate();

function PostListCard({ item }) {
  return (
    <div className="containerCard">
      <Card sx={{ maxWidth: 300, margin: "5px" }}>
        <Link to={`/UserDetailPage/${item.id}`}>
          <CardHeader
            avatar={
              <Avatar
                src={item.owner.picture}
                sx={{ bgcolor: red[500] }}
                aria-label="recipe"
              >
                R
              </Avatar>
            }
            title={
              (item.owner.title
                ? item.owner.title?.charAt(0).toUpperCase() +
                  item.owner.title?.charAt(1)
                : "") +
              " " +
              item.owner.firstName +
              " " +
              item.owner.lastName
            }
            subheader={item.publishDate}
          />
        </Link>
        <CardMedia
          component="img"
          height="194"
          image={item.image}
          alt={item.text}
        />
        <CardContent>
          <Stack direction="row" spacing={1} sx={{ height: "30px" }}>
            {item.tags.map((tag, key) =>
              tag ? <Item sx={{ padding: " 4px" }}>{tag}</Item> : ""
            )}
          </Stack>
          <Typography variant="caption" color="text.secondary">
            {item.publishDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.owner.title
              ? item.owner.title?.charAt(0).toUpperCase() +
                item.owner.title?.charAt(1)
              : ""}
            {" " + item.owner.firstName + " " + item.owner.lastName}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" size="small">
            <FavoriteIcon />4 Likes
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
export default PostListCard;
