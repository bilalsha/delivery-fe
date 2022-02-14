import { createContext, useState, useReducer } from "react";
import { MenuListData } from "../data/MenuListData";

export const Context = createContext({
  menuData: "",
  changeMenuData: (title) => {},
});

const AppContext = (props) => {
  const [menuData, setMenuData] = useState(MenuListData);
  const changeMenuData = () => {};
  return (
    <Context.Provider
      value={{
        menuData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default AppContext;
