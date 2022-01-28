import React, { useContext, useEffect } from 'react';
import noteContext from '../context/notes/noteContext';

const About = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
    console.log("updated");
  }, []);
  
  return(
      <>
        <h1>This is about!{a.state.name} which is in {a.state.class}</h1>
        {console.log("rendered")}
      </>
  );
};

export default About;