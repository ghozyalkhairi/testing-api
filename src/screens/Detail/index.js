import { SafeAreaView, Text, View, ToastAndroid } from "react-native";
import { fetchData } from "../../request";
import { useNavigation } from "@react-navigation/native";
import Styles from "./styles";
import Button from "../../components/Button";
import StudentIcon from "../../assets/icons/student.svg";
import TeacherIcon from "../../assets/icons/teacher.svg";

const Detail = (props) => {
  const navigation = useNavigation();
  const data = props.route.params.data;
  const dosen = data.nidn;
  const deleteUser = () => {
    const identitas = dosen ? "dosen" : "mahasiswa";
    fetchData("DELETE", identitas, data.id).then(() => {
      ToastAndroid.show("Menghapus", ToastAndroid.SHORT);
      const route = dosen ? "Dosen" : "Mahasiswa";
      navigation.navigate(route, { update: true });
    });
  };
  return (
    <SafeAreaView style={Styles.container}>
      <Button back text="Kembali" />
      <View style={Styles.infoContainer}>
        <View style={Styles.column}>
          {dosen ? (
            <TeacherIcon width={150} height={150} fill={"#2972DF"} />
          ) : (
            <StudentIcon width={150} height={150} fill={"#2972DF"} />
          )}
          <Text style={[Styles.nama, Styles.marginVertical]}>{data.nama}</Text>
          <Text style={[Styles.email, Styles.marginVertical]}>
            {data.alamat}
          </Text>
          <Text style={[Styles.email, Styles.marginVertical]}>
            {dosen ? data.nidn : data.nim}
          </Text>
        </View>
        <View style={Styles.bottom}>
          <Button update data={data} text="Update" dosen={dosen} />
          <Button hapus onPress={deleteUser} text="Hapus" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Detail;
