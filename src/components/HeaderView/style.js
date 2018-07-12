import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    content: {
        width: '100%',
        height: '100%',
    },
    Left: {
        width: '15%',
        justifyContent: 'center',
    },
    Right: {
        width: '15%',
        alignItems: 'flex-end',
        padding: 0,
        margin: 0,
    },
    Body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    Icon: {
        color: 'white'
    }
})
