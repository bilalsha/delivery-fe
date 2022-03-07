import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const globalStyles = StyleSheet.create({
  textHeading: {
    fontFamily: "Poppins400",
    fontSize: wp("5.12%"),
    textAlign: "center",
    fontStyle: "normal",
  },
  textHeadingSecondary: {
    fontFamily: "Poppins400",
    fontSize: wp("3.64%"),
    textAlign: "center",
    fontStyle: "normal",
  },
  textButton: {
    fontFamily: "Poppins500",
    fontSize: wp("3.64%"),
    textAlign: "center",
    color: "#FFFFFF",
    fontStyle: "normal",
  },
  ButtonContainer: {
    width: wp("35%"),
    height: wp("8%"),
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonContainer: {
    fontSize: wp("2.67%"),
    fontFamily: "Poppins400",
    textAlign: "center",
    fontStyle: "normal",
  },
  textProductCategory: {
    fontFamily: "Poppins400",
    color: "#EE4137",
    fontSize: wp("2.91%"),
    fontStyle: "normal",
  },
  textProductName: {
    fontFamily: "Poppins500",
    fontSize: wp("2.91%"),
    fontStyle: "normal",
  },
  textProductPrice: {
    fontFamily: "Poppins400",
    fontSize: wp("4.37%"),
    fontStyle: "normal",
  },
  innerContainer: {
    // flex: 2,
    justifyContent: "space-between",
  },
  locationIcon: {
    width: wp("81%"),
    alignItems: "center",
    marginTop: hp("16.81%"),
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    width: wp("81%"),
    height: wp("12.39%"),
    borderRadius: 15,
  },
  textOrderNumber: {
    fontFamily: "Poppins400",
    color: "#333333",
    fontSize: wp("5.83%"),
    fontStyle: "normal",
  },
  textFinalAmount: {
    fontFamily: "Poppins600",
    fontSize: wp("3.64%"),
    textAlign: "center",
    color: "#EE4137",
    fontStyle: "normal",
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: wp("2.43%"),
  },
  imageStyle: {
    height: wp("15.78%"),
    width: wp("14.56%"),
    borderRadius: 12,
  },
});
