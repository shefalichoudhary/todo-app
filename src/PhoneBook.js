import { List } from "@material-ui/core";
import React, { useState } from "react";
import PhoneBookEntry from "./PhoneBookEntry";
import PhoneBookForm from "./PhoneBookForm";
import { v4 as uuidv4 } from "uuid";

const PhoneBook = () => {
  const [phoneBookList, setPhoneBookList] = useState([]);

  const addNewPhoneBookEntry = (phoneBookItem) => {
    setPhoneBookList([phoneBookItem, ...phoneBookList]);
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

    console.log("Old values", updateItem);
    console.log("Index", index);
    console.log("Old array", phoneBookList);

    const newArr = [...phoneBookList];
    console.log("New array", newArr);
    const newItem = Object.assign({}, updateItem);
    console.log("objec assign");
    newArr[index] = newItem;
    console.log("Updated array", newArr);
    setPhoneBookList(newArr);
  };

  return (
    <>
      <PhoneBookForm
        addNewPhoneBookEntry={addNewPhoneBookEntry}
        name=""
        phoneNumber=""
        isEdit={false}
      />
      <List>
        {phoneBookList.map((item) => {
          return (
            <PhoneBookEntry
              OnDeleteItem={OnDeleteItem}
              OnUpdateItem={OnUpdateItem}
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
