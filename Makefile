# Default shell
SHELL := /bin/bash

# Default goal
.DEFAULT_GOAL := never

# Goals
.PHONY: audit
audit: audit_npm

.PHONY: audit_npm
audit_npm: ./package-lock.json
	npm audit --audit-level info --include prod --include dev --include peer --include optional

.PHONY: check
check: lint audit

.PHONY: clean
clean:
	git clean -xfd ./node_modules ./package-lock.json

.PHONY: development
development: install

.PHONY: distclean
distclean: clean
	git clean -xfd

.PHONY: fix
fix: fix_eslint fix_prettier

.PHONY: fix_eslint
fix_eslint: ./node_modules/.bin/eslint
	./node_modules/.bin/eslint --fix .

.PHONY: fix_prettier
fix_prettier: ./node_modules/.bin/prettier
	./node_modules/.bin/prettier -w .

.PHONY: install
install: install_npm

.PHONY: install_npm
install_npm:
	npm install --install-links --include prod --include dev --include peer --include optional

.PHONY: lint
lint: lint_eslint lint_prettier

.PHONY: lint_eslint
lint_eslint: ./node_modules/.bin/eslint
	./node_modules/.bin/eslint .

.PHONY: lint_prettier
lint_prettier: ./node_modules/.bin/prettier
	./node_modules/.bin/prettier -c .

.PHONY: local
local: install

.PHONY: production
production: install

.PHONY: staging
staging: install

.PHONY: testing
testing: install

.PHONY: update
update: update_npm

.PHONY: update_npm
update_npm:
	npm update --install-links --include prod --include dev --include peer --include optional

# Dependencies
./node_modules ./node_modules/.bin/eslint ./node_modules/.bin/prettier ./package-lock.json:
	npm install --install-links --include prod --include dev --include peer --include optional
