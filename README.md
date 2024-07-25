# cypress-automation-binance
 Example of automation tests written using Cypress with Typescript for a Binance test website

# Requirements
The project was built on macOS with M2 chipset and node: `22.3.0` and npm: `10.8.1`.

# Installation
```bash
npm install
```

# Running Tests
```bash
 npx cypress open --env TEST_USERNAME=<YOUR_LOGIN>,TEST_PASSWORD=<YOUR_PASSWORD>
```
Replace `<YOUR_LOGIN>` and `<YOUR_PASSWORD>` with appropriate credentials.
Keep in mind that you need to resolve Captcha manually after test scenario provides credentials and clicks Login.
