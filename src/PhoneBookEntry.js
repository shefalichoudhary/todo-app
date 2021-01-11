import { Grid, ListItem, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const PhoneBookEntry = ({ item, OnDeleteItem }) => {
  const OnHandleEditItem = () => {};
  const OnHandleDeleteItem = () => {
    OnDeleteItem(item);
  };
  return (
    <ListItem>
      <Grid container spacing={4}>
        <Grid item>{item.name}</Grid>
        <Grid item>{item.phoneNumber}</Grid>
        <Grid item>
          <IconButton onClick={OnHandleDeleteItem} color="secondary">
            <DeleteIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={OnHandleEditItem} color="primary">
            <EditIcon />
          </IconButton>
        </Grid>
      </Grid>
    </ListItem>
  );
};
export default PhoneBookEntry;
