import  React, { Component } from 'react';
import { AppRegistry } from 'react-native';

class Rep extends Component {
  constructor(props){
    super(props);
    this.state = {text: '' };
  }

  render(){
    return(
    <View style={styles.rowContainer}>
          <Image source= {{photoUrl}} />
          <TextInput
          name={john}
          address={101}
          party={R}
          email={email}
          phones={1234567890}

          />
        </View>
    );
  }
}


// const styles = StyleSheet.create ({


// })

export default Rep;


