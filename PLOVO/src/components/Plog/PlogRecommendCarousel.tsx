import { useState, Dispatch, SetStateAction } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import CarouselCard from "./CarouselCard";

interface RecommendCard {
  name: string; //산이름
  weight: string; //플로보 현재 무게
  rank: number;
}

interface carouselProps {
  gap: number;
  offset: number;
  pages: Array<RecommendCard>;
  pageWidth: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

interface Color {
  lightColor: string;
  mainColor: string;
  darkColor: string;
}

const colors: Array<Color> = [
  {
    lightColor: "#53BF9D",
    mainColor: "#439F82",
    darkColor: "#000000",
  },
  {
    lightColor: "#277BC0",
    mainColor: "#285C87",
    darkColor: "#000000",
  },
  {
    lightColor: "#FFCB42",
    mainColor: "#FFB200",
    darkColor: "#000000",
  },
  {
    lightColor: "#FF8396",
    mainColor: "#F94C66",
    darkColor: "#000000",
  },
  {
    lightColor: "#CB9DF9",
    mainColor: "#9E58E3",
    darkColor: "#000000",
  },
];

export default function PlogRecommendCarousel(props: carouselProps) {
  const { gap, offset, pages, pageWidth, page, setPage } = props;
  function renderItem({ item }: any) {
    return (
      <CarouselCard
        item={item}
        color={colors[item.rank]}
        style={{ width: pageWidth, marginHorizontal: gap / 2 }}
      />
    );
  }

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
        data={pages}
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
      <IndicatorWrapper>
        {Array.from({ length: pages.length }, (_, i) => i).map((i) => (
          <Indicator key={`indicator_${i}`} focused={i === page} />
        ))}
      </IndicatorWrapper>
    </Container>
  );
}

const Container = styled.View`
  height: 220px;
  justify-content: center;
  align-items: center;
`;

const Indicator = styled.View<{ focused: boolean }>`
  margin: 0px 4px;
  background-color: white;
  width: ${(props) => (props.focused ? "12px" : "6px")};
  height: 6px;
  border-radius: 3px;
  transition: all 0.15s;
`;

const IndicatorWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;
