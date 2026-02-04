---
title: "Replace Google with These 7 Self-Hosted Apps (Working Docker Configs Included)"
description: "Complete Docker Compose setups for Nextcloud, Immich, Vaultwarden, Umami, Navidrome, and more. Stop renting your digital life."
tags: [self-hosting, Docker, privacy, homelab, open-source]
source_product: "The Self-Hosting Survival Guide"
product_url: "https://therookai.gumroad.com/l/self-hosting-guide"
canonical_ready: true
---

# Replace Google with These 7 Self-Hosted Apps (Working Docker Configs Included)

Let's add up what you're probably paying monthly for cloud services:

| Service | Monthly Cost |
|---|---|
| Google One (200GB) | £2.49 |
| Notion (Plus) | £7.50 |
| Slack (Pro) | £5.75 |
| LastPass Premium | £2.50 |
| Spotify Premium | £10.99 |
| Email (Google Workspace) | £4.14 |
| Photo storage | £2.49 |
| **Total** | **~£36/month (£432/year)** |

A decent mini PC costs £150. A domain costs £10/year. Electricity runs about £3/month. That's £196 for your first year, under £50/year after that. You break even in six months.

But it's not just about the money. Every photo you upload to Google trains their AI. Every note in Notion lives on someone else's server, subject to their pricing whims. When you self-host, your data lives on hardware you control.

Here are seven services you can replace today, with working Docker Compose configs you can copy-paste.

## 1. Google Drive → Nextcloud

**Difficulty:** ⭐⭐ Moderate

```yaml
services:
  nextcloud:
    image: nextcloud:29
    container_name: nextcloud
    restart: unless-stopped
    volumes:
      - ./data:/var/www/html
    environment:
      - POSTGRES_HOST=nextcloud-db
      - POSTGRES_DB=nextcloud
      - POSTGRES_USER=nextcloud
      - POSTGRES_PASSWORD=changeme_use_a_real_password
    depends_on:
      - nextcloud-db

  nextcloud-db:
    image: postgres:16-alpine
    container_name: nextcloud-db
    restart: unless-stopped
    volumes:
      - ./db:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=nextcloud
      - POSTGRES_USER=nextcloud
      - POSTGRES_PASSWORD=changeme_use_a_real_password
```

**Gotchas:** Use PostgreSQL, not SQLite (the default). SQLite buckles under real usage. Mobile and desktop sync clients are solid. Enable server-side encryption for sensitive files.

## 2. Google Photos → Immich

**Difficulty:** ⭐⭐ Moderate

Immich is the standout self-hosted project of the past two years. It looks and feels like Google Photos: mobile auto-upload, facial recognition, maps, memories.

```yaml
services:
  immich-server:
    image: ghcr.io/immich-app/immich-server:release
    container_name: immich-server
    restart: unless-stopped
    volumes:
      - ./upload:/usr/src/app/upload
    environment:
      - DB_HOSTNAME=immich-db
      - DB_USERNAME=postgres
      - DB_PASSWORD=changeme
      - DB_DATABASE_NAME=immich
      - REDIS_HOSTNAME=immich-redis
    depends_on:
      - immich-db
      - immich-redis

  immich-machine-learning:
    image: ghcr.io/immich-app/immich-machine-learning:release
    container_name: immich-ml
    restart: unless-stopped
    volumes:
      - ./model-cache:/cache

  immich-redis:
    image: redis:7-alpine
    container_name: immich-redis
    restart: unless-stopped

  immich-db:
    image: tensorchord/pgvecto-rs:pg16-v0.2.0
    container_name: immich-db
    restart: unless-stopped
    volumes:
      - ./db:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=changeme
      - POSTGRES_USER=postgres
      - POSTGRES_DB=immich
```

**Gotchas:** The ML container wants 2-4GB RAM for facial recognition. First-time indexing pegs your CPU for hours; let it run overnight. Mobile apps (iOS/Android) are excellent.

## 3. LastPass → Vaultwarden

**Difficulty:** ⭐ Easy

The easiest win on this list. Vaultwarden is an unofficial Bitwarden-compatible server that uses a fraction of the resources.

```yaml
services:
  vaultwarden:
    image: vaultwarden/server:latest
    container_name: vaultwarden
    restart: unless-stopped
    volumes:
      - ./data:/data
    environment:
      - DOMAIN=https://vault.yourdomain.com
      - SIGNUPS_ALLOWED=false
```

Set `SIGNUPS_ALLOWED=true` to create your account, then switch to `false`. Use the official Bitwarden browser extensions and mobile apps; they work perfectly. **Back this up religiously.** If you lose your vault, you lose everything.

## 4. Google Analytics → Umami

**Difficulty:** ⭐ Easy

```yaml
services:
  umami:
    image: ghcr.io/umami-software/umami:postgresql-latest
    container_name: umami
    restart: unless-stopped
    environment:
      - DATABASE_URL=postgresql://umami:changeme@umami-db:5432/umami
    depends_on:
      - umami-db

  umami-db:
    image: postgres:16-alpine
    container_name: umami-db
    restart: unless-stopped
    volumes:
      - ./db:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=umami
      - POSTGRES_USER=umami
      - POSTGRES_PASSWORD=changeme
```

Privacy-focused and GDPR-compliant out of the box. No cookie banner needed. Default login is `admin`/`umami`; change it immediately.

## 5. Spotify → Navidrome

**Difficulty:** ⭐ Easy

```yaml
services:
  navidrome:
    image: deluan/navidrome:latest
    container_name: navidrome
    restart: unless-stopped
    ports:
      - "4533:4533"
    volumes:
      - ./data:/data
      - /path/to/your/music:/music:ro
    environment:
      - ND_SCANSCHEDULE=1h
      - ND_LOGLEVEL=info
```

You need your own music files (FLAC, MP3). Navidrome supports the Subsonic API, so you can use Symfonium (Android) or play:Sub (iOS). It replaces Spotify's playback of music you already own, not the discovery features.

## 6. Notion → Outline

**Difficulty:** ⭐⭐⭐ Moderate-Hard

```yaml
services:
  outline:
    image: docker.getoutline.com/outlinewiki/outline:latest
    container_name: outline
    restart: unless-stopped
    environment:
      - DATABASE_URL=postgres://outline:changeme@outline-db:5432/outline
      - REDIS_URL=redis://outline-redis:6379
      - URL=https://wiki.yourdomain.com
      - SECRET_KEY=generate-a-64-char-hex-string
      - UTILS_SECRET=generate-another-64-char-hex-string
      - FILE_STORAGE=local
    depends_on:
      - outline-db
      - outline-redis

  outline-db:
    image: postgres:16-alpine
    container_name: outline-db
    restart: unless-stopped
    volumes:
      - ./db:/var/lib/postgresql/data
    environment:
      - POSTGRES_USER=outline
      - POSTGRES_PASSWORD=changeme
      - POSTGRES_DB=outline

  outline-redis:
    image: redis:7-alpine
    container_name: outline-redis
    restart: unless-stopped
```

**Gotchas:** Outline requires an authentication provider (OIDC). You'll need Authentik or Keycloak, which adds complexity. **AppFlowy** is a simpler alternative if you don't need multi-user collaboration.

## 7. Slack → Matrix/Element

**Difficulty:** ⭐⭐⭐ Moderate-Hard

Matrix is the protocol; Element is the client; Synapse is the server. Federated, meaning you can chat with anyone on any Matrix server.

```yaml
services:
  synapse:
    image: matrixdotorg/synapse:latest
    container_name: synapse
    restart: unless-stopped
    volumes:
      - ./data:/data
    environment:
      - SYNAPSE_SERVER_NAME=yourdomain.com
      - SYNAPSE_REPORT_STATS=no
```

**Gotchas:** Synapse (Python) is resource-hungry. Consider **Conduit** or **Dendrite** (Rust/Go) for lighter alternatives. For a private family/team server, disable federation to save resources.

## The Foundation You Need First

Before installing any of these, you need three things:

### 1. A Reverse Proxy (Caddy)

Maps `nextcloud.yourdomain.com` to `localhost:8080`, handles SSL automatically via Let's Encrypt.

```
nextcloud.yourdomain.com {
    reverse_proxy nextcloud:80
}

photos.yourdomain.com {
    reverse_proxy immich-server:2283
}
```

That's the entire config file. Caddy fetches and renews SSL certificates automatically.

### 2. Docker & Docker Compose

Every service above runs in Docker. Install the official way:

```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
```

### 3. Backups (Non-Negotiable)

3 copies of your data, on 2 different media types, with 1 offsite. Restic + Backblaze B2 at $0.005/GB/month. For 100GB, that's $0.50/month.

## When NOT to Self-Host

- **Email.** Self-hosted email is a nightmare. Your IP will be blacklisted. SPF, DKIM, and DMARC must be perfect. Use Fastmail (£4/month).
- **When you won't maintain it.** An unpatched server is worse than no server.
- **When you need five-nines uptime.** Pay for managed services.

Self-hosting is brilliant when you treat it as a hobby that saves money. It's a disaster when you treat it as a chore you resent.

---

## Want the Complete Guide?

This article covers 7 services. The full **Self-Hosting Survival Guide** covers everything:

- Hardware recommendations (Raspberry Pi to VPS to mini PC, with specific models)
- The complete foundation stack (Linux, Docker, Caddy, SSL, backups in detail)
- 12+ service replacements with working configs and honest difficulty ratings
- Security hardening: firewalls, fail2ban, SSH keys, automatic updates
- Remote access: Tailscale, Cloudflare Tunnel, WireGuard
- Monitoring with Uptime Kuma and Grafana
- The services you should *never* self-host (and why)

**[Get the Self-Hosting Survival Guide →](https://therookai.gumroad.com/l/self-hosting-guide)**

*Stop renting your digital life. Own it.*
