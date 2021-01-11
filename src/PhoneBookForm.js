import { Button, Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const PhoneBookForm = ({ addNewPhoneBookEntry }) => {
  const [user, setUser] = useState({ name: "", phoneNumber: "" });

  const OnPhoneNumberChange = (e) => {
    const newUser = Object.assign({}, user);
    newUser.phoneNumber = e.target.value;
    setUser(newUser);
  };

  const OnNameChange = (e) => {
    const newUser = Object.assign({}, user);
    newUser.name = e.target.value;
    setUser(newUser);
  };

  const onPhoneBookSubmit = (e) => {
    e.preventDefault();
    user.id = uuidv4();
    addNewPhoneBookEntry(user);
    setUser({
      name: "",
      phoneNumber: "",
    });
  };

  return (
    <form onSubmit={onPhoneBookSubmit}>
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
        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default PhoneBookForm;
