import React from 'react';
import {StyleSheet,Alert, Button, View,Text,Image} from 'react-native';


class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          bouton: '',
          tour: true, //true = bleu , fauls = rouge
          nbTourBleu:0, // unpied = 2 demi pied 1 
          nbTourRouge:0,// unpied = 2 demi pied 1 
          maxTour:20
        };
      };


      unPied= (result) => {
        if( this.state.tour == true){
            this.state.nbTourBleu = this.state.nbTourBleu + 2;
            this.state.tour = false
    }else if( this.state.tour == false){
        this.state.nbTourRouge = this.state.nbTourRouge + 2;
        this.state.tour = true
    }
    console.log("bleu :", this.state.nbTourBleu);
    console.log("rouge :", this.state.nbTourRouge)
    console.log(this.state.tour);
}
    
    demiPied = (result) => {
        if( this.state.tour == true){
            this.state.nbTourBleu = this.state.nbTourBleu + 1;
            this.state.tour = false
           
    }else if( this.state.tour == false){
    this.state.nbTourRouge = this.state.nbTourRouge + 1;
    this.state.tour = true
    }
    console.log("bleu :",this.state.nbTourBleu);
    console.log("rouge :", this.state.nbTourRouge);
    console.log(this.state.tour);
}    

    componentDidUpdate(){
        if( this.state.tour == true){
            console.log("c'est au tour du bleu de jouer")
        }else if( this.state.tour == false){
            console.log("c'est au tour du rouge de jouer")
        }
        console.warn("bleu :", this.state.nbTourBleu);
        console.log("rouge :", this.state.nbTourRouge)
    }
      
    render(){
        return(
            
            <View style ={styles.viewGeneral}>
                <View style ={styles.viexTitre}>
                    <Text style = {({fontSize: 60,paddingBottom: 20})} > Choux-Fleur</Text>
                </View>
                <View style ={styles.viewChaussur}>
                <Text > </Text>
                    <Image
                        style={styles.chaussurImage}
                        source={require('../assets/rougeblancgris.png')}
                 
                    />
                    <Text>{this.state.bouton}</Text>
                    <Image
                    style={styles.chaussurImage}
                    source={require('../assets/bleugrisnoir.png')}
                 
                    />

                </View>
                    <View style={styles.viewbutton}>
                        <View style={styles.viewOneButton}>
                            <Button 
                                title="Chou"
                                onPress = {this.unPied}
                            />
                    </View>
                        <View style={styles.viewOneButton}>
                            <Button 
                            title="Chou-Fleur"
                            onPress = {this.demiPied}
                            />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    viewGeneral: {
        flex: 1,
        //flexDirection: 'colum',
       backgroundColor: '#F2EBBF'
        
        
    },
    viexTitre:{
        flex: 1,
        alignItems: 'center',
        
    },
    viewbutton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    viewOneButton: {
        flex: 1,
        alignItems: 'center',
        height: 50,
        width: 40,
    },
    viewChaussur:{
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonleft: {
        flex: 1,
        
        color:"#2196F3"
    },
    buttonRight: {
        flex: 1,
        color:"#2196F3"
    },
    chaussurImage: {
        width: 50,
        height: 50
    }
})
export default Game
