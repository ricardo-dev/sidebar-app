import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Drawer, Container, Header, Content, Button, Left} from 'native-base';

class SideBar extends Component {

  state = {
    imageSource : "https://s3.amazonaws.com/imagem-ilumino-comercio/semImagem.jpg",
  }

  entrarFunction = () => {
    Alert.alert('Entrar clicado!');
  }

  homeFunction = () => {
    Alert.alert('Home clicado!');
  }

  categoriaFunction = () => {
    Alert.alert('Categoria clicado!');
  }

  localFunction = () => {
    Alert.alert('Local clicado!');
  }

  cadastroFunction = () => {
    Alert.alert('Cadastro clicado!');
  }

  configuracaoFunction = () => {
    Alert.alert('Configuração clicado!');
  }

  sobreFunction = () => {
    Alert.alert('Sobre clicado!');
  }

  ajudaFunction = () => {
    Alert.alert('Ajuda clicado!');
  }

  sairFunction = () => {
    Alert.alert('Sair clicado!');
  }

  render() {
    return(
      <View style={{
        flex:1,
        backgroundColor: '#fff', 
      }}>
        <View style={{
          height: 200,
          backgroundColor: '#fff',
          alignItems:'center',
        }}>
            <Image source={{uri: this.state.imageSource}}
                      style={{width:115, height: 115, borderRadius:100,
                      marginTop: 20,
                      borderWidth: 2, borderColor:'#000', marginTop: 20}}></Image>
            <TouchableOpacity
              onPress = {
                this.entrarFunction
              }>
              <Text style={{
                color: '#000',
                fontSize: 20,
                fontWeight: 'bold',
                marginTop:25
              }}>Entrar</Text>
            </TouchableOpacity>
        </View>
        <View style={{
          marginTop: 20
        }}>
          <ScrollView>
            <TouchableOpacity onPress ={
              this.homeFunction
            }>
              <View style={{flexDirection:'row', paddingBottom:0, marginLeft: 30, marginRight: 30, borderBottomWidth: 0.8, borderBottomColor:'#d3d3d3'}}>
                  <Icon name="home"
                  size={23}
                  color='#000'
                  style={{
                    paddingBottom:10
                  }}></Icon>
                  <Text style={{fontSize:14, color:'#000', marginLeft:30, marginTop: 3}}>Tela inicial</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress ={
              this.categoriaFunction
            }>
              <View style={{flexDirection:'row', marginTop:10, paddingBottom:0, marginLeft: 30, marginRight: 30, borderBottomWidth: 0.8, borderBottomColor:'#d3d3d3'}}>
                  <Icon name="th-large"
                  size={23}
                  color='#000'
                  style={{
                    paddingBottom:10
                  }}></Icon>
                  <Text style={{fontSize:14, color:'#000', marginLeft:30, marginTop: 3}}>Categorias</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress ={
              this.localFunction
            }>
              <View style={{flexDirection:'row',marginTop:10,  paddingBottom:0, marginLeft: 30, marginRight: 30, borderBottomWidth: 0.8, borderBottomColor:'#d3d3d3'}}>
                  <Icon name="hospital-o"
                  size={23}
                  color='#000'
                  style={{
                    paddingBottom:10
                  }}></Icon>
                  <Text style={{fontSize:14, color:'#000', marginLeft:30, marginTop: 3}}>Locais de utilidade pública</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress ={
              this.cadastroFunction
            }>
              <View style={{flexDirection:'row', marginTop:10, paddingBottom:0, marginLeft: 30, marginRight: 30, borderBottomWidth: 0.8, borderBottomColor:'#d3d3d3'}}>
                  <Icon name="cart-plus"
                  size={23}
                  color='#000'
                  style={{
                    paddingBottom:10
                  }}></Icon>
                  <Text style={{fontSize:14, color:'#000', marginLeft:30, marginTop: 3}}>Cadastre seu negócio</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress ={
              this.configuracaoFunction
            }>
              <View style={{flexDirection:'row', marginTop:10, paddingBottom:0, marginLeft: 30, marginRight: 30, borderBottomWidth: 0.8, borderBottomColor:'#d3d3d3'}}>
                  <Icon name="cogs"
                  size={23}
                  color='#000'
                  style={{
                    paddingBottom:10
                  }}></Icon>
                  <Text style={{fontSize:14, color:'#000', marginLeft:30, marginTop: 3}}>Configurações</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress ={
              this.sobreFunction
            }>
              <View style={{flexDirection:'row',marginTop:10,  paddingBottom:0, marginLeft: 30, marginRight: 30, borderBottomWidth: 0.8, borderBottomColor:'#d3d3d3'}}>
                  <Icon name="info-circle"
                  size={23}
                  color='#000'
                  style={{
                    paddingBottom:10
                  }}></Icon>
                  <Text style={{fontSize:14, color:'#000', marginLeft:30, marginTop: 3}}>Sobre a iLúmino</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress ={
              this.ajudaFunction
            }>
              <View style={{flexDirection:'row', marginTop:10, paddingBottom:0, marginLeft: 30, marginRight: 30, borderBottomWidth: 0.8, borderBottomColor:'#d3d3d3'}}>
                  <Icon name="question-circle-o"
                  size={23}
                  color='#000'
                  style={{
                    paddingBottom:10
                  }}></Icon>
                  <Text style={{fontSize:14, color:'#000', marginLeft:30, marginTop: 3}}>Ajuda</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress ={
              this.sairFunction
            }
            style={{
              marginLeft:30, marginRight:30
            }}>
              <View style={{flexDirection:'row',marginTop:10,  paddingBottom:0,}}>
                  
                  <Text style={{fontSize:14, color:'#000', marginTop: 3}}>Sair</Text>
              </View>
            </TouchableOpacity>
            
            </ScrollView>
        </View>
      </View>
    );
  }
}; 

export default class App extends Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  render(){
    return(
      <Drawer
        ref = {(ref) => { this.drawer = ref; }}
        content = {<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer}>

        <Container style={styles.container}>
          <Header style={styles.androidHeader} androidStatusBarColor="#fff" iosBarStyle="dark-content">
            <Left style={{flex:1}}>
              <Icon name="navicon"
                size={23}
                color='#000'
                //name='navicon' color='white' size={23}
                onPress={
                  this.openDrawer
                } 
                style={{paddingLeft: 10}}/>
            </Left>
          </Header>
          <Content style={{
            backgroundColor: '#d3d3d3', flex:1, justifyConten:'center',
          }}>
                <Text>menu principal</Text> 
          </Content>
        </Container>

      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  androidHeader: { 
    ...Platform.select({ 
    android: { 
      //marginTop: StatusBar.currentHeight,
      //StatusBarsetBackgroundColor("#D3D3D3"),
      //StatusBarsetBarStyle("dark-content"),
      backgroundColor: 'white',
      //StatusBarColor
      //StatusBar
     } 
    }) },
  androidHeaderTitle: { 
    ...Platform.select({ 
      android: { 
        alignItems: 'flex-end',
        //textAlign: 'center',
        //flex: 1
       } 
      }) 
  },
  //androidStatusBarColor: 'white',
});