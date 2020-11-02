import React from 'react'
import { Link } from "react-router-dom"
import Notification from '../components/Notification'

const AnecdoteList = ({ notification, anecdotes }) => {
    return (
        <div>
        <h2>Anecdotes</h2>
        <Notification notification={notification} />
        <ul>
            {anecdotes.map(anecdote => (
                <li key={anecdote.id} >
                    <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
                </li>
                )
            )}
        </ul>
        </div>
    )
}

export default AnecdoteList