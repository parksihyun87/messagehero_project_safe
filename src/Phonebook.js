import { useDispatch, useSelector } from "react-redux";
import { addContact } from "./MHSlice";
import { Link } from "react-router-dom";
// useSelector(state=>state.MH.usersPhonebook.find(u=>u.userId===(login.userId ? login.userId : null)).contacts);
export default function Phonebook() {
    const dispatch = useDispatch();
    const login = useSelector(state=>state.MH.users.find(u=>u.login) ? state.MH.users.find(u=>u.login) : undefined);
return (
    <>
        <div>
            <h3>연락처</h3>
        </div>
        <div>
            <input type="text"></input>
            <button>검색</button>
        </div>
        <div>
            <h4>연락처목록</h4>
            <ul>
                {login ? login.contacts.map(c=><li><Link>{c.name}</Link></li>) : null}
            </ul>
        </div>
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                if(!login){
                    alert("로그인 후 이용하세요.");
                    return;
                }
                const inputName = e.target.name.value;
                const inputContact = e.target.contact.value;
                const inputEtc = e.target.etc.value;
                if(!(e.target.name.value)){
                    alert("이름을 입력해주세요.");
                    return;
                };
                if(!(e.target.contact.value)){
                    alert("번호를 입력해주세요.");
                    return;
                };
                const contact = {name: inputName, contact: inputContact, etc: inputEtc};
                const userId = login.userId;
                dispatch(addContact({userId, contact}));
            }}>
                <label>이름</label>
                <br></br>
                <input type="text" name="name"></input>
                <br></br>
                <label>전화번호</label>
                <br></br>
                <input type="text" name="contact"></input>
                <br></br>
                <label>기타</label>
                <br></br>
                <input type="text" name="etc"></input>
                <br></br>
                <button type="submit">추가</button>
            </form>
        </div>
    </>
)
}