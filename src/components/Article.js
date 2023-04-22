import React from 'react'
import blogData from '../data/blog'

function Article({date} = "January 1, 1970") {
  return (
    <article>
        <h3></h3>
        <small>{date}</small>    
    </article>
  )
}

export default Article