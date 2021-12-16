import db, { auth } from "../../firebase";
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
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { dataContext } from "../context/dataContext";

const FirebaseHook = () => {
  // Context Api
  const dataCon = React.useContext(dataContext);
  const { dispatch } = dataCon;

  const [list, setList] = React.useState();

  // To Solve the memory leakage problem, A useEffect Cleanup on Component Unmount
  React.useEffect(() => {
    return () => {
      setList({});
    };
  }, []);

  React.useEffect(() => {
    const q = query(collection(db, "blogs"), orderBy("date", "desc"));

    onSnapshot(q, (snapshot) => {
      setList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    dispatch({ type: "add", payload: list });
  }, [dispatch, list]);

  const signIn = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addDocument = React.useCallback(function (e, blogHeading, blogBody) {
    e.preventDefault();

    addDoc(collection(db, "blogs"), {
      heading: blogHeading,
      body: blogBody,
      date: new Date(),
    }).catch((err) => console.error(err));
  }, []);

  async function updateDocument(id, blogHeading, blogBody) {
    const itemRef = doc(db, "blogs", id);
    setDoc(itemRef, {
      heading: blogHeading,
      body: blogBody,
      date: new Date(),
    });
  }

  async function deleteDocument(id) {
    let request = await deleteDoc(doc(db, "blogs", id));
    console.log(request);
  }

  return [list, addDocument, updateDocument, deleteDocument, signIn];
};

export default FirebaseHook;
