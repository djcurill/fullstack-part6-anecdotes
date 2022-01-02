import React from 'react';
import { connect } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteSlice';

const AnecdoteForm = (props) => {
  // const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = '';
    props.createAnecdote(content);
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

const mapDispatchToProps = (dispatch) => {
  return {
    createAnecdote: (content) => dispatch(createAnecdote(content)),
  };
};

export default connect(null, mapDispatchToProps)(AnecdoteForm);
