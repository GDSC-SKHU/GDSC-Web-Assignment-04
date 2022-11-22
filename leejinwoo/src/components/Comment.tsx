import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";

// 댓글에 필요한 index(아이디):number / 댓글: string 
interface IComment{
    id: number;
    content: string;
}

// 댓글 기능 및 좋아요
function Comment(){
    // 올라온 댓글 상태관리 [초기에 올라온거, 추가로 올라온거] = IComment에 넣을거임~
    const [comment, setComment] = useState<IComment[]>([]);

    // 새로올릴 댓글 관리 [추가할댓글 창, 댓글창에 입력되면] = 입력창""이걸로 바꿔주셈
    const [ncmt, setNcmt] = useState<string>("");

    // 좋아요 상태 관리 [빈 하트, 빈하트가 눌리면] = 참 거짓으로 바꿔주셈~
    const [heart, setHeart] = useState(true);

    // 새로운 댓글이 입력되면 setNcmt로 관리
    const onNcmtChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setNcmt(value);
    };

    // 새로운 댓글의 제출버튼이 눌리면
    const onCmtSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault() //preventDefault() = 새로고침 안할거임 ㅇㅇ
        // setComment 하면 합칠꺼임~
        setComment((prev) => [
            ...prev,
            { id: prev.length + 1, content: ncmt },
          ]);
      
        setNcmt("");    // 댓글창 초기화 해주셈~

    };

    return(
        <div className="comments">
            {/* 댓글 입력 형식 */}
            {comment.map((cmt) => (
                <div key={cmt.id} className="ncmt">
                    <p>: {cmt.content}</p>
                </div>
            ))}

            {/* 제출 버튼을 누르면 onCmtSubmit 작동 */}
            {/* 라벨은 input의 이름을 적는 태그임. htmlFor에 input의 아이디나 네임을 적어 인풋과 연결함. */}
            <form onSubmit={onCmtSubmit} className=" comment " >
                {/* 클릭시 빈하트에서 채워짐 */}
                <Image 
                    src={heart ? '/EHeart.png' : '/Heart.png'} 
                    alt={"heart"}
                    width={35} height={35}
                    onClick={() => {setHeart(prev => !prev)}}
                    />

                <label htmlFor="cmtinput"></label>
                <input
                id="cmtinput" placeholder="댓글을 입력해 주세요"
                type="text" value={ncmt} onChange={onNcmtChange}/>
                <button type="submit">등록</button>
            </form>
        </div>
    )

}


export default Comment;