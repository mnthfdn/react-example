//Import React
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
//Import Component
import GoogleMaps from "../component/GoogleMaps";
//Import Mui
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

function UserDetailPage() {
  const { id } = useParams();
  const [profileDetail, setProfileDetail] = useState([]);

  useEffect(() => {
    const getProfile = async () => {
      const response = await fetch(`https://dummyapi.io/data/v1/user/${id}`);
      setProfileDetail(await response.json());
    };
    getProfile();
  }, []);

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={4} lg={6}>
          <Img
            sx={{ width: "200px" }}
            src="https://randomuser.me/api/portraits/med/men/51.jpg"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          lg={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid className="userDetail">
            <Typography variant="subtitle2" gutterBottom>
              <b>Name:</b> Van Miert
            </Typography>

            <Typography variant="subtitle2" gutterBottom>
              <b>Surname:</b> Josef
            </Typography>

            <Typography variant="subtitle2" gutterBottom>
              <b>ID:</b> {id}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              <b>Date:</b> 2022-06-26
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5} lg={6}>
          <GoogleMaps />
        </Grid>
      </Grid>
    </>
  );
}

export default UserDetailPage;
