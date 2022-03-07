import { Text, View } from "react-native";
import { globalStyles, stylesTextRow } from "../styles/globalStyles";

const TextRow = (props) => {
  return (
    <View
      style={{ ...stylesTextRow.bottomCardTextContainer, ...props.customStyle }}
    >
      <Text style={globalStyles.textHeadingSecondary}>{props.title}</Text>
      <Text style={globalStyles.textHeadingSecondary}>{props.price}</Text>
    </View>
  );
};

export default TextRow;
