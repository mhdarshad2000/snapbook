import React, { Fragment } from "react";
import "./style.scss";
import Header from "../../component/header/Header";
import {
  ChatMenuInput,
  ChatMessageInput,
  ChatSendButton,
  MessengerWrapper,
} from "./styledComponets/MessengerStyle";
import Conversation from "./Conversation";
import Message from "./Message";
import ChatOnline from "./ChatOnline";

export default function Messenger() {
  return (
    <Fragment>
      <Header />
      <MessengerWrapper>
        <div className="chatMenu">
          <div className="chatMenu_wrapper">
            <ChatMenuInput placeholder="Search user" />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBox_wrapper">
            <div className="chatBox_top">
              <Message />
              <Message />
              <Message own={true} />
              <Message />
              <Message />
              <Message />
              <Message own={true} />
              <Message /> <Message />
              <Message />
              <Message own={true} />
              <Message /> <Message />
              <Message />
              <Message own={true} />
              <Message /> <Message />
              <Message />
              <Message own={true} />
              <Message /> <Message />
              <Message />
              <Message own={true} />
              <Message />
            </div>
            <div className="chatBox_bottom">
              <ChatMessageInput />
              <ChatSendButton>Send</ChatSendButton>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnline_wrapper">
            <ChatOnline />
          </div>
        </div>
      </MessengerWrapper>
    </Fragment>
  );
}
