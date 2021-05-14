export const environment = {
    production: false,
    apiBaseUrl: "https://testqbotd.azurewebsites.net/api/Request/",
    selfUrl: "https://testqbotd-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "efb8be03-af30-4722-8b7b-e9edaa03cf98",
        clientId: "78020b6a-cae7-445c-8bd7-136cae16b3f9",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
