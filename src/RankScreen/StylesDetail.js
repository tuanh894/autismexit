import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff'
    },
    background:{
        marginTop: 10,
    },
    image: {
        width: 80,
        height: 80,
        // borderWidth: 1,
        // borderColor: 'rgba(0,0,0,0.2)',
        // borderColor: 'red',
        borderRadius:40,
        // left: '30%',
        resizeMode: 'contain',

    },
    RightRank:{
        // width:1500,
        alignItems: 'center',
        justifyContent: 'center',
    },
    points:{
        fontSize:18,
    },
    wrapperDetail:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    firstText:{
        width:100
    },
    textBold:{
        // color:'red',
        fontWeight: '600',
        fontSize:20

    },
    textInfo:{
        marginLeft:50,
        marginTop:5
    },
});
export default styles;