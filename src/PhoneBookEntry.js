import { Grid, ListItem, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";

import PhoneBookForm from "./PhoneBookForm";

const PhoneBookEntry = ({ item, OnDeleteItem, addNewPhoneBookEntry }) => {
  const [isEditView, setIsEditView] = useState(false);

  const OnHandleEditItem = () => {
    setIsEditView(true);
  };

  const OnHandleDeleteItem = () => {
    OnDeleteItem(item);
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
              isEdit={true}
              item={item}
              OnHandleCancelItem={OnHandleCancelItem}
              addNewPhoneBookEntry={addNewPhoneBookEntry}
            />
          </Grid>
        </Grid>
      </ListItem>
    );
  } else {
    return (
      <ListItem>
        <Grid container spacing={2}>
          <Grid item>{item.name}</Grid>
          <Grid item>{item.phoneNumber}</Grid>
          <Grid item>{item.speedDial}</Grid>

          <IconButton onClick={OnHandleDeleteItem} color="secondary">
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={OnHandleEditItem} color="primary">
            <EditIcon />
          </IconButton>
        </Grid>
      </ListItem>
    );
  }
};
export default PhoneBookEntry;
