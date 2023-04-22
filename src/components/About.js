import React from 'react'
import blogData from '../data/blog'

function About({imageUrl = "https://via.placeholder.com/215"}) {
    const about = blogData.about;
  return (
    <aside>
        <img src={imageUrl} alt='blog logo' />
        <p>{about}</p>
    </aside>
  )
}

export default About