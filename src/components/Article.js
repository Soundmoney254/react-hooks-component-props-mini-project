import React from 'react'

function Article({ date = "January 1, 1970",title, preview, minutes}) {

  const coffeeCups = Math.round(minutes / 5);
  const bentoBoxes = Math.round(minutes / 10);

  let emoji;
  if (minutes < 30) {
    emoji = "☕️".repeat(coffeeCups) + ` ${minutes} min read`;
  } else {
    emoji = "🍱".repeat(bentoBoxes) + ` ${minutes} min read`;
  }

  return (
    <article>
        <><h3>{title}</h3>
        <small id='date' >{date}</small> <li id='emoji'> •{emoji}</li>
        <p>{preview}</p></>
    </article>
  )
}

export default Article