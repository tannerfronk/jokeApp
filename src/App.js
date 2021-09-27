// import logo from './logo.svg';
import './App.css'
import {useState} from 'react';
import {Jokes} from './data/jokes'
import JokeCard from './components/JokeCard'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';

const App = () => {
    const [currentJokes, setCurrentJokes] = useState([Jokes[0], Jokes[1], Jokes[2]])
    const [amountOfJokes, setAmountOfJokes] = useState(3)

    // load one joke per click
    const handleLoadMore = () => {
        let nextJoke = amountOfJokes + 1
        setCurrentJokes([...currentJokes, Jokes[nextJoke]])
        setAmountOfJokes(nextJoke)
    }

  return (
    <div className="mainContent">
        <JokeCard jokeList={currentJokes}/>
        <Button
            onClick={handleLoadMore}
            sx={{
                width: '100%',
                mx: '1.5rem',
                my: '1rem',
                background: '#fff',
                borderRadius: '5px',
                boxShadow: '5px 5px 5px gray'
            }}
        >
            <Typography>Load New Joke</Typography>
        </Button>
    </div>
  );
}

export default App;
