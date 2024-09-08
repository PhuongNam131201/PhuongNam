import { StyleSheet } from "react-native";
import color from "./contains/color";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : color.background,
      },
      body :{
        flex : 1,
        paddingTop : 50,
        paddingHorizontal: 38,
      },
      header : {
        fontSize: 24,
        color: color.primary,
        fontWeight: 'bold',
      }, 
      items : {
        marginTop: 15,
      },
      input : {},
})
export default styles;