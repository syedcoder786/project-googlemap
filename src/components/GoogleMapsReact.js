import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';

export class GoogleMapsReact extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        center: {
            lat: 28.80718782681843,
            lng: 79.01689975887584
          },
          zoom:17
      };

      
      onMarkerClick = (props, marker, e) => {
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
      }
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };

  render() {
    return (
        <div>
        <center>
            <h2>Googole Maps React API</h2>
        </center>
        <br/>
            <Map google={this.props.google}
                style={{height: '60vh', width: '50%', left:'25%'}}
                onClick={this.onMapClicked}
                initialCenter = {this.state.center}
                zoom={this.state.zoom}
            >
            <Marker onClick={this.onMarkerClick}
                name={'Destination Location'}
                position={this.state.center} 
            />

            <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
            </Map>
        </div>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyD0Q6on6MpYVSp0KUE3473zUKoYJAiQVOg'), // alex hetachi id api key
    // LoadingContainer: LoadingContainer
  })(GoogleMapsReact)