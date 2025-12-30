import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [jokes, setJokes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [loading, setLoading] = useState(false);

  const getJoke = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://official-joke-api.appspot.com/random_joke"
      );

      const data = res.data;
      const newJoke = `${data.setup} ${data.punchline}`;

      setJokes(prev => [...prev, newJoke]);
      setCurrentIndex(prev => prev + 1);
    } catch (error) {
      console.error("Sorry, something went wrong", error);
    } finally {
      setLoading(false);
    }
  };

  const nextJoke = () => {
    setCurrentIndex(prev =>
      prev < jokes.length - 1 ? prev + 1 : prev
    );
  };

  const prevJoke = () => {
    setCurrentIndex(prev =>
      prev > 0 ? prev - 1 : prev
    );
  };

  return (
    <div className="px-10">
      <p>
        {loading
          ? "Loading..."
          : currentIndex >= 0 && jokes[currentIndex]}
      </p>

      <button onClick={getJoke}>Get Joke</button>

      <button onClick={prevJoke} disabled={currentIndex <= 0}>
        Prev
      </button>

      <button
        onClick={nextJoke}
        disabled={currentIndex >= jokes.length - 1}
      >
        Next
      </button>
    </div>
  );
};

export default Home;
