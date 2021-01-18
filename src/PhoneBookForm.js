import { Button, Grid, TextField, IconButton } from "@material-ui/core";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CancelIcon from "@material-ui/icons/Cancel";
import UpdateIcon from "@material-ui/icons/Update";

const PhoneBookForm = ({ addNewPhoneBookEntry, name, phoneNumber, isEdit }) => {
  const [user, setUser] = useState({ name: name, phoneNumber: phoneNumber });

  const OnNameChange = (e) => {
    const newUser = Object.assign({}, user);
    newUser.name = e.target.value;
    setUser(newUser);
  };

  const OnPhoneNumberChange = (e) => {
    const newUser = Object.assign({}, user);
    newUser.phoneNumber = e.target.value;
    setUser(newUser);
  };

  const OnPhoneBookSubmit = (e) => {
    e.preventDefault();
    user.id = uuidv4();
    addNewPhoneBookEntry(user);
    setUser({
      name: "",
      phoneNumber: "",
    });
  };

  if (isEdit) {
    return (
      <Grid spacing={3} container alignItems="center">
        <Grid item>
          <TextField
            type="text"
            onChange={OnNameChange}
            value={name}
            label="Name"
          />
        </Grid>
        <Grid item>
          <TextField
            type="number"
            value={phoneNumber}
            label="Number"
            onChange={OnPhoneNumberChange}
          />
        </Grid>
      </Grid>
    );
  }

  let actionButtons;

  if (isEdit) {
    actionButtons = (
      <Grid item>
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </Grid>
    );
  } else {
    actionButtons = (
      <>
        <Grid item>
          <IconButton color="primary">
            <UpdateIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color="secondary">
            <CancelIcon />
          </IconButton>
        </Grid>
      </>
    );
  }

  return (
    <form onSubmit={OnPhoneBookSubmit}>
      <Grid spacing={3} container alignItems="center">
        <Grid item>
          <TextField
            type="text"
            onChange={OnNameChange}
            value={user.name}
            label="Name"
          />
        </Grid>
        <Grid item>
          <TextField
            type="number"
            value={user.phoneNumber}
            label="Number"
            onChange={OnPhoneNumberChange}
          />
        </Grid>
        {actionButtons}
      </Grid>
    </form>
  );
};

export default PhoneBookForm;
