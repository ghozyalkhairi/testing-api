import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { fetchData } from "../../request";
import { Text, TextInput, ToastAndroid, SafeAreaView } from "react-native";
import Button from "../../components/Button";
import Styles from "./styles";

const Update = (props) => {
  const data = props.route.params.data;
  const dosen = props.route.params.dosen;
  const navigation = useNavigation();
  const [nama, setNama] = useState(data.nama);
  const [nomorIdentitas, setNomorIdentitas] = useState(
    dosen ? data.nidn : data.nim
  );
  const [alamat, setAlamat] = useState(data.alamat);
  const submitData = () => {
    const identitas = dosen ? "dosen" : "mahasiswa";
    const dataUpdate = dosen
      ? { nama, nidn: nomorIdentitas, alamat, id: data.id }
      : {
          nama,
          nim: nomorIdentitas,
          alamat,
          id: data.id,
        };
    fetchData("PATCH", identitas, dataUpdate).then(() => {
      setNama("");
      setNomorIdentitas("");
      setAlamat("");
      ToastAndroid.show("Berhasil", ToastAndroid.SHORT);
      const route = dosen ? "Dosen" : "Mahasiswa";
      navigation.navigate(route, { update: true });
    });
  };
  return (
    <SafeAreaView style={Styles.container}>
      <Text>Update Data {data.nama}</Text>
      <Text>Nama</Text>
      <TextInput
        style={Styles.input}
        value={nama}
        onChangeText={(text) => setNama(text)}
      />
      <Text>{dosen ? "NIDN" : "NIM"}</Text>
      <TextInput
        style={Styles.input}
        value={nomorIdentitas}
        onChangeText={(text) => setNomorIdentitas(text)}
      />
      <Text>Alamat</Text>
      <TextInput
        style={Styles.input}
        value={alamat}
        onChangeText={(text) => setAlamat(text)}
      />
      <Button onPress={submitData} text="Update" />
    </SafeAreaView>
  );
};

export default Update;
