// ---Dependencys
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
// ---Redux
import { useSelector, useDispatch } from 'react-redux';
import { changeFlag } from 'Actions/showFlag';
import { ReduxState } from 'Reducers';
// ---Others
import frame from 'Images/frame.png';

function ImageExample() {
  // Redux States
  const flag = useSelector((reducers: ReduxState) => reducers.showFlagReducer);
  // Redux Actions
  const dispatchR = useDispatch();
  const changeF = (currentFlag: boolean) => dispatchR(changeFlag(currentFlag));

  function handleclick() {
    changeF(flag.showImg);
  }

  return (
    <>
      <Link to="/">
        <h3>To home --- "react-router"</h3>
      </Link>
      <a href="/">
        <h3>To home --- "href"</h3>
      </a>
      <Button
          onClick={handleclick}
        >
        Mostrar imagen
      </Button>
      {flag.showImg && <img src={frame} alt="frameo" />}
    </>
  );
}

export default ImageExample;
