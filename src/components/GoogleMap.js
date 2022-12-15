import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = (props) => <img src="./mapmarker1.png" alt="" style={{height:'3vh',width:'3vh'}} />;
 
export class MapContainer extends Component {
  // static defaultProps = {
  //   center: {
  //     lat: 28.783001,
  //     lng: 79.017502
  //   },
  //   zoom: 11
  // };
  state = {
    center: {
      lat: 28.80718782681843,
      lng: 79.01689975887584
    },
    zoom: 15
  }
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD0Q6on6MpYVSp0KUE3473zUKoYJAiQVOg' }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={28.80718782681843}
            lng={79.01689975887584}
            // text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default MapContainer;