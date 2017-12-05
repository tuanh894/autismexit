import {StyleSheet} from 'react-native';

 const styles = StyleSheet.create({
   header: {
       backgroundColor: '#DBE1EB',
       borderBottomWidth: 1,
       borderBottomColor: '#7d60d9'
   },
   h3: {
        fontWeight:'bold',
       paddingTop:13,
       paddingBottom: 13,
       textAlign: 'center'
   },
     container: {
         backgroundColor: '#FFF',

     },
     content: {
       paddingTop: 5,
     },
     item: {
       borderWidth: 1,
         borderRadius: 10,
         marginRight: 5,
         marginLeft: 5,

     },
     detail: {
       paddingLeft: 10,
     }

});

export default styles;