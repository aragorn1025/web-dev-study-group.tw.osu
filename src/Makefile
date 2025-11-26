# -------------------------------------------------------------
# Docker Compose Version Portability Check
# -------------------------------------------------------------
ifneq ($(shell docker compose version 2>/dev/null),)
    DOCKER_COMPOSE=docker compose
else
    DOCKER_COMPOSE=docker-compose
endif

COMPOSE_FILE ?= docker-compose.yaml

.DEFAULT_GOAL := help

# -------------------------------------------------------------
# Core Commands
# -------------------------------------------------------------

# Forces a rebuild of all service images
build:
	$(DOCKER_COMPOSE) -f $(COMPOSE_FILE) build
.PHONY: build

# Starts all services, building images only if missing.
up:
	$(DOCKER_COMPOSE) -f $(COMPOSE_FILE) up -d
.PHONY: up

# Stops and removes all containers, networks, and local images. 
down:
	$(DOCKER_COMPOSE) -f $(COMPOSE_FILE) down --rmi local
.PHONY: down

# Stops and completely removes all containers, networks, volumes, and local images.
# WARNING: This deletes persistent data!
clean:
	$(DOCKER_COMPOSE) -f $(COMPOSE_FILE) down -v --rmi local --remove-orphans
.PHONY: clean

# -------------------------------------------------------------
# Utility Commands
# -------------------------------------------------------------

# Views real-time logs.
logs:
	$(DOCKER_COMPOSE) -f $(COMPOSE_FILE) logs -f $(SERVICES)
.PHONY: logs

help:
	@echo "Usage: make [command]"
	@echo ""
	@echo "Core commands:"
	@echo "  build  - Rebuilds all service images."
	@echo "  up     - Starts all services."
	@echo "  down   - Stops all services."
	@echo "  clean  - Stops and removes all resources. (WARNING: Deletes data!)"
	@echo ""
	@echo "Utility:"
	@echo "  logs   - Views real-time logs (Filter with SERVICES=\"<names>\")."
.PHONY: help
