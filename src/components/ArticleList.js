import React from 'react'

function ArticleList() {
const blogPosts = blogData.posts;
const headers = blogPosts.map(post => <h1 key ={post.id} >{post.title}</h1>)
  return (
    <div>ArticleList</div>
  )
}

export default ArticleList