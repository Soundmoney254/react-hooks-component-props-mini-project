import React from 'react'

function Article({ date = "January 1, 1970",title,preview,minutes }) {

  const coffeeCups = Math.ceil(minutes / 5);
  const bentoBoxes = Math.ceil(minutes / 10);

  let readTimeEmoji;
  if (minutes < 30) {
    readTimeEmoji = "☕️".repeat(coffeeCups) + ` ${minutes} min read`;
  } else {
    readTimeEmoji = "🍱".repeat(bentoBoxes) + ` ${minutes} min read`;
  }

  return (
    <article>
        <><h3>{title}</h3>
        <small id='date' >{date}</small> <li id='emoji'> •{readTimeEmoji}</li>
        <p>{preview}</p></>
    </article>
  )
}

export default Article