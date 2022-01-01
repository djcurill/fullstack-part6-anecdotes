import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const anecdotes = await axios.get(baseUrl);
  return anecdotes.data;
};

const createNew = async (content) => {
  const newAnecdote = { content, votes: 0 };
  const savedAnecdote = await axios.post(baseUrl, newAnecdote);
  return savedAnecdote.data;
};

const anecdoteService = { getAll, createNew };

export default anecdoteService;
