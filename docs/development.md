# Development

## Build from source

> Source builds are primarily for development and local testing.

```bash
make build
make up
```

The compose stack passes `PUID` / `PGID` by default (`1000:1000`). To match the container `agent` user/group to your host user:

```bash
PUID=$(id -u) PGID=$(id -g) make up
```

The default compose container name is `pibox`:

```bash
docker exec -u agent -it pibox bash
cd /workspace && pi
```

## Build targets

Run build/package commands from the **repo root**:

```bash
make build-piclaw    # full build: vendor bundle + web assets + TypeScript
make vendor          # rebuild vendored assets
make lint            # ESLint
make test            # full test suite
make ci-fast         # canonical fast CI guardrails + web build
make local-install   # pack and install piclaw globally (no restart)
make restart         # restart piclaw via the detected service manager
```

## Testing

The implementation lives under `runtime/`, so direct Bun test runs should target that subtree. Sequential mode is recommended for SQLite safety:

```bash
cd runtime && bun test --max-concurrency=1
```

## Layout

See [architecture.md](architecture.md) for the full source layout and module boundaries.
