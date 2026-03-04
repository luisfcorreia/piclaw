# skel/Makefile – Skeleton Makefile for new projects created by /skill:setup.
#
# Provides stub targets (install, lint, test, check, clean) that the user
# fills in for their project. Copied into new project directories.

SHELL := /bin/sh

.DEFAULT_GOAL := help

IMAGE ?= $(notdir $(CURDIR))
TAG ?= latest
FULL_IMAGE := $(IMAGE):$(TAG)

.PHONY: help
help: ## Show targets
	@grep -E '^[a-zA-Z0-9_.-]+:.*?##' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "%-18s %s\n", $$1, $$2}'

.PHONY: install
install: ## Install project dependencies
	@echo "No install target defined yet. Customize this Makefile." && exit 1

.PHONY: lint
lint: ## Run linters
	@echo "No lint target defined yet. Customize this Makefile." && exit 1

.PHONY: test
test: ## Run tests
	@echo "No test target defined yet. Customize this Makefile." && exit 1

.PHONY: check
check: ## Run standard validation pipeline
	@$(MAKE) lint && $(MAKE) test

.PHONY: clean
clean: ## Remove local build/test artifacts
	@echo "No clean target defined yet. Customize this Makefile." && exit 1
