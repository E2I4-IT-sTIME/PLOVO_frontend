import Header from "../components/Header/Header";
import SocailLayout from "../components/Social/SocialLayout";
import { ScrollView } from "react-native";

//네비게이션 세 번째인 Social 부분을 담당할 페이지
export default function Socail() {
  return (
    <ScrollView>
      <Header title={"SOCIAL"} color={false} />
      <SocailLayout />
    </ScrollView>
  );
}
