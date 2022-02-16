import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  textHeading: {
    fontFamily: "Poppins400",
    fontSize: 21,
    textAlign: "center",
    fontStyle: "normal",
  },
  textHeadingSecondary: {
    fontFamily: "Poppins400",
    fontSize: 15,
    textAlign: "center",
    fontStyle: "normal",
  },
  textButton: {
    fontFamily: "Poppins500",
    fontSize: 15,
    textAlign: "center",
    color: "#FFFFFF",
    fontStyle: "normal",
  },
  ButtonContainer: {
    width: 153,
    height: 33,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonContainer: {
    fontSize: 11,
    fontFamily: "Poppins400",
    textAlign: "center",
    fontStyle: "normal",
  },
  textProductCategory: {
    fontFamily: "Poppins400",
    color: "#EE4137",
    fontSize: 12,
    fontStyle: "normal",
  },
  textProductName: {
    fontFamily: "Poppins500",
    fontSize: 12,
    fontStyle: "normal",
  },
  textProductPrice: {
    fontFamily: "Poppins400",
    fontSize: 18,
    fontStyle: "normal",
  },
  innerContainer: {
    flex: 2,
    justifyContent: "space-between",
  },
  locationIcon: {
    width: 335,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    width: 335,
    height: 50,
    borderRadius: 15,
  },
  textOrderNumber: {
    fontFamily: "Poppins400",
    color: "#333333",
    fontSize: 24,
    fontStyle: "normal",
  },
  textFinalAmount: {
    fontFamily: "Poppins600",
    fontSize: 15,
    textAlign: "center",
    color: "#EE4137",
    fontStyle: "normal",
  },
});
