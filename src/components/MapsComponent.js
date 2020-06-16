import React from "react";

import GoogleMapReact from "google-map-react";

export const MapsComponent = ({
  latLong,
  countriesListLocations,
  onCLickIconMap,
}) => {
  return (
    <div>
      <div className="map-show">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAE36AZRkueaiimm2BekEKhBlu2kN7Z96U",
          }}
          center={latLong}
          defaultZoom={4}
        >
          {countriesListLocations}
        </GoogleMapReact>
      </div>
    </div>
  );
};
