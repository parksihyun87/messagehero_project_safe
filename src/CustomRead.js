
export default function CutomRead(props) {

  // 원스타일
  // const styles = {
  //   container: { padding: "20px", fontFamily: "Arial, sans-serif", width:"1000px", margin:"0px auto" },
  //   header: { border: "1px solid black", padding: "10px", textAlign: "center" },
  //   content: { display: "flex", gap: "20px" },
  //   box: { flex: 1, border: "1px solid black", padding: "10px", overflowX: "auto", overflowY: "auto" },
  //   input: { display: "block", width: "100%", margin: "10px 0" },
  //   textarea: { display: "block", width: "100%", height: "80px", margin: "10px 0" },
  //   button: { display: "block", width: "100px", marginTop: "10px" },
  //   link: { textDecoration: "none", color: "blue" },
  // };

  const styles = {
    input: {
      display: "block",
      width: "96%",
      padding: "10px",
      margin: "auto",
      marginBottom: "15px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    textarea: {
      display: "block",
      width: "96%",
      height: "100px",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      display: "inline-block",
      padding: "10px 20px",
      backgroundColor: "#28a745",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginRight: "10px",
    },
    deleteButton: {
      backgroundColor: "#dc3545",
    },
    link: {
      display: "inline-block",
      marginTop: "10px",
      color: "#007bff",
      textDecoration: "underline",
      cursor: "pointer",
    },
  };


  const selectT=props.selectT;

  return ( 
            <> 
           <form>
              <input name="title" type="text" value={selectT.title} placeholder="Input text" style={styles.input} onChange={(e)=>{
                const title=e.target.value;
                props.onAdjustT(title);
              }} />
              <textarea name="body" value={selectT.body} placeholder="Textarea" style={styles.textarea} onChange={(e)=>{
                const body=e.target.value;
                props.onAdjustB(body);
              }} />
              <button type="submit" style={styles.button} onClick={(e)=>{
                e.preventDefault();
                props.onAlter();
              }}>수정</button>
              <button type="submit" style={styles.button} onClick={(e)=>{
                e.preventDefault();
                props.onDelete();
              }}>삭제</button>
              <a  href="#" onClick={(e)=>{
                e.preventDefault();
                props.onChangeMode();
              }}>뒤로가기</a>

            </form>
            </>
     
  );
};