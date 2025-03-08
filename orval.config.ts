import { defineConfig } from "orval";

export default defineConfig({
    yourEvent: {
        input: "http://localhost:8080/v3/api-docs",
        output: {
            target: "./src/http/your-event-backend.ts",
            client: "fetch",
            httpClient: "fetch",
            clean: true,
            baseUrl: "http://localhost:8080",
            override: {
                fetch: {
                    includeHttpResponseReturnType: false,
                },
            },
        },
    },
});
