import { StyleSheet, Text, View, Image } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import CustomLargeButton from "../components/CustomLargeButton";
const ConfirmationPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container1}>
        <View style={{ width: 335 }}>
          <Text style={globalStyles.textHeading}>
            Thank you for your order!
          </Text>
        </View>
        <View style={{ width: 335 }}>
          <Text
            style={{ ...globalStyles.textHeadingSecondary, color: "#828282" }}
          >
            We will have it ready for you soon! Check your email for your
            receipt.
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            ...styles.topCard,
            flexDirection: "row",
          }}
        >
          <View style={styles.topCardImageContainer}>
            <Image
              source={require("../assets/images/cart.png")}
              style={styles.imageStyle}
            />
          </View>
          <View style={{ flex: 3, paddingRight: 10 }}>
            <View
              style={{
                justifyContent: "flex-start",
                flex: 1,
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <Text style={globalStyles.textProductCategory}>Entrees</Text>
            </View>
            <View style={styles.rowText}>
              <Text style={globalStyles.textProductName}>
                Extra Beef Burger
              </Text>
              <Text style={globalStyles.textProductPrice}>$ 9.90</Text>
            </View>
            <View style={styles.rowText}>
              <Text style={globalStyles.textProductName}>Cheese</Text>
              <Text style={globalStyles.textProductPrice}>$ 3.00</Text>
            </View>
            <View style={styles.rowText}>
              <Text style={globalStyles.textProductName}>Well Done</Text>
              <Text style={globalStyles.textProductPrice}>$ 0.00</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}
      >
        <Text style={globalStyles.textHeadingSecondary}>Amount paid</Text>
        <Text style={globalStyles.textFinalAmount}>$ 15.90</Text>
      </View>
      <View style={{ ...styles.bottomCard }}>
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={globalStyles.textProductPrice}>Your order number</Text>
          <Text style={globalStyles.textOrderNumber}>1553</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomLargeButton title="Done" />
        </View>
      </View>
    </View>
  );
};

export default ConfirmationPage;

const styles = StyleSheet.create({
  topCard: {
    // margin: 15,
    width: 335,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#00000012",
    height: 118,
  },
  topCardImageContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 10,
  },
  imageStyle: {
    height: 65,
    width: 60,
    borderRadius: 12,
  },
  bottomCard: {
    height: 250,
    borderTopColor: "#00000014",
    borderTopWidth: 1,
  },
  buttonContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rowText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
});
