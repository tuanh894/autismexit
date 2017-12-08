
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3373d9',
        flex:1,
        flexDirection:'row',
        paddingTop: 30,
        paddingBottom:20,
        marginBottom:0,
    },
    content: {
        paddingTop:0,
        marginTop: 0,
    },
    left: {
        flex:1,
        paddingLeft: 5
    },
    right: {
        flex: 2
    },
    text: {
        color: '#fff',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: '#a3a3a3',

    }

});

export default styles;