import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import Header from "../../component/header/Header";
import LeftHome from "../../component/home/left/LeftHome";
import Story from "../../component/home/stories/Story";
import CreatePost from "../../component/home/createPosts/CreatePost";

export default function Home() {
  const { user } = useSelector((user) => ({ ...user }));
  return (
    <div className="home">
      <Header />
      <div className="home_middle">
        <Story /> 
        <CreatePost user={user} />
      </div>
      <LeftHome user={user} />
      
    </div>
  );
}
