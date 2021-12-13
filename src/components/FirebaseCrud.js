import React from "react";
import db from "./firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "@firebase/firestore";

function FirebaseCrud() {
  const [list, setList] = React.useState();

  // Read
  function getDocuments() {
    const q = query(collection(db, "blogs"), orderBy("date", "desc"));

    onSnapshot(q, (snapshot) => {
      setList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }

  // Write
  const addDocument = (e) => {
    e.preventDefault();

    addDoc(collection(db, "blogs"), {
      heading: "This is my 1st post",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id orci a felis rhoncus pellentesque. Aliquam ipsum ex, rutrum in fermentum id, bibendum eu dui. Nunc nec feugiat neque, vitae posuere mi. Suspendisse ac euismod dolor, ac maximus nibh. Pellentesque ac mi est. Morbi laoreet metus lacus, id malesuada ante eleifend eu. In quis dui mauris. Vestibulum ac porttitor augue. Quisque bibendum nulla et erat molestie, vitae suscipit lorem tristique",
      date: new Date(),
    }).catch((err) => console.error(err));
  };

  // delete
  async function deleteDocument(id) {
    let request = await deleteDoc(doc(db, "blogs", id));
    console.log(request);
  }

  // update
  async function updateDocument(id) {
    const itemRef = doc(db, "blogs", id);
    setDoc(itemRef, {
      heading: "Updated Heading",
      date: new Date(),
    });
  }

  return (
    <div className="App">
      <button onClick={getDocuments}>Get</button>

      <button onClick={addDocument}>Add</button>
      <button
        onClick={() => {
          deleteDocument(list[0].id);
        }}
      >
        Delete
      </button>
      <button onClick={() => updateDocument(list[0].id)}>Update</button>

      <button
        onClick={() => {
          console.log(list);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default FirebaseCrud;
