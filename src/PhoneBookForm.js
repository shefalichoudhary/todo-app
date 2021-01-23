import {
  Button,
  Grid,
  TextField,
  IconButton,
  MenuItem,
  Select,
  InputLabel,
} from "@material-ui/core";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CancelIcon from "@material-ui/icons/Cancel";
import UpdateIcon from "@material-ui/icons/Update";

const PhoneBookForm = ({
  addNewPhoneBookEntry,
  OnHandleCancelItem,
  isEdit,
  item,
}) => {
  const [user, setUser] = useState({
    name: item.name,
    phoneNumber: item.phoneNumber,
    id: item.id,
    speedDial: item.speedDial,
  });

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
  const OnHandleUpdateItem = () => {
    addNewPhoneBookEntry(user, isEdit);
    OnHandleCancelItem();
  };
  const OnSelectHandler = (e) => {
    const newUser = Object.assign({}, user);
    newUser.speedDial = e.target.value;
    setUser(newUser);
  };

  const OnPhoneBookSubmit = (e) => {
    e.preventDefault();
    user.id = uuidv4();
    addNewPhoneBookEntry(user, isEdit);
    setUser({
      name: "",
      phoneNumber: "",
      speedDial: undefined,
    });
  };

  let actionButtons;

  if (isEdit) {
    actionButtons = (
      <>
        <div>Speed Dial</div>
        <Grid item>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            style={{ marginLeft: "20px" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={user.speedDial}
            onChange={OnSelectHandler}
          >
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
            <MenuItem value={40}>4</MenuItem>
            <MenuItem value={50}>5</MenuItem>
            <MenuItem value={60}>6</MenuItem>
            <MenuItem value={70}>7</MenuItem>
            <MenuItem value={80}>8</MenuItem>
            <MenuItem value={90}>9</MenuItem>
          </Select>
        </Grid>

        <Grid item>
          <IconButton onClick={OnHandleUpdateItem} color="primary">
            <UpdateIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={() => OnHandleCancelItem()} color="secondary">
            <CancelIcon />
          </IconButton>
        </Grid>
      </>
    );
  } else {
    actionButtons = (
      <>
        <Grid item>
          <Button
            style={{ marginLeft: "20px" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Add
          </Button>
        </Grid>
      </>
    );
  }

  return (
    <form onSubmit={OnPhoneBookSubmit}>
      <Grid spacing={3} container alignItems="center">
        <Grid item>
          <TextField
            required
            style={{ marginLeft: "20px" }}
            type="text"
            onChange={OnNameChange}
            value={user.name}
            label="Name"
          />
        </Grid>
        <Grid item>
          <TextField
            required
            type="number"
            value={user.phoneNumber}
            onChange={OnPhoneNumberChange}
            label="Number"
          />
        </Grid>
        {actionButtons}
      </Grid>
    </form>
  );
};

export default PhoneBookForm;
