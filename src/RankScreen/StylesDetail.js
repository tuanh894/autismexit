import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
    background:{
        marginTop: 10,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius:40,

    },
    imageDetail:{
        width: 150,
        height: 150,
        borderRadius:75,
        // resizeMode: 'contain',
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


    //TabMost
    headerWrap:{
        paddingTop:10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchPlace:{
        marginBottom:4,
        fontSize:15,

    },
    itemButton:{
        marginBottom:4,
        fontSize:16,
        color:'#4285F4',
        fontWeight:'bold'
    },
    itemWrap:{
        flex:1,
        flexDirection:'row',
        paddingBottom:0,
        marginBottom:0,
    },
    itemWrapSearch:{
        flex:2,
        flexDirection:'row',
        backgroundColor:'#CECDD2',
        padding:10,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        height:35,
        alignItems: 'center',
        justifyContent: 'center',
        // borderRightRadius:10,
    },
    itemWrapButton:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemButtonSearch:{
        // paddingLeft:'15%',
        flex:1,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default styles;