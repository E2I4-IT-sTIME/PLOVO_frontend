import { View, Image, Text, ImageSourcePropType, StyleSheet, Dimensions  } from "react-native";

interface CardProps {
    color : string,
    imgSrc : ImageSourcePropType,
    content : string
}
const win = Dimensions.get('window');

const TutorialCard = (props: CardProps) => {
    const { imgSrc, content, color} = props;

    return(
        <View style={styles(color).container}>
            <Image source={imgSrc} style={styles("").img}/>
            <Text style={styles("").content}>{content}</Text>
        </View>
    );
}

const styles = (color:any) => StyleSheet.create({
    container: {
        flex: 1,
        width: win.width/2.8,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor : color,
        padding: 10,
        borderRadius: 10,
        marginRight: 20
    },
    img: {
        width:'100%',
        height: '55%'
    },
    content: {
        width: '100%',
        textAlign: 'left',
        color: '#fff',
        fontSize: 12,
        marginTop: 5
    }
});
export default TutorialCard;