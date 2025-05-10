import React, { useState } from "react";

const Test = () => {
  const DogAPI = "https://dog.ceo/api/breeds/image/random";
  const CatAPI = "https://api.thecatapi.com/v1/images/search?limit=10";
  const urls = [DogAPI, CatAPI];
  const [object, setObjects] = useState([]);

  async function fetchData(api) {
    try {
      const responce = await fetch(api);
      if (!responce.ok) {
        throw new error(responce.status);
      }
      const object = await responce.json();
      setObjects(object);
      console.log(object);
    } catch (e) {
      console.error(e);
    }
  }

  Promise.all(urls.map((url) => fetchData(url)));

  return (
    <div>
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
    </div>
  );
};

export default Test;
