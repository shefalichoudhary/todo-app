import { Grid, ListItem, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import PhoneBookForm from "./PhoneBookForm";

const PhoneBookEntry = ({ item, OnDeleteItem, OnUpdateItem }) => {
  const [isEditView, setIsEditView] = useState(false);
  const [update, setUpdate] = useState(item);

  const OnHandleEditItem = () => {
    setIsEditView(true);
  };

  const OnHandleDeleteItem = () => {
    OnDeleteItem(item);
  };

  const OnEditNumberChange = (e) => {
    const newUpdate = Object.assign({}, update);
    newUpdate.phoneNumber = e.target.value;

    setUpdate(newUpdate);
  };

  const OnHandleUpdatetem = () => {
    OnUpdateItem(update);
    setIsEditView(false);
  };

  const OnHandleCancelItem = () => {
    setIsEditView(false);
  };

  if (isEditView) {
    return (
      <ListItem>
        <Grid container spacing={3}>
          <Grid item>
            <PhoneBookForm
              name={update.name}
              phoneNumber={update.phoneNumber}
              isEdit={true}
            />
          </Grid>
        </Grid>
      </ListItem>
    );
  } else {
    return (
      <ListItem>
        <Grid container spacing={3}>
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
  }
};
export default PhoneBookEntry;
