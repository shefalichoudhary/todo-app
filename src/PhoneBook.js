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

  return (
    <>
      <PhoneBookForm addNewPhoneBookEntry={addNewPhoneBookEntry} />
      <ul>
        {phoneBookList.map((item) => {
          return <PhoneBookEntry item={item} />;
        })}
      </ul>
    </>
  );
};
export default PhoneBook;
