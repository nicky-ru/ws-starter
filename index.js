import { W3bstreamClient } from "w3bstream-client-js";
import "dotenv/config";

import devices from "./devices.json" assert { type: "json" }

const URL = process.env.URL;
const API_KEY = process.env.API_KEY;

const client = new W3bstreamClient(URL, API_KEY);

const events = devices.map(({id, lat, lng}) => {
  const header = {
    device_id: id,
  };
  const payload = {
    latitude: lat,
    longitude: lng,
  };
  return { header, payload };
});

client.publishEvents(events).subscribe((res) => {
  console.log(res.data.length);
});