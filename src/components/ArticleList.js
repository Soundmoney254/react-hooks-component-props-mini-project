import React from 'react'
import Article from './Article'
import blogData from '../data/blog';

function ArticleList() {
  const blogPosts = blogData.posts;
  const articles = blogPosts.map(post => {
    return <Article key = {post.id} date = {post.date} title={post.title} preview={post.preview} minutes={post.minutes}/>
  })
  return (
    <main>
      {articles}
    </main>
  )
}

export default ArticleList