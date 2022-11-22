import React from 'react';

interface IComment {
    id: number;
    name: string;
    content: string;
}

function Comment(Props: IComment) {
    return (
        <div>
            id:{Props.id} name:{Props.name},content:{Props.content}
        </div>
    );
}

export default Comment;
