import { Grid, TextField } from "@material-ui/core";

const PhoneBookEntry = ({ item }) => {
  return (
    <li>
      <Grid container>
        <Grid item>{item.name}</Grid>
        <Grid item>{item.phoneNumber}</Grid>
      </Grid>
    </li>
  );
};
export default PhoneBookEntry;
