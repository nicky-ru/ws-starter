import { W3bstreamClient } from "w3bstream-client-js";
import "dotenv/config";

import devices from "./devices.json" assert { type: "json" }

const URL = process.env.URL;
const API_KEY = process.env.API_KEY;

// Optional configuration, adjust to your needs:
// If server response is slow or results in 5xx, decrease this value
const BATCH_MAX = 1000;
// If server response is slow or results in 5xx, increase this value
const INTERVAL_MS = 1000;

const client = new W3bstreamClient(URL, API_KEY, {
  batchMax: BATCH_MAX,
  publishIntervalMs: INTERVAL_MS,
});

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