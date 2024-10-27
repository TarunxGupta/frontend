import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>TG</span>
          <p>Thank you</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>TG</span>
          <p>Thank you</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>TG</span>
          <p>Customer is happy</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>TG</span>
          <p>Customer is happy</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>TG</span>
          <p>Hi</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>TG</span>
          <p>Hi</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              TG
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Thank you</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Thank you</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Customer is happy</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Customer is happy</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Hi</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Hi</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>No problem</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>No problem</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Check</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Check</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
