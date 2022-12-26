import { Input } from "react-native-elements";
import { StyleSheet, View, Image, Button } from "react-native";
import { dim, color } from "./Tool";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useRef, useState } from "react";

export default function App() {
  const ref_pass = useRef(null);
  const [isSecurePass, setIsSecurePass] = useState(true);

  const rightIcons = () => {
    return (
      <View>
        {isSecurePass ? (
          <Entypo
            name="eye"
            size={24}
            color="#58C8F1"
            onPress={() => {
              setIsSecurePass(!isSecurePass);
            }}
          />
        ) : (
          <Entypo
            name="eye-with-line"
            size={22}
            color="#58C8F1"
            onPress={() => {
              setIsSecurePass(!isSecurePass);
            }}
          />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={require("./assets/image/privacy.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.mid}>
        <View style={styles.login}>
          <Input
            autoFocus={true}
            leftIcon={
              <FontAwesome5 name="user-alt" size={22} color="#58C8F1" />
            }
            placeholder={" Tên đăng nhập"}
            onSubmitEditing={() => {
              ref_pass.current.focus();
            }}
          />
        </View>

        <View style={styles.login}>
          <Input
            ref={ref_pass}
            leftIcon={
              <MaterialCommunityIcons
                name="key-variant"
                size={24}
                color="#58C8F1"
              />
            }
            secureTextEntry={isSecurePass}
            rightIcon={rightIcons}
            placeholder={" Mật khẩu"}
            onSubmitEditing={() => {}}
          />
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.button}>
          <Button title={"Login"} onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  top: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: color.blue,
  },

  mid: {
    flex: 0.2,
    // backgroundColor: color.black,
    padding: 20,
  },
  bottom: {
    flex: 0.4,
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: color.red,
  },

  login: {
    width: dim.width90,
  },
  button: {
    marginTop: dim.height10,
    width: dim.width90,
  },

  image: {
    width: dim.width40,
    height: dim.height20,
    // backgroundColor: color.red,
  },
});
