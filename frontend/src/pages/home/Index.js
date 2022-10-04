import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import Header from "../../component/header/Header";
import LeftHome from "../../component/home/left/LeftHome";
import Story from "../../component/home/stories/Story";
import CreatePost from "../../component/home/createPosts/CreatePost";
import SendVerification from "../../component/home/sendVerification/SendVerification";

export default function Home({ setVisible }) {
  const { user } = useSelector((user) => ({ ...user }));
  return (
    <div className="home">
      <Header />
      <div className="home_middle">
        <Story />
        {user.verified ? "" : <SendVerification user={user} />}
        <CreatePost user={user} setVisible={setVisible} />
      </div>
      <LeftHome user={user} />
    </div>
  );
}
