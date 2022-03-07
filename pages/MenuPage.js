import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useContext } from "react";
import { Context } from "../store/App-Context";
import { MenuIconsData } from "../data/MenuIconsData";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const getMenuIcons = gql`
  {
    menuIcons {
      id
      title
      image
      isSelected
    }
  }
`;
const MenuPage = ({ navigation }) => {
  const { loading, error, data } = useQuery(getMenuIcons);
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
          source={require("../assets/images/menuPage/breakfast.png")}
          style={{ tintColor: "grey", ...styles.iconImage }}
        />
        <Text style={styles.iconTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View>
        <Text> Loading...</Text>
      </View>
    );
  }

  if (error) {
    console.log(error);
    return (
      <View>
        <Text>Error...</Text>
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.iconsContainer}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={data.menuIcons}
          renderItem={renderIcon}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

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
    width: wp("41%"),
    height: hp("21%"),
    borderRadius: 12,
  },
  listTitle: {
    fontFamily: "Poppins600",
    fontSize: 12,
    textAlign: "center",
  },
});
