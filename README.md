# SMS Sending API with Express and AfricasTalking

This project is a simple API built using **Node.js** written in **typescript** and **Express** that allows sending SMS messages via the **AfricasTalking** SMS service.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Running the Project](#running-the-project)
- [AfricasTalking Setup](#africastalking-setup)

## Requirements

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [TypeScript](https://www.typescriptlang.org/) (v5 or higher)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Anthony11-hub/sms-sending-api.git
   cd sms-sending-api
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Compile the TypeScript code:

   ```bash
   npm run build
   ```

## Project Structure

```
sms-sending-api/
│ ├── src/
| │ ├── routes/
│ │ └── ├── smsRoutes.ts # SMS routes using AfricasTalking
│ └── index.ts # Server entry point
├── dist/ # Compiled JavaScript files
├── tsconfig.json # TypeScript configuration
├── package.json
└── README.md
```

## API Endpoints

### POST /sms

Send an SMS message to a recipient.

### Request

- **POST /sms**
- Request body should contain:

  ```bash
  {
  "to": "+254712345678",
  "message": "Your message content"
  }

  ```

### Response

- **200 OK**: If the SMS was sent successfully.
- **500 Internal Server Error**: If there was an issue sending the SMS.

### Example

```bash
curl -X POST http://localhost:4000/sms \
-H "Content-Type: application/json" \
-d '{"to": "+254712345678", "message": "Hello, this is a test message!"}'

```

## Running the Project

To start the development server, run:

```bash
npm run dev
```

This will start the server at **http://localhost:4000**

## AfricasTalking Setup

- Sign up for an AfricasTalking account at https://africastalking.com/.
- Generate an API key from the dashboard under Settings.
- For testing, use the default **sandbox** username and configure your sandbox environment to send SMS.

### Sending SMS in Production

- Once you're ready to go live, switch from **sandbox** to your live AfricasTalking username.
- Set up your sender ID in the AfricasTalking dashboard to use a custom sender name.

### Additional Note:

Make sure to also include a `tsconfig.json` file in your project to configure TypeScript options.
