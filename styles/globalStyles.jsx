import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  textHeading: {
    fontFamily: "Poppins400",
    fontWeight: "400",
    fontSize: 21,
    textAlign: "center",
  },
  textHeadingSecondary: {
    fontFamily: "Poppins400",
    fontSize: 15,
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "400",
  },
  textButton: {
    fontFamily: "Poppins500",
    fontSize: 15,
    textAlign: "center",
    color: "#FFFFFF",
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
});
