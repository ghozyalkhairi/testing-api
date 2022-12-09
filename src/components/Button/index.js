import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackIcon from "../../assets/icons/back.svg";
import Styles from "./styles";
import { memo } from "react";

const Button = ({
  back,
  landing,
  tambah,
  dosen,
  hapus,
  update,
  text,
  onPress,
  data,
  dosen,
}) => {
  const navigation = useNavigation();
  if (back)
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={Styles.containerBack}
      >
        <BackIcon style={Styles.icon} width={25} heigth={25} fill={"#F2F2F2"} />
        <Text style={Styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  if (landing)
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Mahasiswa")}
        style={Styles.container}
      >
        <Text style={Styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  if (tambah)
    return (
      <TouchableOpacity
        onPress={() => {
          if (dosen) {
            navigation.navigate("Tambah", { dosen: true });
            return;
          }
          navigation.navigate("Tambah", { dosen: false });
        }}
        style={Styles.container}
      >
        <Text style={Styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  if (update)
    return (
      <TouchableOpacity
        onPress={() => {
          if (dosen) {
            navigation.navigate("Update", { data, dosen: true });
            return;
          }
          navigation.navigate("Update", { data, dosen: false });
        }}
        style={Styles.container}
      >
        <Text style={Styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  if (hapus)
    return (
      <TouchableOpacity onPress={onPress} style={Styles.containerHapus}>
        <Text style={Styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  return (
    <TouchableOpacity onPress={onPress} style={Styles.container}>
      <Text style={Styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default memo(Button);
