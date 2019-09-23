import { Platform,StyleSheet,StatusBar } from 'react-native'

const styles = StyleSheet.create({
    container : {
        //플렉스박스 레이아웃 모델 활성화
        flex : 1,
        //플렉스박스에게 자식을 위에서 아래로 (vertical)로 그리도록 요청.
        flexDirection : 'column',
        //간격을 다른 자식을 참고해 정의한다.
        justifyContent : 'space-around',
        //자식을 컨테이너의 중앙에 맞춘다.
        alignItems : 'center',
        backgroundColor : 'ghostwhite',
        ...Platform.select({
            ios : { paddingTop : 20 },
            android : { paddingTop:StatusBar.currentHeight}
        })
    },
    box : {
        width : 100,
        height : 100,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'lightgray',
        borderWidth : 1,
        borderStyle : 'dashed',
        borderColor : 'darkslategray',

    },
    boxText : {
        color : 'darkslategray',
        fontWeight : 'bold',
    },
});

export default styles;


