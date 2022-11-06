import React, {useEffect, useState} from "react";
import { addDoc, collection } from "firebase/firestore";
import {db,auth} from "../firebase-config";
import { useNavigate } from "react-router-dom";

const CreatePost = ({isAuth}) => {
  const [title,setTitle]= useState("")
  const [postText, setPostText] = useState("");

  let navigate = useNavigate();

  const postsCollectionRef = collection(db, "posts");
  const createPost = async() => {
    await addDoc(postsCollectionRef, {title, postText, author:{name: auth.currentUser.displayName, id: auth.currentUser.uid}});
    navigate("/");
  };

  useEffect(() => {
    if(!isAuth){
      navigate("/login");
    }
  }, []);

  return (
  <div className="ceatePostPate">
    <div className="cpContainer">
      <h1>Post Your Items</h1>
      <div className="inputGp">
        <label>Item Name</label>
        <input placeholder="What do you want to sell?" onChange={(e) => {
          setTitle(e.target.value);
        }}/>
      </div>
      <div className="inputGp">
        <label>Item Description</label>
        <textarea placeholder="Add description..." onChange={(e) =>{
          setPostText(e.target.value)
        }}/>
      </div>
    </div>
    <button onClick={createPost}>Submit Post</button>
  </div>)
};

export default CreatePost;
