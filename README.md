# ws-starter

A starter project for W3bstream, designed to facilitate easy integration and setup for developers.

## Installation

To get started, clone this repository and install the necessary dependencies:

```bash
npm install
```

## Setting Up Environment Variables

Configure your environment variables:

```bash
cp .env.template .env
```

### Obtaining an API Token

1. Access the [W3bstream Studio](https://devnet.w3bstream.com/).
2. Navigate to your account settings in the upper right corner.
3. In `Settings`, generate an API token. Ensure you have "Event" read and write permissions enabled.

### Acquiring the HTTP Route

1. In your W3bstream project, go to the `Events` section.
2. Copy the HTTP Route from here for further use.

## Configuring Data

1. Replace the `devices.json` file with your own device data.
2. Ensure to update the import statement in `index.js` to reflect the new file name.

## Running the Project

To launch the project, execute:

```bash
npm start
```
