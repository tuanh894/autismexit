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

    imagesMain: {
        flex: 1,
        width: 200,
        height: 200,
        resizeMode: 'contain',
        // marginTop:-200
    },
    main: {
        flex: 1,
        flexDirection: "row",
        paddingLeft:30,
        paddingRight:30,

    },
    main1:{
        flex: 2,
        flexDirection: "row",
        paddingLeft:30,
        paddingRight:30,
        marginTop:100

    },
    hand21:{
        width:50,
        height:50,
        resizeMode:'contain'
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
    mainText: {
        bottom: 0,
        right: 0,
    },
    mainImgView: {
        position:'absolute',
        paddingBottom:'5%',
    },

    mainIma: {
        width:105,
        height:95,
        resizeMode: 'contain',
    },

    mainImaHand: {
        width:65,
        height:55,
        resizeMode: 'contain',
        position:'absolute',
        left:'30%',
        top:'30%',
        transform: [{ rotate: '325deg'}]
    },
    mainIma1st: {
        width:105,
        height:95,
        resizeMode: 'contain',
        position:'relative',
        right:'15%'
    },
});
export default styles;