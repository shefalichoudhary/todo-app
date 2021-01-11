import { List } from "@material-ui/core";
import React, { useState } from "react";
import PhoneBookEntry from "./PhoneBookEntry";
import PhoneBookForm from "./PhoneBookForm";

const PhoneBook = () => {
  const [phoneBookList, setPhoneBookList] = useState([]);

  const addNewPhoneBookEntry = (phoneBookItem) => {
    setPhoneBookList([phoneBookItem, ...phoneBookList]);
  };
  // const OnAdd = ({ text }) => {
  //   setPhoneBookList([...phoneBookList]);
  // };
  const OnDeleteItem = (selectedItem) => {
    console.log(selectedItem);
    const items = phoneBookList.filter((item) => {
      if (item.id === selectedItem.id) {
        return false;
      } else {
        return true;
      }
    });
    console.log(items);
    setPhoneBookList(items);
  };

  return (
    <>
      <PhoneBookForm addNewPhoneBookEntry={addNewPhoneBookEntry} />
      <List>
        {phoneBookList.map((item) => {
          return (
            <PhoneBookEntry
              OnDeleteItem={OnDeleteItem}
              item={item}
              key={item.id}
            />
          );
        })}
      </List>
    </>
  );
};
export default PhoneBook;
