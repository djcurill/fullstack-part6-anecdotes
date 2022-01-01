import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addVote, sortByVotes } from '../reducers/anecdoteSlice';
import { displayNotification } from '../reducers/notificationSlice';

const getAnecdote = (state, id) =>
  state.anecdotes.find((anecdote) => anecdote.id === id);

const Anecdote = ({ id }) => {
  const anecdote = useSelector((state) => getAnecdote(state, id));
  const searchText = useSelector((state) => state.filterByText);
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(addVote(anecdote));
    dispatch(sortByVotes());
    dispatch(displayNotification('Added vote', 5));
  };

  return (
    <>
      {anecdote.content.includes(searchText) && (
        <div>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Anecdote;
