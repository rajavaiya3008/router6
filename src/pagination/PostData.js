import React from 'react'

const PostData = ({post}) => {
  return (
    <>
        
            <tr>
                <td>{post.id}</td>
                <td>{post.body}</td>
                <td>{post.title}</td>
            </tr>
        
    </>
  )
}

export default PostData