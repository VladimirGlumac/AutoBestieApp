import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import AwesomeAlert from "react-native-awesome-alerts";
import { useState } from "react";

function Payment({ route, navigation }) {
  const [showAlert, setShowAlert] = useState(false);

  const { name, price, image } = route.params;
  return (
    <View style={styles.paymentcontainer}>
      <ScrollView style={{ display: "flex", flex: 1 }}>
        <View style={styles.paymentheader}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.paymentgobackbutton}
          >
            <FontAwesome name="angle-left" style={styles.arrow} />
          </TouchableOpacity>
        </View>

        <View style={styles.carinformationContainer}>
          <View style={styles.ordertext}>
            <Text style={styles.textone}>Order Summary</Text>
          </View>

          <View style={styles.carinfo}>
            <Text style={{ color: "white", paddingTop: 10 }}>
              Car Selected: {name}
            </Text>
            <Text style={{ color: "white", paddingTop: 10, fontSize: 20 }}>
              Price:{price}€{" "}
            </Text>
            <Image source={image} style={{ width: 400, height: 200 }} />
          </View>
        </View>

        <View style={styles.buyerinformationContainer}>
          <View
            style={{
              flex: 2,
              backgroundColor: "#686868",
              width: "100%",
              height: "100%",
              borderBottomWidth: 1,
              borderBottomColor: "#ff5235",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Enter your payment details
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 2,
              width: 350,
              height: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 15,
            }}
          >
            <TextInput
              placeholder="First name"
              placeholderTextColor={"white"}
              style={{
                borderWidth: 1,
                borderColor: "#ff5235",
                height: 40,
                width: 150,
                backgroundColor: "#686868",
                paddingLeft: 5,
              }}
            />
            <TextInput
              placeholder="Last name"
              placeholderTextColor={"white"}
              style={{
                borderWidth: 1,
                borderColor: "#ff5235",
                height: 40,
                width: 150,
                backgroundColor: "#686868",
                paddingLeft: 5,
                marginRight: 10,
              }}
            />
          </View>
          <View
            style={{
              flex: 2,
              width: 350,
              height: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 15,
            }}
          >
            <TextInput
              placeholder="Card number"
              placeholderTextColor={"white"}
              style={{
                borderWidth: 1,
                borderColor: "#ff5235",
                height: 40,
                width: 240,
                backgroundColor: "#686868",
                paddingLeft: 5,
              }}
            />
            <TextInput
              placeholder="CW"
              placeholderTextColor={"white"}
              style={{
                borderWidth: 1,
                borderColor: "#ff5235",
                height: 40,
                width: 50,
                backgroundColor: "#686868",
                paddingLeft: 5,
                marginRight: 10,
              }}
            />
          </View>
          <View
            style={{
              flex: 2,
              width: 350,
              height: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 15,
            }}
          >
            <Image
              source={require("../src/images/visa.png")}
              style={{ width: 200, height: 40 }}
            />
            <TextInput
              placeholder="MM/YY"
              placeholderTextColor={"white"}
              style={{
                borderWidth: 1,
                borderColor: "#ff5235",
                height: 40,
                width: 120,
                backgroundColor: "#686868",
                paddingLeft: 5,
                marginRight: 10,
              }}
            />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 200,
          }}
        >
          <TouchableOpacity
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ff5235",
              width: 180,
              height: 50,
              borderRadius: 10,
              elevation: 20,
            }}
            onPress={() => {
              setShowAlert(!showAlert);
            }}
          >
            <Text style={{ color: "white" }}>Confirm</Text>
          </TouchableOpacity>
          <AwesomeAlert
            style={{ backgroundColor: "red" }}
            show={showAlert}
            title="Thank you for purchase!"
            message="We will contact you for further information"
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default Payment;

const styles = StyleSheet.create({
  paymentcontainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paymentheader: {
    backgroundColor: "white",
    width: "100%",
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
  },
  carinformationContainer: {
    flex: 2,
    backgroundColor: "#686868",
    width: "100%",
    height: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ff5235",
  },
  buyerinformationContainer: {
    flex: 2,
    backgroundColor: "white",
    width: "100%",
  },
  paymentgobackbutton: {
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
  ordertext: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#ff5235",
  },
  textone: {
    paddingLeft: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  carinfo: {
    paddingLeft: 5,
  },
  nameinputs: {
    borderWidth: 1,
    borderColor: "#ff5235",
    height: 30,
    marginTop: 20,
    width: 155,
    paddingLeft: 5,
    marginRight: 5,
  },
  cardinputname: {
    borderWidth: 1,
    borderColor: "#ff5235",
    height: 30,
    marginTop: 20,
    width: 180,
    paddingLeft: 5,
    marginRight: 5,
  },
  cwinput: {
    borderWidth: 1,
    borderColor: "#ff5235",
    height: 30,
    marginTop: 20,
    width: 50,
    paddingLeft: 5,
  },
});
