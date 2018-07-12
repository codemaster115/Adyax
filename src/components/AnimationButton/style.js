import { StyleSheet } from 'react-native';
const MARGIN = 40;
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: MARGIN,
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 1,
    },
    text: {
        color: 'white',
        fontFamily: 'Comfortaa-Regular',
        fontSize: 18,
        backgroundColor: 'transparent',
    },
    image: {
        width: 24,
        height: 24,
    },
});