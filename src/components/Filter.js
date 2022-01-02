import { React, useState } from 'react';
import { connect } from 'react-redux';
import { filterAnecdote } from '../reducers/filterSlice';
import './Filter.css';

const Filter = (props) => {
  //const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    let text = e.target.value;
    setSearch(text);
    props.filterAnecdote(text);
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

const mapDispatchToProps = (dispatch) => {
  return {
    filterAnecdote: (text) => dispatch(filterAnecdote(text)),
  };
};

export default connect(null, mapDispatchToProps)(Filter);
