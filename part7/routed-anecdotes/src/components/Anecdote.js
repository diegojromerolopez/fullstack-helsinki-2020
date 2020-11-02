import React from 'react'

const Anecdote = ({ anecdote }) => (
    <div>
        <p>{anecdote.content}</p>
        <em>{anecdote.author}</em>
        <p><a href={anecdote.info}>More info url</a></p>
        <p><span>{anecdote.votes}</span> vote(s)</p>
    </div>
)
export default Anecdote