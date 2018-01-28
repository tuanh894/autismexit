import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    view:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    view1:{
        position: 'absolute',
        top: 0,
        bottom: '30%',
        left: 0,
        right: 0,
    },
    images: {
        flex: 1,
        width: null,
    },
    header: {
        flex: 1,
        flexDirection: "row",
    },
    headerLeft: {
        flex: 1,
        flexDirection: "row",
    },

    headerMain: {
        flex: 2
    },
    imagesLeft: {
        width: 60,
        height: 50,
        marginTop: 10,
        marginLeft: 20
    },
    main: {
        flex: 1,
        flexDirection: "row",
        paddingLeft:30,
        paddingRight:30,

    },
    mainItem: {
        flex: 5,
        width: '100%',
        height: 100,
        // borderColor: '#E24816',
        // borderWidth: 3,
        margin: 10,
        position:'relative',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingBottom:20
    },
});
export default styles;