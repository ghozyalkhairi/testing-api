import { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";
import { fetchData } from "../../request";
import Styles from "./styles";
import Navbar from "../../components/Navbar";
import DataList from "../../components/DataList";
import Button from "../../components/Button";

const Dosen = (props) => {
  const [dataDosen, setDataDosen] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchDataDosen = () =>
      fetchData("GET", "dosen").then((resp) => {
        setDataDosen(resp.data.data);
        setLoading(false);
      });
    fetchDataDosen();
  }, []);
  useEffect(() => {
    if (props.route.params?.update) {
      console.log("UPDATING");
      setLoading(true);
      fetchData("GET", "dosen").then((resp) => {
        setDataDosen(resp.data.data);
        setLoading(false);
        props.navigation.setParams({
          update: false,
        });
      });
    }
  }, [props.route.params?.update]);
  return (
    <SafeAreaView style={Styles.container}>
      <Button tambah text="Tambah Dosen" dosen={true} />
      {loading ? (
        <ActivityIndicator color="#2972DF" size={50} style={Styles.spinner} />
      ) : (
        <DataList data={dataDosen} dosen={true} />
      )}
      <Navbar routeName={props.route.name} />
    </SafeAreaView>
  );
};

export default Dosen;
