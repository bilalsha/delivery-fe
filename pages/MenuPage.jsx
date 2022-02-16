import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import { useContext } from "react";
import { Context } from "../store/App-Context";
import { MenuIconsData } from "../data/MenuIconsData";
// import TabNavigator from "../routes/TabNavigator";
const MenuPage = ({ navigation }) => {
  const { menuData, changeMenuData } = useContext(Context);
  const loadDetails = (item) => {
    navigation.navigate("Details", item);
  };
  const renderIcon = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => changeMenuData(item.title)}
      >
        <Image
          source={item.image}
          style={{ tintColor: "grey", ...styles.iconImage }}
        />
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
      {/* <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={menuData}
          renderItem={renderListData}
        />
      </View> */}
      <ScrollView>
        <View style={styles.listContainer}>
          {menuData.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.listWrapper}
                onPress={() => loadDetails(item)}
              >
                <Image source={item.image} style={styles.listImage} />
                <Text style={styles.listTitle}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
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
    marginRight: 15,
    marginLeft: 15,
  },
  iconImage: {
    // tintColor: "red",
    width: 30,
  },
  iconTitle: {
    marginTop: 7,
    fontFamily: "Poppins600",
    fontSize: 10,
    textAlign: "center",
  },

  // listContainer: {
  //   flex: 1,
  //   alignItems: "center",
  // },
  listContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
  },
  listWrapper: {
    // width: 194,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
  },
  listImage: {
    width: 167,
    height: 177,
    borderRadius: 12,
  },
  listTitle: {
    fontFamily: "Poppins600",
    fontSize: 12,
    textAlign: "center",
  },
});
