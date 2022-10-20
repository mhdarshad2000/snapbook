export default function Message({own}) {
  return (
    <div className={own ?" message own" : "message"}>
      <div className="message_top">
        <img src="../../../images/arshad.jpg" alt="" />
        <p className="message_text">Hello, This is a message</p>
      </div>
      <div className="message_bottom">1 hour ago</div>
    </div>
  );
}
