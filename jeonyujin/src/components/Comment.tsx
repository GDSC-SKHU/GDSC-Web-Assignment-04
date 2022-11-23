import { ChangeEvent, FormEvent, useState } from "react";

interface IComment {
    id: number;
    content: string;
}

const INPUT_ID = "commentinput";

function Comment() {
    const [comments, setComments] = useState<IComment[]>([{ id: 0, content: "내용을 입력해보세요!"}]);

    const [currentComment, setcurrentComment] = useState<string>("");

    const onCurrentCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setcurrentComment(value);
    };
    
    const onCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setComments((prev) => [
            ...prev,
            { id: prev.length + 1, content: currentComment },
        ]);
        setcurrentComment("");
    };

    return (
        <div>
            <h1>댓글</h1>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <h2>{comment.content}</h2>
                </div>
            ))}
            <form onSubmit={onCommentSubmit}>
                <label htmlFor={INPUT_ID}>내용: </label>
                <input
                id={INPUT_ID}
                type="text"
                value={currentComment}
                onChange={onCurrentCommentChange}
                />
                <button>작성</button>
            </form>
        </div>
    )
}

export default Comment;