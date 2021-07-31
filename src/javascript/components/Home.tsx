// ---Dependencys
import React from 'react';
import { Link } from 'react-router-dom';
// ---Others
import data from 'Others/data.json'

interface Props {
  handleclick: () => any;
  showList: boolean;
}

interface Item {
  name: string;
  id: string;
}

function Home(props: Props) {
  const { handleclick, showList } = props;
  const { loaders } = data;

  console.log('metod: ', handleclick);
  return (
    <>
      <Link to="/img">
        <h3>To img --- "react-router"</h3>
      </Link>
      <a href="/img">
        <h3>To img --- "href"</h3>
      </a>
      <button type="button" onClick={handleclick}>
        Show Loaders
      </button>
      {showList && loaders.map((item: Item, index: number) => <p key={index}>{item.name}</p>)}
    </>
  );
}

export default Home;
