import React, { Component } from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const clickHandler = () =>{
            alert('tambah')
        }
        return (
            <View>
            <ScrollView>
                <View style={{flexDirection:'row', margin:20}}>
                    <View style={{flex:1, alignItems:'flex-end'}}>
                        <Icon name="notifications-circle-outline" size={30} color='black'/>
                    </View>
                </View>

                <View style={{flexDirection:'row', margin:20, marginTop:10}}>
                    <View style={{flex:1}}>
                        <Image 
                        source={require('./assets/1.jpg')} 
                        style={{ width: 60, height: 60, borderRadius:50}}/>
                        </View>
                    <View style={{flex:4, marginTop:10}}>
                       <Text style={{fontSize:18}}>
                           dodi 
                       </Text><Text style={{fontSize:10}}>
                           5h ago
                       </Text>
                    </View>
                </View>

                <View style={{flexDirection:'row', marginLeft: 30, marginRight:30}}>
                <Text style={{textAlign:'left'}}>
                    Lorem ipsum is a placeholder
                    </Text>
                </View>

                <View style={{flexDirection:'row', marginLeft:30, marginTop:10}}>
                    <View style={{marginRight:30}}>
                        <Icon name="chatbubble-outline" size={20}/>
                    </View>
                    <View style={{marginRight:30}}>
                        <Icon name="repeat-outline" size={20}/>
                    </View>
                    <View >
                        <Icon name="heart" size={20}/>
                    </View>
                </View>

                <View style={{flexDirection:'row', margin:20, marginTop:30}}>
                    <View style={{flex:1}}>
                        <Image 
                        source={require('./assets/2.jpg')} 
                        style={{ width: 60, height: 60, borderRadius:50}}/>
                        </View>
                    <View style={{flex:4, marginTop:10}}>
                       <Text style={{fontSize:18}}>
                           joni - 
                           <Text style={{fontSize:14}}>
                               aditya
                           </Text>
                       </Text><Text style={{fontSize:10}}>
                           7h ago
                       </Text>
                    </View>
                </View>

                <View style={{flexDirection:'row', marginLeft: 30, marginRight:30}}>
                <Text style={{textAlign:'left'}}>
                   document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is
                </Text> 
                </View>
                <View style={{flexDirection:'row', marginLeft: 30, marginRight:30, marginTop:15}}>
                <Image 
                        source={require('./assets/3.jpg')} 
                        style={{ width: 350, height: 150, borderRadius:10}}/>
                </View>

                <View style={{flexDirection:'row', marginLeft:30, marginTop:10}}>
                    <View style={{marginRight:30}}>
                        <Icon name="chatbubble-outline" size={20}/>
                    </View>
                    <View style={{marginRight:30}}>
                        <Icon name="repeat-outline" size={20}/>
                    </View>
                    <View >
                        <Icon name="heart-outline" size={20}/>
                    </View>
                </View>

                <View style={{flexDirection:'row', margin:20, marginTop:30}}>
                    <View style={{flex:1}}>
                        <Image 
                        source={require('./assets/4.jpg')} 
                        style={{ width: 60, height: 60, borderRadius:50}}/>
                        </View>
                    <View style={{flex:4, marginTop:10}}>
                       <Text style={{fontSize:18}}>
                           restu
                       </Text><Text style={{fontSize:10}}>
                           2h ago
                       </Text>
                    </View>
                </View>

                <View style={{flexDirection:'row', marginLeft: 30, marginRight:30}}>
                <Text style={{textAlign:'left'}}>
                    typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is
                </Text> 
                </View>

                <View style={{flexDirection:'row', marginLeft: 30, marginRight:30, marginTop:15}}>
                <Image 
                        source={require('./assets/5.jpg')} 
                        style={{ width: 350, height: 150, borderRadius:10}}/>
                </View>

                <View style={{flexDirection:'row', marginLeft:30, marginTop:10}}>
                    <View style={{marginRight:30}}>
                        <Icon name="chatbubble-outline" size={20}/>
                    </View>
                    <View style={{marginRight:30}}>
                        <Icon name="repeat-outline" size={20}/>
                    </View>
                    <View >
                        <Icon name="heart-outline" size={20}/>
                    </View>
                </View>

                <View style={{flexDirection:'row', margin:20, marginTop:30}}>
                    <View style={{flex:1}}>
                        <Image 
                        source={require('./assets/6.jpg')} 
                        style={{ width: 60, height: 60, borderRadius:50}}/>
                        </View>
                    <View style={{flex:4, marginTop:10}}>
                       <Text style={{fontSize:18}}>
                           barong
                       </Text><Text style={{fontSize:10}}>
                           5h ago
                       </Text>
                    </View>
                </View>

                <View style={{flexDirection:'row', marginLeft: 30, marginRight:30}}>
                <Text style={{textAlign:'left'}}>
                   nice to meet you
                </Text> 
                </View>

                <View style={{flexDirection:'row', marginLeft: 30, marginRight:30, marginTop:15}}>
                <Image 
                        source={require('./assets/7.jpg')} 
                        style={{ width: 350, height: 150, borderRadius:10}}/>
                </View>

                <View style={{flexDirection:'row', marginLeft:30, marginTop:10}}>
                    <View style={{marginRight:30}}>
                        <Icon name="chatbubble-outline" size={20}/>
                    </View>
                    <View style={{marginRight:30}}>
                        <Icon name="repeat-outline" size={20}/>
                    </View>
                    <View >
                        <Icon name="heart-outline" size={20}/>
                    </View>
                </View>
                
                <TouchableOpacity onPress={clickHandler}>
                <View style={{flexDirection:'row', marginTop:20}}>
                    <View style={{flex:1, alignItems:'flex-start'}}>
                        <Icon name="add-circle" size={50} color='black'/>
                    </View>
                </View>
                </TouchableOpacity>
                </ScrollView>
                
            </View>
            
        );
    }
}

export default App;