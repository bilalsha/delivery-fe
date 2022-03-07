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
    alignItems: "center",
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
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  bottomButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export const stylesStartPage = StyleSheet.create({
  doubleButtonComponent: {
    marginTop: hp("4.80%"),
  },
  textContainer: {
    width: wp("86%"),
    marginTop: hp("2.52%"),
    alignItems: "flex-start",
  },
});

export const stylesLocationPage = StyleSheet.create({
  textContainer: {
    width: wp("81%"),
    marginTop: hp("3.96%"),
  },
  container: {
    marginTop: hp("5%"),
  },
});

export const stylesMenuPage = StyleSheet.create({
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
    marginHorizontal: wp("3.64%"),
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

export const stylesDetailsPage = StyleSheet.create({
  innerContainer: {
    flex: 3,
    justifyContent: "space-between",
    marginTop: 10,
  },
  coverImage: {
    borderRadius: 15,
    width: wp("81%"),
    height: hp("24%"),
  },
  itemName: {
    fontFamily: "Poppins600",
    fontSize: wp("5.10%"),
    fontStyle: "normal",
  },
  counterAndTextContainer: {
    flexDirection: "row",
    width: wp("81%"),
    alignItems: "center",
    justifyContent: "space-between",
  },

  optionText: {
    fontFamily: "Poppins600",
    fontSize: wp("3.40%"),
  },
});

export const stylesCartPage = StyleSheet.create({
  topCardContainer1: {
    flex: 1,
    margin: hp("1.20%"),
    flexDirection: "row",
    justifyContent: "space-around",
  },
  card: {
    height: hp("24%"),
  },
  topCardContainer2: {
    flex: 1,
    margin: hp("1.20%"),
    flexDirection: "row",
  },
  topCardPriceContainer: {
    flex: 2,
    marginTop: 10,
    marginBottom: 10,
  },
  emptyContainer: {
    flex: 1,
    marginRight: 10,
    marginBottom: 10,
  },
  topCardCounterContainer1: {
    flex: 1.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  topCardCounterContainer2: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1.5,
    marginTop: 6,
  },
  bottomCard: {
    height: hp("34%"),
    borderTopColor: "#00000014",
    borderTopWidth: 1,
  },

  bottomCardBorderStyle: {
    borderBottomColor: "#BDBDBD",
    borderStyle: "dotted",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
});

export const stylesPaymentPage = StyleSheet.create({
  innerContainer: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    width: wp("85.64%"),
    alignItems: "flex-start",
    marginTop: hp("2.88%"),
  },
  doubleButtonContiner: {
    marginTop: hp("6%"),
    justifyContent: "center",
    alignItems: "center",
  },
});

export const stylesConfirmationPage = StyleSheet.create({
  container1: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("2.88%"),
  },
  container2: {
    alignItems: "center",
  },
  container3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container4: {
    height: hp("30%"),
    borderTopColor: "#00000014",
    borderTopWidth: 1,
  },
  cardTextContainer: {
    flex: 3,
    paddingRight: wp("2.43%"),
  },
  bottomCardText: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  textRow1: {
    justifyContent: "flex-start",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  card: {
    height: hp("14.18%"),
    flexDirection: "row",
  },
});

export const stylesCard = StyleSheet.create({
  card: {
    marginHorizontal: wp("4.13%"),
    marginVertical: hp("2.04%"),
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#00000012",
  },
});

export const stylesCartDetials = StyleSheet.create({
  textContainer: {
    flex: 2,
    justifyContent: "center",
  },
});

export const stylesCartTextRow = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
});

export const stylesCircle = StyleSheet.create({
  circle: {
    backgroundColor: "#EE4137",
    borderRadius: 50,
    height: wp("12.63%"),
    width: wp("12.63%"),
    alignItems: "center",
    justifyContent: "center",
  },
});

export const stylesConter = StyleSheet.create({
  counterContainer: {
    width: wp("25.90%"),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  minusContainer: {
    backgroundColor: "#F2F2F2",
    width: wp("5.35%"),
    height: wp("5.35%"),
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  plusContainer: {
    backgroundColor: "#EE4137",
    width: wp("5.35%"),
    height: wp("5.35%"),
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    fontFamily: "Poppins400",
    fontSize: wp("4.37%"),
    color: "#828282",
  },
  plusText: {
    fontFamily: "Poppins400",
    color: "#FFFFFF",
  },
  minusText: {
    fontFamily: "Poppins400",
    color: "#828282",
  },
});

export const stylesCounterDetailsPage = StyleSheet.create({
  counterContainer: {
    width: wp("24%"),
    height: hp("5.10%"),
    backgroundColor: "#F2F2F2",
    borderRadius: wp("2.91%"),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  counterText: {
    fontFamily: "Poppins400",
    fontSize: wp("4.37%"),
    textAlign: "center",
    color: "#828282",
  },
});

export const stylesCustomLargeButton = StyleSheet.create({
  buttonContainer: {
    width: wp("81%"),
    height: hp("6.10%"),
    backgroundColor: "#EE4137",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: wp("4%"),
  },
});

export const stylesCustomSmallButton = StyleSheet.create({
  Button: {
    width: wp("24%"),
    height: wp("8%"),
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: wp("2.70%"),
    fontFamily: "Poppins400",
    textAlign: "center",
    fontStyle: "normal",
  },
});

export const stylesLocationPageComponent = StyleSheet.create({
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("4.20%"),
  },
  textInputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("3.0%"),
  },
  textInput: {
    width: wp("30%"),
    height: hp("6%"),
    backgroundColor: "#F2F2F2",
  },
});

export const stylesPaymentWithButton = StyleSheet.create({
  container: {
    width: wp("81%"),
    height: hp("6.10%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  button: {
    width: wp("52%"),
    height: hp("6.10%"),
    alignItems: "center",
    backgroundColor: "#EE4137",
    justifyContent: "center",
    borderRadius: 12,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: wp("3.64%"),
  },
  priceText: {
    fontFamily: "Poppins500",
    fontSize: wp("5.83%"),
    color: "#333333",
  },
});

export const stylesTextRow = StyleSheet.create({
  bottomCardTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: hp("2.40%"),
  },
});
