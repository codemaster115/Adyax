import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    content: {
        width: '100%',
        height: '100%',
        backgroundColor: 'lightgrey'
    },
    img: {
        height: 250
    },
    authorText: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500',
    },
    dateText: {
        fontSize: 12,
        color: 'grey',
    },
    authorTitle: {
        fontSize: 14,
        color: 'black',
    },
    uriText: {
        fontSize: 10,
        color: '#8892AD',
    },
    descriptionText: {
        fontSize: 8,
        color: 'black',
    },
    buttonView: {
        flexDirection: 'row',
        height: 40,
        borderTopWidth: 0.5,
        borderColor: 'lightgrey'
    },
    buttonLikeView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
