.PHONY: up-all down down_hard lint

up-all:
	@echo "Levantando contenedores... 🚀"
	docker compose up --build


down:
	@echo "Bajando contenedores... 🛑"
	docker compose down

# down + volumenes
down_hard:
	@echo "Bajando contenedores y borrando volúmenes... 💥"
	docker compose down -v

#linters
lint:
	@echo "--- Pasando linters del Frontend ---"
	docker compose exec frontend npm run lint
	docker compose exec frontend npm run format

	@echo "\n--- Pasando linters del Backend ---"
	docker compose exec backend ruff check . --fix
	docker compose exec backend ruff format .
