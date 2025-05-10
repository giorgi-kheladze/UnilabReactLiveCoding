import React, { useEffect, useState } from "react";

const GamePage = () => {
  const [dogs, setDog] = useState([]);
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const DogAPI = "https://dog.ceo/api/breeds/image/random";
  const CatAPI = "https://api.thecatapi.com/v1/images/search?limit=10";
  useEffect(() => {
    const fetchDod = async () => {
      setLoading(true);
      try {
        const responce = await fetch(DogAPI);
        if (!responce.ok) {
          throw new error(responce.status);
        }
        const dog = await responce.json();
        setDog(dog);
        console.log(dog);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    const fetchCats = async () => {
      setLoading(true);
      try {
        const responce = await fetch(CatAPI);
        if (!responce.ok) {
          throw new error(responce.status);
        }
        const cats = await responce.json();
        const shuffle = cats.sort(() => 0.5 - Math.random());
        const shuffledCats = shuffle.slice(0, 4);
        setCats(shuffledCats);
        console.log(shuffledCats);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchDod();
    fetchCats();
  }, []);

  if (loading) {
    <p>Loading...</p>;
  }

  return (
    <div>
      <ul className="flex w-full justify-between">
        {cats.map((cat) => (
          <li key={cat.id}>
            <img
              className="w-[190px] h-[190px] cursor-pointer"
              src={cat.url}
              alt="cat"
            />
          </li>
        ))}
      </ul>
      <p className="text-[#EFF9F3]">Score: </p>
      <p className="text-[#EFF9F3]">Time: </p>
    </div>
  );
};

export default GamePage;
