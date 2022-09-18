import CertificationCarousel from "./CertificationCarousel";
import styled from "styled-components/native";

interface PloggingRecord {
  time: string;
  date: string;
  distance: string;
  weight: string;
  name: string;
  img: string;
  profile: string;
}

interface cert {
  name: string;
  items: Array<PloggingRecord>;
}

interface CertProps {
  items: Array<cert>;
}

export default function CertificationLayout(props: CertProps) {
  const { items } = props;
  return (
    <Container>
      {items.map((data, index) => (
        <CertificationCarousel
          name={data.name}
          items={data.items}
          key={`${data.name}-${index}`}
        />
      ))}
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
`;
