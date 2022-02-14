import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Fragment } from "react";
import { MenuIconsData } from "../data/MenuIconsData";
import { MenuListData } from "../data/MenuListData";
// import TabNavigator from "../routes/TabNavigator";
const MenuPage = ({ navigation }) => {
  const loadDetails = () => {
    navigation.navigate("Details");
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
      <TouchableOpacity style={styles.listWrapper} onPress={loadDetails}>
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
          data={MenuListData}
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

  listContainer: {},
  listWrapper: {},
  listImage: {},
  listTitle: {},
});
