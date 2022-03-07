import { StyleSheet, Image, View } from "react-native";

const ImageComponent = (props) => {
  return (
    <View style={props.imageContainer}>
      <Image source={props.image} style={props.imageStyle} />
    </View>
  );
};

export default ImageComponent;
