import * as React from 'react';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Grid } from "@mui/material";

import FavoriteIcon from '@mui/icons-material/Favorite';


import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ec4899',
  textAlign: 'center',
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));


export default function UserListCard({item}) {
return (

    <Grid item xs={12} md={4} lg={3}>

  <Card sx={{display:"flex",margin:"5px" }}>
  
    <CardMedia
        component="img"
        image={item.picture} 
      />
    <CardContent className="userList">
    
      <Typography variant="caption" color="text.secondary">
      {item.id}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {item.title.charAt(0).toUpperCase() +item.title.charAt(1)+ " " + item.firstName + " " + item.lastName}
      </Typography>
    </CardContent>

    </Card>
    </Grid>
);
}
