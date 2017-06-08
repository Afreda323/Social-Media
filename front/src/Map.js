import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux';
import * as actions from './actions';
import geolocator from 'geolocator';
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMap: false,
      center: {lat: '', lng: ''}
    };
    this.verifyGeo = this.verifyGeo.bind(this);
  }
  componentDidMount() {
    this.verifyGeo();
  }
  verifyGeo() {
    geolocator.config({
      language: 'en',
      google: {
        key: 'AIzaSyCYUjdISCd1KAhpstLOJpKPG1EfkXg-Scw'
      }
    });
    var options = {
      enableHighAccuracy: true,
      desiredAccuracy: 30,
      timeout: 5000,
      maximumWait: 10000,
      fallbackToIP: true,
      addressLookup: true
    };
    let self = this;
    geolocator.locate(options, function(err, location) {
      if (!err) {
        self.setState(
          {
            center: {
              lat: location.coords.latitude,
              lng: location.coords.longitude
            }
          },
          () => self.props.getLocation(location.address.postalCode)
        );
      }
    });
  }
  renderMap() {
    if (this.state.center.lat && this.state.center.lng && this.props.isLogged) {
      return (
        <div className="map">
          <GoogleMapReact
            defaultCenter={this.state.center}
            defaultZoom={16}
            bootstrapURLKeys={{key: 'AIzaSyCYUjdISCd1KAhpstLOJpKPG1EfkXg-Scw'}}
          />
        </div>
      );
    }
  }
  static defaultProps = {
    zoom: 11
  };
  render() {
    return (
      <div>
        {this.renderMap()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {isLogged: state.auth.isLogged};
}
export default connect(mapStateToProps, actions)(Map);
