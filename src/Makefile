ifneq ($(shell docker compose version 2>/dev/null),)
    DOCKER_COMPOSE=docker compose
else
    DOCKER_COMPOSE=docker-compose
endif

COMPOSE_FILE ?= docker-compose.yaml

up:
	$(DOCKER_COMPOSE) -f $(COMPOSE_FILE) up -d
.PHONY: up

down:
	$(DOCKER_COMPOSE) -f $(COMPOSE_FILE) down --rmi local
.PHONY: down
