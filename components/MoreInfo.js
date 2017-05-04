import  React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

import Communications from 'react-native-communications';
import Icon from 'react-native-vector-icons/FontAwesome';

class MoreInfo extends Component {


  renderImage() {
    if(this.props.reps.info.photoUrl) {
      return(
        <Image
          source={ {uri: `${this.props.reps.info.photoUrl}` } }
          style={ styles.image }
        />
      )
    } else {
      return(
        <Image
          source={ require('../assets/images/default_user_image.jpg') }
          style={ styles.image }
        />
      )
    }
  }

  renderUrl() {
    if(this.props.reps.info.urls) {
      return(
        <TouchableOpacity onPress={ this.urlLink() }>
          <Icon style={ styles.icon } name="globe" color='#141414'/>
        </TouchableOpacity>
      )
    }
  }

  urlLink() {
    if(this.props.reps.info.urls) {
      Communications.web(`${ this.props.reps.info.urls[0] }`)
    }

  }

  renderAddress() {
    if(this.props.reps.info.address[0].line3) {
      return (
        <View>
          <Text style= {styles.text} >{ this.props.reps.info.address[0].line1 }</Text>
          <Text style= {styles.text} >{ this.props.reps.info.address[0].line2 }</Text>
          <Text style= {styles.text} >{ this.props.reps.info.address[0].line3 }</Text>
          <Text style= {styles.text} >{ this.props.reps.info.address[0].city }, { this.props.reps.info.address[0].state } { this.props.reps.info.address[0].zip }</Text>
        </View>
      )
    } else if(this.props.reps.info.address[0].line2) {
        return (
          <View>
            <Text style= {styles.text} >{ this.props.reps.info.address[0].line1 }</Text>
            <Text style= {styles.text} >{ this.props.reps.info.address[0].line2 }</Text>
            <Text style= {styles.text} >{ this.props.reps.info.address[0].city }, { this.props.reps.info.address[0].state } { this.props.reps.info.address[0].zip }</Text>
          </View>
        )
    } else {
        return (
          <View>
            <Text style= {styles.text} >{ this.props.reps.info.address[0].line1 }</Text>
            <Text style= {styles.text} >{ this.props.reps.info.address[0].city }, { this.props.reps.info.address[0].state } { this.props.reps.info.address[0].zip }</Text>
          </View>
        )
    }
  }

  facebookLink() {
    if(this.props.reps.info.channels) {
      for(i=0, x=this.props.reps.info.channels.length; i<x; i++) {
        if(this.props.reps.info.channels[i].type === 'Facebook') {
          Communications.web(`https://www.facebook.com/${this.props.reps.info.channels[i].id}`)
        }
      }
    }
  }

  twitterLink() {
    if(this.props.reps.info.channels) {
      for(i=0, x=this.props.reps.info.channels.length; i<x; i++) {
        if(this.props.reps.info.channels[i].type === 'Twitter') {
          Communications.web(`https://twitter.com//${this.props.reps.info.channels[i].id}`)
        }
      }
    }
  }

  render() {
    return(
      <View style={ styles.moreInfoContainer }>
        { (() => this.renderImage())() }
        <View style={ styles.info }>
          { (() => this.renderAddress())() }
          <View style={ styles.socialLinks }>
            <TouchableOpacity onPress={ () => this.urlLink() }>
              <Icon style={ styles.icon } name="globe" color='#141414'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.facebookLink() }>
              <Icon style={ styles.icon} name="facebook-official" color='#3b5998'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.twitterLink() }>
              <Icon style={ styles.icon} name="twitter" color='#4099ff' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
moreInfoContainer: {
  flex: 1,
  flexDirection: 'row',
  marginLeft: 10,
  marginBottom: 10
},
image: {
  height: 100,
  width: 100,
  borderRadius: 50
},
info: {
  flex: 1,
  flexDirection: 'column',
  paddingLeft: 20,
  paddingTop: 5
},
socialLinks: {
  flexDirection: 'row',
  marginTop: 10,
},
icon: {
fontSize: 35,
paddingRight: 20
},
facebook: {
  color: '#3b5998'
},
text: {
  color: '#141414'
}
});

export default MoreInfo;


// let fullAddress = ""
//  return(
//    <View>
//
//      <Text> {this.props.reps.title.phones}</Text>
//      <Text>{this.props.reps.title.emails}</Text>
//      <Icon style={styles.icon} class="fa fa-facebook" aria-hidden="true" />
//      <Icon style={styles.icon} class="fa fa-twitter" aria-hidden="true" />
//    </View>
//    );
