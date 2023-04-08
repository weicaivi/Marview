import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  ZoomControl,
  LayersControl,
  LayerGroup,
  Popup,
  FeatureGroup,
  Marker,
} from "react-leaflet";
import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
import { PageContainer, MapTileLayer } from "./styles/product_style.js";
import TemperatureLegend from "../components/legend_temp.js";
import { testPoints } from "./testpoints.js";

// CODE BELOW CAN BE USED TO CREATE A DYNAMIC RECTANGLE ON MAP

// import {
//   createElementObject,
//   createPathComponent,
//   extendContext,
// } from "@react-leaflet/core";
// import L from "leaflet";

// function getBounds(props) {
//   return L.latLng(props.center).toBounds(props.size);
// }

// function createSquare(props, context) {
//   const square = new L.Rectangle(getBounds(props));
//   return createElementObject(
//     square,
//     extendContext(context, { overlayContainer: square })
//   );
// }

// function updateSquare(instance, props, prevProps) {
//   if (props.center !== prevProps.center || props.size !== prevProps.size) {
//     instance.setBounds(getBounds(props));
//   }
// }

// const Square = createPathComponent(createSquare, updateSquare);

function Product() {
  // const API_KEY = "06aac0fd4ba239a20d824ef89602f311"; /* api key that works */
  const API_KEY = "e6d8c9c20269bd6d193a610ab4f7d761"; /* my api key */
  const center = [39.1, -76.1];

  return (
    <PageContainer>
      <MapContainer
        center={center}
        zoom={7}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <MapTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        />
        <LayersControl position="topleft">
          <LayersControl.Overlay name="Precipitation">
            <TileLayer
              url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Clouds">
            <TileLayer
              url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Temperature">
            <LayerGroup>
              <TileLayer
                url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
              />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Wind">
            <TileLayer
              url={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Pressure">
            <TileLayer
              url={`https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Heatmap">
            <HeatmapLayer
              // fitBoundsOnLoad
              // fitBoundsOnUpdate
              points={testPoints}
              longitudeExtractor={(m) => m[1]}
              latitudeExtractor={(m) => m[0]}
              intensityExtractor={(m) => parseFloat(m[2])}
            />
          </LayersControl.Overlay>
        </LayersControl>
        <ZoomControl position="topright" />
        {/* <TemperatureLegend /> */}
        {/* <Square center={center} size={100000}>
          <Popup>Hello Popup</Popup>
        </Square> */}
      </MapContainer>
    </PageContainer>
  );
}

export default Product;
