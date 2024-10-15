import React from 'react'
import Comment from './Comment'

const comments = [
    {name: "정기홍", comment:"하하하하"},
    {name: "유재석", comment:"하하하하"},
    {name: "홍길동", comment:"고지ㅇㄹㅇㄴㅁㄹ"},
    {name: "김기환", comment:"가나다라마마"},
]


function CommentList(props) {
  return (
    <div>
        {comments.map((comment) => {
            return(
                <Comment name = {comment.name} comment = {comment.comment}/>
            )
        })}
    </div>
  )
}


export default CommentList
