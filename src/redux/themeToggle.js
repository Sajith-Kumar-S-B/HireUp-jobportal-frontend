import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const toggleDarkMode = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };


  return (
    <div  onClick={toggleDarkMode}>
      {darkMode ? <i style={{color:'white'}} className="fa-solid fa-sun"></i> : <i class="fa-regular fa-moon"></i>}
    </div>
  );
};

export default ThemeToggle;