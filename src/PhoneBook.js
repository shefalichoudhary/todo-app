import { List } from "@material-ui/core";
import React, { useState } from "react";
import PhoneBookEntry from "./PhoneBookEntry";
import PhoneBookForm from "./PhoneBookForm";

const PhoneBook = () => {
  const [phoneBookList, setPhoneBookList] = useState([]);

  const addNewPhoneBookEntry = (phoneBookItem, isEdit) => {
    if (isEdit) {
      OnUpdateItem(phoneBookItem);
    } else {
      setPhoneBookList([phoneBookItem, ...phoneBookList]);
    }
  };

  const OnDeleteItem = (selectedItem) => {
    const items = phoneBookList.filter((item) => {
      if (item.id === selectedItem.id) {
        return false;
      } else {
        return true;
      }
    });
    setPhoneBookList(items);
  };

  const OnUpdateItem = (updateItem) => {
    var index = phoneBookList.findIndex((item) => {
      if (item.id === updateItem.id) {
        return true;
      } else {
        return false;
      }
    });

    const newArr = [...phoneBookList];

    newArr[index] = updateItem;

    setPhoneBookList(newArr);
  };

  return (
    <>
      <PhoneBookForm
        addNewPhoneBookEntry={addNewPhoneBookEntry}
        item={{ name: "", phoneNumber: "" }}
        isEdit={false}
      />
      <List>
        {phoneBookList.map((item) => {
          return (
            <PhoneBookEntry
              OnDeleteItem={OnDeleteItem}
              addNewPhoneBookEntry={addNewPhoneBookEntry}
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
