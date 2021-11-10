import React, {Component} from "react";
import {Text, View} from 'react-native'
import { Card } from "react-native-elements";
import {CAMPSITES} from "../shared/campsites"


//Using destructured property of campsite object
//if true/ if it is a campsite return the card if not return the View
function RenderCampsite ({campsite}) {
    if (campsite) {
        return(
            <Card 
                featureTitle={campsite.name}
                image={require('./images/react-lake.jpg')}>
                <Text style={{margin:10}}>
                    {campsite.description}
                </Text>
            </Card>
        )
    }
    return <View />
}
class CampsiteInfo extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            campsites: CAMPSITES
        }
    }

    staticNavigationOptions = {
        title: 'Campsite Information'
    }

    render(){// Whats happening here?
        const campsiteId = this.props.navigation.getParam('campsiteId')
        const campsite = this.state.campsites.filter(campsite => campsite.id === campsiteId)[0];
        return <RenderCampsite campsite={campsite} /> //
    }
}


export default CampsiteInfo