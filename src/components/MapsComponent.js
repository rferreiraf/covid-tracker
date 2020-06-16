import React from "react";

import GoogleMapReact from "google-map-react";

import { getKey } from "../API/googlekey.js";

const key = getKey();

export const MapsComponent = ({
  latLong,
  countriesListLocations,
  onCLickIconMap,
}) => {
  if (key) {
    return (
      <div>
        <div className="map-show">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: key,
            }}
            center={latLong}
            defaultZoom={4}
          >
            {countriesListLocations}
          </GoogleMapReact>
        </div>
      </div>
    );
  } else {
    return <div>Wait for key</div>;
  }
};
