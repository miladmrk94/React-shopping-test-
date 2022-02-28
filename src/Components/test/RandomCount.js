import React, { useState } from "react";
const RandomCount = () => {
  const [number, setNumber] = useState([]);

  const addcount = () => {
    setNumber([...number, { cunt: Math.floor(Math.random() * 10000) }]);
  };

  return (
    <div>
      <h3>COUNTER</h3>
      <button onClick={addcount}>ENTER</button>
      {console.log(number)}
      <h3>
        093
        {number.map((item) => {
          if (item.cunt > 4000 || item.cunt >= 9000) {
            return `${item.cunt} ${item.cunt - 5476}`;
          }
        })}
      </h3>
    </div>
  );
};

export default RandomCount;
