import React from 'react';
import { useSelector } from 'react-redux';
import Anecdote from './Anecdote';

const AnecdoteList = () => {
  const ids = useSelector((state) => state.map((anecdote) => anecdote.id));
  const renderedAnecdotes = ids.map((id) => <Anecdote key={id} id={id} />);
  return <>{renderedAnecdotes}</>;
};

export default AnecdoteList;
