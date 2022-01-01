import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterAnecdote } from '../reducers/filterSlice';
import './Filter.css';

const Filter = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    console.log('here');
    let text = e.target.value;
    setSearch(text);
    dispatch(filterAnecdote(text));
  };

  return (
    <div className="filter">
      <label htmlFor="filter-anecdotes">Filter Anecdotes</label>
      <input
        id="filter-anecdotes"
        type="text"
        value={search}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Filter;
