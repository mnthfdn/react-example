//Import React
import { useEffect, useState } from "react";
//Import Component
import UserListCard from "../component/UserListCard";
//Import Mui
import { Grid } from "@mui/material";

function UserListPage() {
  const [userList, setUserList] = useState([]);

  function fetchData() {
    fetch("https://dummyapi.io/data/v1/user?limit=10", {
      headers: {
        "app-id": "6112dc7c3f812e0d9b6679dd",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => setUserList(response.data))
      .catch((e) => console.log("Err: " + e));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Grid container>
        {userList.map((user, key) => (
          <UserListCard key={key} item={user} />
        ))}
      </Grid>
    </>
  );
}

export default UserListPage;
