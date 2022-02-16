import { createContext, useState, useReducer } from "react";
import {
  BreakFastData,
  AppetizersData,
  EntreesData,
  DrinksData,
  SidesData,
} from "../data/MenuListData";
export const Context = createContext({
  menuData: "",
  changeMenuData: (title) => {},
});

const selectMenuReducer = (state, action) => {
  if (action.type === "BREAK_FAST") {
    return {
      data: action.data,
    };
  }
  if (action.type === "APPETIZERS") {
    return {
      data: action.data,
    };
  }
  if (action.type === "ENTRESS") {
    return {
      data: action.data,
    };
  }
  if (action.type === "SIDES") {
    return {
      data: action.data,
    };
  }
  if (action.type === "DRINKS") {
    return {
      data: action.data,
    };
  }
};

const AppContext = (props) => {
  const [seletMenu, dispatchSelectMenu] = useReducer(selectMenuReducer, {
    data: BreakFastData,
  });
  // const [menuData, setMenuData] = useState(BreakFastData);
  // const [activeIconColor, setActiceIconColor] = useState(true);
  const changeMenuData = (title) => {
    if (title === "Break Fast") {
      // setMenuData(BreakFastData);
      dispatchSelectMenu({
        type: "BREAK_FAST",
        data: BreakFastData,
      });
    } else if (title === "Appetizers") {
      // setMenuData(AppetizersData);
      dispatchSelectMenu({
        type: "APPETIZERS",
        data: AppetizersData,
      });
    } else if (title === "Entrees") {
      // setMenuData(EntreesData);
      dispatchSelectMenu({
        type: "ENTRESS",
        data: EntreesData,
      });
    } else if (title === "Sides") {
      // setMenuData(SidesData);
      dispatchSelectMenu({
        type: "SIDES",
        data: SidesData,
      });
    } else if (title === "Drinks") {
      // setMenuData(DrinksData);
      dispatchSelectMenu({
        type: "DRINKS",
        data: DrinksData,
      });
    }
  };
  return (
    <Context.Provider
      value={{
        menuData: seletMenu.data,
        changeMenuData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default AppContext;
