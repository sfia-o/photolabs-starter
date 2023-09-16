import React from "react";
import {useState} from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

import "./App.scss";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <HomeRoute />
      {open && <PhotoDetailsModal/>}
    </div>
  );
};

export default App;
