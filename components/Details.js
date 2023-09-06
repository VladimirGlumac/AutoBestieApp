import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

const Details = ({ route, navigation }) => {
  const {
    name,
    price,
    image,
    classe,
    year,
    condition,
    isTopOfTheWeek,
    description,
  } = route.params;

  return (
    <View style={styles.detailscontainer}>
      <View style={styles.detailpage}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.detailsButton}
        >
          <FontAwesome name="angle-left" style={styles.arrow} />
        </TouchableOpacity>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            backgroundColor: "#ff5235",
            opacity: isTopOfTheWeek ? 1 : 0.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="star" style={{ fontSize: 15, color: "white" }} />
        </View>
      </View>
      <ScrollView>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.pricediv}>
          <Text style={styles.price}>{price}€</Text>
        </View>
        <View style={styles.infodiv}>
          <View style={{ paddingHorizontal: 20 }}>
            <View style={{ paddingVertical: 20 }}>
              <Text style={styles.classtext}>Class</Text>
              <Text style={styles.classdata}>{classe}</Text>
            </View>
            <View style={{ paddingVertical: 20 }}>
              <Text style={styles.yeartext}>Year</Text>
              <Text style={styles.yeardata}>{year}</Text>
            </View>
            <View style={{ paddingVertical: 20 }}>
              <Text style={styles.conditiontext}>Condition</Text>
              <Text style={styles.conditiondata}>{condition}</Text>
            </View>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.imagediv}>
              <Image source={image} style={styles.carimage} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.descriptiondiv}>
          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              Description:
            </Text>
          </View>
          <Text style={{}}>{description}</Text>
        </View>
      </ScrollView>
      <View style={styles.orderdiv}>
        <TouchableOpacity
          onPress={() =>
            navigation.push("Payment", {
              name: name,
              price: price,
              image: image,
            })
          }
          style={styles.orderbutton}
        >
          <Text style={styles.orderbuttontext}>Place Order</Text>
          <Entypo name="chevron-right" style={styles.orderbuttonarrow} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailscontainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    position: "relative",
    paddingTop: 10,
  },
  detailpage: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailsButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#686868",
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    fontSize: 16,
    color: "black",
  },
  name: {
    fontSize: 38,
    color: "black",
    fontWeight: "800",
    paddingHorizontal: 20,
    maxWidth: 310,
  },
  price: {
    fontSize: 38,
    color: "#ff5235",
    fontWeight: "900",
  },
  pricediv: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  infodiv: {
    flexDirection: "row",
    maxHeight: 300,
    width: "100%",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  classtext: {
    fontSize: 12,
    color: "black",
    opacity: 0.5,
  },
  classdata: {
    fontSize: 18,
    color: "black",
    fontWeight: "600",
  },
  yeartext: {
    fontSize: 12,
    color: "black",
    opacity: 0.5,
  },
  yeardata: {
    fontSize: 18,
    color: "black",
    fontWeight: "600",
  },
  conditiontext: {
    fontSize: 12,
    color: "black",
    opacity: 0.5,
  },
  conditiondata: {
    fontSize: 18,
    color: "black",
    fontWeight: "600",
  },
  imagediv: {
    width: 380,
    height: 380,
  },
  carimage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    zIndex: 3,
  },
  descriptiondiv: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: 380,
    paddingLeft: 15,
    paddingRight: 15,
  },
  orderdiv: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  orderbutton: {
    width: "90%",
    height: 80,
    backgroundColor: "#ff5235",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  orderbuttontext: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    letterSpacing: 1,
    marginRight: 10,
  },
  orderbuttonarrow: { fontSize: 16, color: "black" },
});

export default Details;
