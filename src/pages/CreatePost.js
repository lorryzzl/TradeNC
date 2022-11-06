import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { storage } from "../firebase-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [imgRef, setImgRef] = useState("");

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      getDownloadURL(imageRef).then((url) => {
        setImgRef(url);
      });
      alert("upload successful");
    });
  };

  let navigate = useNavigate();

  const postsCollectionRef = collection(db, "posts");
  const createPost = async () => {
    if (title == "" || postText == "" || itemPrice == "" || contactInfo == "") {
      window.alert("You must fill out all the blanks!");
      return;
    }

    const d = new Date();
    const myPostTime = d.toLocaleDateString();
    console.log(myPostTime);
    await addDoc(postsCollectionRef, {
      title,
      postText,
      itemPrice,
      contactInfo,
      imgRef,
      myPostTime,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="ceatePostPate">
      <div className="cpContainer">
        <h1>Post Your Items</h1>
        <div className="inputGp">
          <label>Item Name</label>
          <input
            placeholder="What do you want to sell?"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>Item Description</label>
          <textarea
            placeholder="Add description..."
            maxLength="1000"
            onChange={(e) => {
              setPostText(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="inputGp">
            <label>Price</label>
            <input
              placeholder="Price...($)"
              onChange={(e) => {
                setItemPrice(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <div className="inputGp">
            <label>Contact Information</label>
            <input
              placeholder="Enter your email or phone"
              onChange={(e) => {
                setContactInfo(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="inputGp">
          <label>Upload item image</label>
          <input
            type="file"
            onChange={(e) => {
              setImageUpload(e.target.files[0]);
            }}
          />
        </div>
        <button className = "uploadButton" onClick={uploadImage}> Upload Image </button>
      </div>
      <button className = "submitButton" onClick={createPost}>Submit Post</button>
    </div>
  );
};

export default CreatePost;
