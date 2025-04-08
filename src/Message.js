import { useState } from "react";
import { useSelector } from "react-redux";
import "./assets/css/Message.css"


export default function Message() {
  const currentUser = useSelector(state => state.MH.currentUser);
  const currentStyle = currentUser ? currentUser.userStyle : [];
  const contactList = currentUser ? currentUser.contacts : [];
  
  const [inputMessage, setInputMessage] = useState("");
  const [recipientList, setRecipientList] = useState([]);

  const handleSend = () => {
    if (!currentUser) {
      alert("로그인 후 이용하세요.");
      return;
    }
    if (!inputMessage.trim() && recipientList.length === 0) {
      alert("메시지와 수신자를 입력하세요.");
      return;
    }
    if (!inputMessage.trim()) {
      alert("메시지를 입력하세요.");
      return;
    }
    if (recipientList.length === 0) {
      alert("수신자를 추가하세요.");
      return;
    }
    alert("메시지가 전송되었습니다!");
    setInputMessage("");
    setRecipientList([]);
  };

  return (
    <>
    {currentUser ? (
      <div className="message_container">
        {/* 왼쪽 영역: 메시지 작성 + 서식 */}
        <div className="message_left">
          <div className="message_box">
            <h3>문자메세지</h3>
            <textarea
              className="message_textarea"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="메시지를 입력하세요"
            />
          </div>
  
          <div>
            <h3>서식</h3>
            <div className="message_box2">
              {currentStyle.length === 0 ? (
                <p>서식이 없습니다.</p>
              ) : (
                currentStyle.map((s) => (
                  <div
                    className="message_item"
                    key={s.title}
                    onClick={() => setInputMessage(s.body)}
                  >
                    <p>{s.title}</p>
                    <p>{s.body}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
  
        {/* 오른쪽 영역: 연락처 + 수신자 목록 */}
        <div className="message_right">
          <div className="message_box">
            <h3>연락처</h3>
            <ul>
              {contactList.map((c) => (
                <li key={c.contact} >
                  {c.name}
                  <button
                   className="message_add_bt"
                    onClick={() => {
                      if (!recipientList.some((r) => r.contact === c.contact)) {
                        setRecipientList([...recipientList, c]);
                      }
                    }}
                  >
                    추가
                  </button>
                </li>
              ))}
            </ul>
  
            <h3>수신자 목록</h3>
            <ul>
              {recipientList.length > 0 ? (
                recipientList.map((r) => (
                  <li key={r.contact}>
                    {r.name}
                    <button
                      className="message_remove_bt"
                      onClick={() =>
                        setRecipientList(
                          recipientList.filter((rec) => rec.contact !== r.contact)
                        )
                      }
                    >
                      제외
                    </button>
                  </li>
                ))
              ) : (
                <p>수신자 없음</p>
              )}
            </ul>
  
            <button className="message_add_bt" onClick={handleSend}>
              전송
            </button>
          </div>
        </div>
      </div>
    ) : (
      <div className="message_container">
        <div className="message_left">
          <div className="message_box">
            <h3>문자메세지</h3>
            <textarea
              className="message_textarea"
              disabled
              placeholder="로그인 후 이용하세요."
            />
          </div>
  
          <div>
            <h3>서식</h3>
            <div className="message_box2">
              <p>로그인 후 이용하세요.</p>
            </div>
          </div>
        </div>
  
        <div className="message_right">
          <div className="message_box">
            <h3>연락처</h3>
            <p>로그인 후 이용하세요.</p>
  
            <h3>수신자 목록</h3>
            <p>로그인 후 이용하세요.</p>
  
            <button
              className="message_add_bt"
              onClick={() => alert("로그인 후 이용하세요.")}
            >
              전송
            </button>
          </div>
        </div>
      </div>
    )}
  </>
  
  );
}