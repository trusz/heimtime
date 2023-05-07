.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

dev: install ## Start Heimtime in dev mode
	pnpm -C packages/app dev

install: ## Install all dependencies
	pnpm install

uilib: install ## Start uilib
	pnpm -C packages/uilib uilib
    
