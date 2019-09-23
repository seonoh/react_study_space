import React from 'react';
import{
  StatusBar,
  View
} from 'react-native';
import styles from './styles'
import Row from './Row'
import Column from './Column'
import Box from './Box'

export default () => (
  <View style = {styles.container}>
    <StatusBar hidden = {false}/>
    {
      <Row>
        <Column>
        <Box>#1</Box>
        <Box>#2</Box>
        </Column>

        <Column>
        <Box>#3</Box>
        <Box>#4</Box>
        </Column>

        <Column>
        <Box>#5</Box>
        <Box>#6</Box>
        </Column>

        <Column>
        <Box>#7</Box>
        <Box>#8</Box>
        </Column>

        <Column>
        <Box>#9</Box>
        <Box>#10</Box>
        </Column>

        <Column>
        <Box>#11</Box>
        <Box>#12</Box>
        </Column> 
      </Row>
    }
  </View>
)

// const ThreeColumnLayout = () => (
//   <View style = {styles.container}>
//     <View style = {styles.box}>
//       <Text style = {styles.boxText}>
//         #1
//       </Text>
//     </View>

//     <View style = {styles.box}>
//       <Text style = {styles.boxText}>
//         #2
//       </Text>                                                                                                                                               
//     </View>

//     <View style = {styles.box}>
//       <Text style = {styles.boxText}>
//         #3
//       </Text>
//     </View>
//   </View>
// )

// export default ThreeColumnLayout

// import {PropTypes} from 'prop-types';
// import Row from './Row';

// const StyleSheets = () => (
//   <View style = {styles.container}>
//     <View style = {styles.box}>        
//       <Text style = {styles.boxText}>
//         I'm in a box
//       </Text>
//     </View>
//   </View>
// );       

// const Box = ({children}) => (
//   <View style = {styles.box}>
//     <Text style = {styles.boxText}>{children}</Text>
//   </View>
// )

// Box.propTypes = {
//   children : PropTypes.node.isRequired
// }

// export default Box;
                                       
// export default function App() {
//   return (
//     <View style = {styles.container}>
//       <Box>#1</Box>
//       <Box>#2</Box>
//     </View>
//   );
// }

