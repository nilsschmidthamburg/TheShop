# The Shop
A democase for gaining application insights from a Spring Boot App using: Grafana, Prometheus and K6

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

To run the tests, execute the following command:

```bash
k6 run loadtests/loadtest.js
```

# Further reading
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Spring Boot Actuator](https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html)
- [Prometheus](https://prometheus.io/docs/introduction/overview/)
- [Grafana](https://grafana.com/docs/grafana/latest/getting-started/getting-started-prometheus/)
- [Grafana Dashboards](https://grafana.com/grafana/dashboards)
- [K6](https://k6.io/docs/)
- [OpenAPI](https://swagger.io/docs/specification/about/)
- [Docker](https://docs.docker.com/get-started/)
- [Docker Compose](https://docs.docker.com/compose/)