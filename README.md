# The Shop
A democase for gaining application insights with Grafana, Prometheus and K6

## Getting Started
Start the docker containers:
```bash
docker compose up --build -d
```

Start the backend with gradle:
```bash
./gradlew bootRun -Dspring-boot.run.jvmArguments="-Xmx2g -Xms2g"
```

## Urls:
OpenAPI specification is available at `http://localhost:8080/api/v1/docs`

Prometheus Metrics are exposed via actuator at `http://localhost:8080/actuator/prometheus`

Prometheus can be reached at `http://localhost:9090`, target status can be seen at `http://localhost:9090/targets`

Grafana can be reached at `http://localhost:3000` with the default credentials `admin` and `secret`