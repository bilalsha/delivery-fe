import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useContext } from "react";
import { Context } from "../store/App-Context";
import { stylesMenuPage } from "../styles/globalStyles";
import { MenuIconsData } from "../data/MenuIconsData";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

// TODO: Grapql Queries to be moved in one graphQL file
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
        style={stylesMenuPage.iconWrapper}
        onPress={() => changeMenuData(item.title)}
      >
        <Image
          source={require("../assets/images/menuPage/breakfast.png")}
          style={{ tintColor: "grey", ...stylesMenuPage.iconImage }}
        />
        <Text style={stylesMenuPage.iconTitle}>{item.title}</Text>
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
      <View style={stylesMenuPage.iconsContainer}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={data.menuIcons}
          renderItem={renderIcon}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <ScrollView>
        <View style={stylesMenuPage.listContainer}>
          {menuData.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={stylesMenuPage.listWrapper}
                onPress={() => loadDetails(item)}
              >
                <Image source={item.image} style={stylesMenuPage.listImage} />
                <Text style={stylesMenuPage.listTitle}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
export default MenuPage;
