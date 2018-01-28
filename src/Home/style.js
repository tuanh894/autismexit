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
    //
    // headerMain: {
    //     flex: 2
    // },
    imagesLeft: {
        width: 40,
        height: 40,
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
        paddingRight:30

    },
    mainItem: {
        flex: 5,
        width: '100%',
        height: 70,
        borderColor: '#E24816',
        borderWidth: 3,
        margin: 10,
        position:'relative',
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'stretch',
        // paddingBottom:20
    },
    mainText: {
        bottom: 0,
        right: 0,
    },
    mainImgView: {
        position:'absolute',
        paddingBottom:'35%'
    },

    mainIma: {
        width:105,
        height:95,
        resizeMode: 'contain',
    },
    mainNameGame: {
        backgroundColor:'#E24816',
        color:'white',
        textAlign:'center',
        fontSize:13
    },
    mainTextView: {
        bottom:0,
        width:'100%',
        position:'absolute',
    },
    mainImaHand: {
        width:45,
        height:45,
        resizeMode: 'contain',
        position:'absolute',
        left:'50%',
        top:'30%',
        transform: [{ rotate: '325deg'}]
    },
    mainIma1st: {
        width:65,
        height:55,
        resizeMode: 'contain',
        position:'relative',
        right:'5%',
        top:'10%'
    },
    mainIma2_2nd: {
        width:55,
        height:55,
        resizeMode: 'contain',
        position:'absolute',
        left:'50%',
        top:'10%',
        right:'15%'
        // transform: [{ rotate: '325deg'}]
    },
    mainIma2nd: {
        width:55,
        height:55,
        resizeMode: 'contain',
        position:'relative',
        left:'15%',
        top:'15%',
    },
    mainIma4_2nd: {
        width:35,
        height:35,
        resizeMode: 'contain',
        position:'absolute',
        left:'100%',
        top:'0%',
        // transform: [{ rotate: '325deg'}]
    },
    mainIma4nd: {
        width:35,
        height:35,
        resizeMode: 'contain',
        position:'relative',
        // right:'25%',
        top:'5%',
        left:'35%',
    },
    mainIma7_2nd: {
        width:45,
        height:45,
        resizeMode: 'contain',
        position:'absolute',
        left:'70%',
        top:'0%',
        // transform: [{ rotate: '325deg'}]
    },
    mainIma7nd: {
        width:45,
        height:45,
        resizeMode: 'contain',
        position:'relative',
        right:'15%',
        top:'5%',
        left:'5%',
    },
    mainIma10_2nd: {
        width:45,
        height:45,
        resizeMode: 'contain',
        position:'absolute',
        left:'80%',
        top:'10%',
        // transform: [{ rotate: '325deg'}]
    },
    mainIma10nd: {
        width:45,
        height:45,
        resizeMode: 'contain',
        position:'relative',
        left:'10%',
        top:'10%',
    },
    mainIma10nd_1: {
        width:25,
        height:25,
        resizeMode: 'contain',
        position:'absolute',
        left:'30%',
        top:'45%',
    },
});
export default styles;