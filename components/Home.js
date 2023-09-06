import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  Keyboard,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Categories } from "../src/items";

function HomeScreen({ navigation }) {
  const [currentSelected, setCurrentSelected] = useState([0]);
  function renderCategories({ item, index }) {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setCurrentSelected(index)}
      >
        <View
          style={{
            width: 120,
            height: 160,
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: currentSelected == index ? "#ff5235" : "white",
            borderRadius: 20,
            margin: 10,
            elevation: 5,
          }}
        >
          <View style={{ width: 100, height: 100 }}>
            <Image
              source={item.image}
              style={{ width: "100%", height: "100%", resizeMode: "center" }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              color: currentSelected == index ? "white" : "black",
              fontWeight: "600",
            }}
          >
            {item.name}
          </Text>
          <View
            style={{
              width: 120,
              height: 30,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              marginBottom: -5,
              backgroundColor: currentSelected == index ? "white" : "#ff5235",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome5
              name="angle-right"
              style={{
                fontSize: 12,
                color: currentSelected == index ? "black" : "white",
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  const renderItems = (data, index) => {
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.9}
        style={{
          width: "100%",
          height: 180,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() =>
          navigation.push("details", {
            name: data.name,
            price: data.price,
            image: data.image,
            classe: data.classe,
            year: data.year,
            condition: data.condition,
            description: data.description,
            isTopOfTheWeek: data.isTopOfTheWeek,
            navigation: navigation,
          })
        }
      >
        <View
          style={{
            width: "90%",
            height: 160,
            backgroundColor: "white",
            borderRadius: 50,
            elevation: 4,
            position: "relative",
            padding: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ marginBottom: 50 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                display: data.isTopOfTheWeek ? "flex" : " none",
              }}
            >
              <FontAwesome5
                name="crown"
                style={{
                  fontSize: 10,
                  color: "#ff5235",
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: "black",
                  opacity: 0.8,
                  marginLeft: 5,
                }}
              >
                Best Deals
              </Text>
            </View>
            <Text
              style={{
                fontSize: 22,
                color: "black",
                fontWeight: "bold",
                paddingTop: 10,
              }}
            >
              {data.name}
            </Text>
            <Text style={{ fontSize: 12, color: "black", opacity: 0.5 }}>
              {data.year}
            </Text>
          </View>
          <View style={{ width: 150, height: 150, marginRight: -45 }}>
            <Image
              source={data.image}
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 85,
                height: 50,
                backgroundColor: "#ff5235",
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Entypo name="plus" style={{ fontSize: 18, color: "black" }} />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 20,
              }}
            >
              <AntDesign
                name="star"
                style={{ fontSize: 12, color: "black", paddingRight: 5 }}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {data.rating}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    // Header

    <SafeAreaView style={styles.homecontainer}>
      <StatusBar backgroundColor="#ff5235" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={styles.profile}
            source={require("../src/images/profile.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.logoimage}
            source={require("../src/images/carlogo.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="menu" style={styles.menu} />
        </TouchableOpacity>
      </View>
      {/* OPTIONS */}
      <View
        styles={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
          }}
        >
          <TextInput
            placeholder="Search"
            style={{
              backgroundColor: "white",
              width: "60%",
              height: 30,
              borderWidth: 1,
              borderColor: "#ff5235",
              borderRadius: 5,
              paddingLeft: 5,
              marginLeft: 25,
              elevation: 20,
            }}
          />
          <View style={{ width: 100, marginRight: -10, height: 30 }}>
            <TouchableOpacity
              style={{
                borderRadius: 5,
                backgroundColor: "#ff5235",
                paddingHorizontal: 10,
                paddingVertical: 5,
                width: 100,
                display: "flex",

                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                elevation: 20,
              }}
              onPress={() => {
                Keyboard.dismiss();
              }}
            >
              <Text style={{ color: "white" }}>Search</Text>
              <Entypo
                name="magnifying-glass"
                style={{ fontSize: 20, color: "white", paddingLeft: 5 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.options}>
          <Text
            style={{
              paddingTop: 10,
              paddingHorizontal: 20,
              fontSize: 18,
              fontWeight: "700",
              color: "black",
              letterSpacing: 1,
            }}
          >
            Categories
          </Text>
          <FlatList
            horizontal={true}
            data={Categories}
            renderItem={renderCategories}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      {/* LIST */}
      <ScrollView style={styles.firstScrol}>
        <View style={{ flex: 5 }}>
          <ScrollView contentContainerStyle={styles.list} scrollsToTop={true}>
            <Text
              style={{
                paddingTop: 20,
                paddingHorizontal: 20,
                fontSize: 18,
                fontWeight: "700",
                color: "#ff5235",
              }}
            >
              Popular
            </Text>
            {Categories[currentSelected].items.map(renderItems)}
            <TouchableOpacity
              style={{
                margin: 30,
                justifyContent: "center",
                alignItems: "center",
                opacity: 0.8,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#ff5235",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ff5235",
                }}
              >
                See more
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  homecontainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  firstScrol: { width: "100%" },
  header: {
    display: "flex",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    width: "100%",
    elevation: 5,
    zIndex: 3,
  },
  menu: {
    fontSize: 50,
    width: 60,
    paddingRight: 5,
  },
  profile: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "#ff5235",
    borderRadius: 30,
    marginLeft: 5,
  },
  logoimage: {
    width: 120,
    height: 30,
  },
  options: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#red",
    width: "100%",
    borderBottomWidth: 1,
    borderBlockColor: "#ff5235",
  },
  list: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#686868",
    width: "100%",
  },
});
