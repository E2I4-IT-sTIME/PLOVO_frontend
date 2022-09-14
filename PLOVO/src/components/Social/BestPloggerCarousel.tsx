import { Dimensions, FlatList } from "react-native";
import { useState } from "react";
import BestPloggerItem from "./BestPloggerItem";
import styled from "styled-components/native";

interface Plogger {
  rank: number;
  profileImg: string;
  name: string;
}

interface carouselProps {
  items: Array<Plogger>;
}

const screenWidth = Math.round(Dimensions.get("window").width);
const gap = 20;
const offset = 24;
const pageWidth = screenWidth - (20 + 24) * 4;

export default function BestPloggerCarousel(props: carouselProps) {
  const { items } = props;
  const [page, setPage] = useState(0);

  const renderItem = ({ item }: any) => {
    return (
      <BestPloggerItem
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
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: offset + gap / 2,
        }}
        data={items}
        decelerationRate="fast"
        horizontal
        keyExtractor={(item: any) => `page__${item.name}`}
        onScroll={onScroll}
        pagingEnabled
        renderItem={renderItem}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
      {/* <IndicatorWrapper>
        {Array.from({ length: items.length }, (_, i) => i).map((i) => (
          <Indicator key={`indicator_${i}`} focused={i === page} />
        ))}
      </IndicatorWrapper> */}
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;
`;
