import { Dimensions, FlatList } from "react-native";
import { useState } from "react";
import BestPloggerItem from "./BestPloggerItem";
import styled from "styled-components/native";

interface Plogger {
  profile_img: string;
  username: string;
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

  const renderItem = (item: Plogger, index: number) => {
    return (
      <BestPloggerItem
        item={item}
        style={{ width: pageWidth, marginHorizontal: gap / 2 }}
        index={index}
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
        keyExtractor={(item: any) => `page__${item.username}`}
        onScroll={onScroll}
        pagingEnabled
        renderItem={({ item, index }) => renderItem(item, index)}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;
`;
