import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteSlice';
import anecdoteService from '../services/anecdotes';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = '';
    const newAnecdote = await anecdoteService.createNew(content);
    const action = createAnecdote(newAnecdote);
    dispatch(action);
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
