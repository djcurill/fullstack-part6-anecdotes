import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addVote, sortByVotes } from '../reducers/anecdoteReducer';

const getAnecdote = (state, id) => state.find((anecdote) => anecdote.id === id);

const Anecdote = ({ id }) => {
  const anecdote = useSelector((state) => getAnecdote(state, id));
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(addVote(id));
    dispatch(sortByVotes());
  };

  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote.id)}>vote</button>
      </div>
    </div>
  );
};

export default Anecdote;
