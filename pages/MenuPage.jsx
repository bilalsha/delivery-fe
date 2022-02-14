import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

import { MenuIconsData } from "../data/MenuIconsData";
import { useContext } from "react";
import { Context } from "../store/App-Context";

// import TabNavigator from "../routes/TabNavigator";
const MenuPage = ({ navigation }) => {
  const { menuData } = useContext(Context);
  const loadDetails = (item) => {
    navigation.navigate("Details", item);
  };
  const renderIcon = ({ item }) => {
    return (
      <TouchableOpacity style={styles.iconWrapper}>
        <Image source={item.image} style={styles.iconImage} />
        <Text style={styles.iconTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const renderListData = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.listWrapper}
        onPress={() => loadDetails(item)}
      >
        <Image source={item.image} style={styles.listImage} />
        <Text style={styles.listTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.iconsContainer}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={MenuIconsData}
          renderItem={renderIcon}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/*Menu Icons*/}

      {/*Menu List*/}
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={menuData}
          renderItem={renderListData}
        />
      </View>
    </View>
  );
};

export default MenuPage;

const styles = StyleSheet.create({
  iconsContainer: {
    marginTop: 12,
    alignItems: "center",
  },
  iconWrapper: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 33,
  },
  iconImage: {
    width: 30,
  },
  iconTitle: {
    marginTop: 7,
    fontFamily: "Poppins600",
    fontSize: 10,
    textAlign: "center",
  },

  listContainer: {
    flex: 1,
    alignItems: "center",
  },
  listWrapper: {
    // width: 194,
  },
  listImage: {
    width: 194,
    height: 177,
    borderRadius: 12,
  },
  listTitle: {
    fontFamily: "Poppins600",
    fontSize: 12,
    textAlign: "center",
  },
});
