# The Shop
A democase for gaining application insights with Grafana, Prometheus and K6

## Getting Started
Start the docker containers:
```bash
docker compose up --build -d
```

Start the backend with gradle:
```bash
./gradlew bootRun
```

## Urls:
OpenAPI specification is available at `http://localhost:8080/api/v1/docs`

Prometheus Metrics are exposed via actuator at `http://localhost:8080/actuator/prometheus`

Prometheus can be reached at `http://localhost:9090`, target status can be seen at `http://localhost:9090/targets`

Grafana can be reached at `http://localhost:3000` with the default credentials `admin` and `secret`

## Load- & Performance Testing with K6
There is a very basic K6 scripts available at `load-test.js`. To run the tests, you need to have K6 installed on your
machine.

This can be done by running `brew install k6` on MacOS. For other operating systems, please refer to the official K6 documentation.

To run the tests, execute the following command in the `load-test` folder:

```bash
k6 run load-test.js
```
