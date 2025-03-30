import { useState } from 'react';
import { places } from './data.js';
import { getImageUrl } from './utils.js';
import { imageSizeContext, placeContext } from './Context.js';
import { useContext } from 'react';


export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

    return (
      <imageSizeContext.Provider value={imageSize}>
        <label>
          <input
            type="checkbox"
            checked={isLarge}
            onChange={e => {
              setIsLarge(e.target.checked);
            }}
          />
          Use large images
        </label>
        <hr />
        <List />
      </imageSizeContext.Provider>
    )
}


function List() {
  const listItems = places.map(place =>
    <placeContext.Provider value={place}>
      <li key={place.id}>
        <Place />
      </li>
    </placeContext.Provider>
  );
  return <ul>{listItems}</ul>;
}

function Place() {
  const place = useContext(placeContext);
  return (
    <>
      <PlaceImage />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage() {
  const imageSize = useContext(imageSizeContext);
  const place = useContext(placeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
