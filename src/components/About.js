import React from 'react';

function About({imageUrl = "https://via.placeholder.com/215", image, about}) {
  const url = image ? image: imageUrl;
  return (
    <aside>
        <img src={url} alt='blog logo' />
        <p>{about}</p>
    </aside>
  )
}

export default About