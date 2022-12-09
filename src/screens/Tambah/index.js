import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { fetchData } from "../../request";
import Button from "../../components/Button";
import { Text, TextInput, ToastAndroid, SafeAreaView } from "react-native";
import Styles from "./styles";

const Tambah = (props) => {
  const dosen = props.route.params.dosen;
  const navigation = useNavigation();
  const [nama, setNama] = useState();
  const [id, setId] = useState();
  const [alamat, setAlamat] = useState();
  const submitData = () => {
    const identitas = dosen ? "dosen" : "mahasiswa";
    const dataBaru = dosen
      ? { nama, nidn: id, alamat }
      : {
          nama,
          nim: id,
          alamat,
        };
    fetchData("POST", identitas, dataBaru).then(() => {
      setNama("");
      setId("");
      setAlamat("");
      ToastAndroid.show("Berhasil", ToastAndroid.SHORT);
      const route = dosen ? "Dosen" : "Mahasiswa";
      navigation.navigate(route, { update: true });
    });
  };
  return (
    <SafeAreaView style={Styles.container}>
      <Text>Tambah {dosen ? "Dosen" : "Mahasiswa"}</Text>
      <Text>Nama</Text>
      <TextInput
        style={Styles.input}
        value={nama}
        onChangeText={(text) => setNama(text)}
      />
      <Text>{dosen ? "NIDN" : "NIM"}</Text>
      <TextInput
        style={Styles.input}
        value={id}
        onChangeText={(text) => setId(text)}
      />
      <Text>Alamat</Text>
      <TextInput
        style={Styles.input}
        value={alamat}
        onChangeText={(text) => setAlamat(text)}
      />
      <Button onPress={submitData} text="Tambah" />
    </SafeAreaView>
  );
};

export default Tambah;
