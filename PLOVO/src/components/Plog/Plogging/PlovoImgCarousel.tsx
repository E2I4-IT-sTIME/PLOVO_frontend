import styled from "styled-components/native";
import { FlatList, Dimensions } from "react-native";
import { useState } from "react";

interface carouselProps {
  imgs: Array<string>;
}

const screenWidth = Math.round(Dimensions.get("window").width);

export default function PlovoImgCarousel(props: carouselProps) {
  const { imgs } = props;
  const gap = 28;
  const offset = 20;
  const pageWidth = screenWidth - (28 + 20) * 2;

  const [page, setPage] = useState(0);
  const renderItem = ({ item }: any) => {
    return (
      <Item
        source={{ uri: item }}
        resizeMode="cover"
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
        data={imgs}
        decelerationRate="fast"
        horizontal
        keyExtractor={(item: any) => `page__${item}`}
        onScroll={onScroll}
        pagingEnabled
        renderItem={renderItem}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
      <IndicatorWrapper>
        {Array.from({ length: imgs.length }, (_, i) => i).map((i) => (
          <Indicator key={`indicator_${i}`} focused={i === page} />
        ))}
      </IndicatorWrapper>
    </Container>
  );
}

const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: ${screenWidth * 0.7}px;
`;

const Indicator = styled.View<{ focused: boolean }>`
  margin: 0px 4px;
  background-color: #ffffff;
  width: ${(props) => (props.focused ? 12 : 6)}px;
  height: 6px;
  border-radius: 3px;
`;

const IndicatorWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

const Item = styled.Image`
  width: 80%;
  height: 100%;
  border-radius: 10px;
`;
