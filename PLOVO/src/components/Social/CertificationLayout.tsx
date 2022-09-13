import CertificationCarousel from "./CertificationCarousel";
import styled from "styled-components/native";

interface PloggingRecord {
  time: string;
  date: string;
  distance: number;
  weight: number;
  name: string;
  img: string;
  profile: string;
}

interface certProps {
  name: string;
  items: Array<PloggingRecord>;
}

const dummyDatas: Array<certProps> = [
  {
    name: "북한산",
    items: [
      {
        time: "48:27",
        date: "2022-09-12",
        distance: 6.8,
        weight: 700,
        name: "북한산",
        img: "https://news.imaeil.com/photos/2020/07/28/2020072818340699789_l.jpg",
        profile:
          "https://i.pinimg.com/564x/ca/78/ad/ca78ad83e9c9a5caaf1c9fdc0eab87eb.jpg",
      },
      {
        time: "48:27",
        date: "2022-09-12",
        distance: 6.8,
        weight: 700,
        name: "북한산",
        img: "https://i.pinimg.com/564x/63/38/9d/63389d248b1e23103da2290d5ca048a8.jpg",
        profile:
          "https://i.pinimg.com/564x/ca/78/ad/ca78ad83e9c9a5caaf1c9fdc0eab87eb.jpg",
      },
      {
        time: "48:27",
        date: "2022-09-12",
        distance: 6.8,
        weight: 700,
        name: "북한산",
        img: "https://i.pinimg.com/736x/d3/f4/d9/d3f4d93e1909e8b29d000fa9c546ffe2.jpg",
        profile:
          "https://i.pinimg.com/564x/ca/78/ad/ca78ad83e9c9a5caaf1c9fdc0eab87eb.jpg",
      },
      {
        time: "48:27",
        date: "2022-09-12",
        distance: 6.8,
        weight: 700,
        name: "북한산",
        img: "https://i.pinimg.com/564x/57/01/52/5701523b2d63af47d8a20e1bc982b692.jpg",
        profile:
          "https://i.pinimg.com/564x/ca/78/ad/ca78ad83e9c9a5caaf1c9fdc0eab87eb.jpg",
      },
    ],
  },
  {
    name: "지리산",
    items: [
      {
        time: "48:27",
        date: "2022-09-12",
        distance: 6.8,
        weight: 700,
        name: "북한산",
        img: "https://news.imaeil.com/photos/2020/07/28/2020072818340699789_l.jpg",
        profile:
          "https://i.pinimg.com/564x/ca/78/ad/ca78ad83e9c9a5caaf1c9fdc0eab87eb.jpg",
      },
      {
        time: "48:27",
        date: "2022-09-12",
        distance: 6.8,
        weight: 700,
        name: "북한산",
        img: "https://i.pinimg.com/564x/63/38/9d/63389d248b1e23103da2290d5ca048a8.jpg",
        profile:
          "https://i.pinimg.com/564x/ca/78/ad/ca78ad83e9c9a5caaf1c9fdc0eab87eb.jpg",
      },
      {
        time: "48:27",
        date: "2022-09-12",
        distance: 6.8,
        weight: 700,
        name: "북한산",
        img: "https://i.pinimg.com/736x/d3/f4/d9/d3f4d93e1909e8b29d000fa9c546ffe2.jpg",
        profile:
          "https://i.pinimg.com/564x/ca/78/ad/ca78ad83e9c9a5caaf1c9fdc0eab87eb.jpg",
      },
      {
        time: "48:27",
        date: "2022-09-12",
        distance: 6.8,
        weight: 700,
        name: "북한산",
        img: "https://i.pinimg.com/564x/57/01/52/5701523b2d63af47d8a20e1bc982b692.jpg",
        profile:
          "https://i.pinimg.com/564x/ca/78/ad/ca78ad83e9c9a5caaf1c9fdc0eab87eb.jpg",
      },
    ],
  },
  {
    name: "관악산",
    items: [
      {
        time: "48:27",
        date: "2022-09-12",
        distance: 6.8,
        weight: 700,
        name: "북한산",
        img: "https://news.imaeil.com/photos/2020/07/28/2020072818340699789_l.jpg",
        profile:
          "https://i.pinimg.com/564x/ca/78/ad/ca78ad83e9c9a5caaf1c9fdc0eab87eb.jpg",
      },
      {
        time: "48:27",
        date: "2022-09-12",
        distance: 6.8,
        weight: 700,
        name: "북한산",
        img: "https://i.pinimg.com/564x/63/38/9d/63389d248b1e23103da2290d5ca048a8.jpg",
        profile:
          "https://i.pinimg.com/564x/ca/78/ad/ca78ad83e9c9a5caaf1c9fdc0eab87eb.jpg",
      },
      {
        time: "48:27",
        date: "2022-09-12",
        distance: 6.8,
        weight: 700,
        name: "북한산",
        img: "https://i.pinimg.com/736x/d3/f4/d9/d3f4d93e1909e8b29d000fa9c546ffe2.jpg",
        profile:
          "https://i.pinimg.com/564x/ca/78/ad/ca78ad83e9c9a5caaf1c9fdc0eab87eb.jpg",
      },
      {
        time: "48:27",
        date: "2022-09-12",
        distance: 6.8,
        weight: 700,
        name: "북한산",
        img: "https://i.pinimg.com/564x/57/01/52/5701523b2d63af47d8a20e1bc982b692.jpg",
        profile:
          "https://i.pinimg.com/564x/ca/78/ad/ca78ad83e9c9a5caaf1c9fdc0eab87eb.jpg",
      },
    ],
  },
];

export default function CertificationLayout() {
  return (
    <Container>
      {dummyDatas.map((data, index) => (
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
