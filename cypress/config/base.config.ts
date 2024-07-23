interface ConfigInterface {
    baseUrl: string,
    credentials: { username: string, password: string },
}

const config: ConfigInterface = {
    baseUrl: "https://testnet.binancefuture.com/en/futures/BTCUSDT",
    credentials: {
        username: Cypress.env("TEST_USERNAME") || "admin",
        password: Cypress.env("TEST_PASSWORD") || "admin",
    }
}
export default config