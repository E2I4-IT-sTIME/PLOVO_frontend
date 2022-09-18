import { useState, useEffect } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, FlatList, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CertificationItem from "./CertificationItem";

interface PloggingRecord {
  time: string;
  date: string;
  distance: string;
  weight: string;
  name: string;
  img: string;
  profile: string;
}

interface certProps {
  name: string;
  items: Array<PloggingRecord>;
}

const screenWidth = Math.round(Dimensions.get("window").width);
const gap = 28;
const offset = 20;
const pageWidth = screenWidth - (28 + 20) * 2;

export default function CertificationCarousel(props: certProps) {
  const { name, items } = props;
  const [page, setPage] = useState(0);

  const renderItem = ({ item }: any) => {
    return (
      <CertificationItem
        item={item}
        style={{ width: pageWidth, marginHorizontal: gap / 2 }}
      />
    );
  };

  const onScroll = (e: any) => {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / (pageWidth + gap)
    );
    setPage(newPage);
  };

  return (
    <Container>
      <Title>{name}</Title>
      <CarouselBox>
        <FlatList
          automaticallyAdjustContentInsets={false}
          contentContainerStyle={{
            paddingHorizontal: offset + gap / 2,
          }}
          data={items}
          decelerationRate="fast"
          horizontal
          keyExtractor={(item: PloggingRecord) =>
            `page__${item.date}${item.time}${item.img}${item.name}${item.profile}`
          }
          onScroll={onScroll}
          pagingEnabled
          renderItem={renderItem}
          snapToInterval={pageWidth + gap}
          snapToAlignment="start"
          showsHorizontalScrollIndicator={false}
        />
        <IndicatorWrapper>
          {Array.from({ length: items.length }, (_, i) => i).map((i) => (
            <Indicator key={`indicator_${i}`} focused={i === page} />
          ))}
        </IndicatorWrapper>
      </CarouselBox>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px 0px 30px 0px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 900;
  padding-left: 20px;
  color: #439f82;
`;

const CarouselBox = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Indicator = styled.View<{ focused: boolean }>`
  margin: 0px 4px;
  background-color: black;
  width: ${(props) => (props.focused ? 12 : 6)}px;
  height: 6px;
  border-radius: 3px;
`;

const IndicatorWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;
