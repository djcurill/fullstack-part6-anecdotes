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

const updateAnecdote = async (anecdote) => {
  const updatedAnecdote = await axios.put(
    `${baseUrl}/${anecdote.id}`,
    anecdote
  );
  return updatedAnecdote.data;
};

const anecdoteService = { getAll, createNew, updateAnecdote };

export default anecdoteService;
