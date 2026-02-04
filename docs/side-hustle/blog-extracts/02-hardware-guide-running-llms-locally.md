---
title: "The Complete Hardware Guide for Running LLMs Locally (2025 Edition)"
description: "From £130 mini PCs to RTX 3090 builds: exactly what hardware you need to run AI models on your own machine, at every budget."
tags: [AI, LLM, hardware, local AI, self-hosting, privacy]
source_product: "The Complete Local LLM Handbook"
product_url: "https://therookai.gumroad.com/l/local-llm-handbook"
canonical_ready: true
---

# The Complete Hardware Guide for Running LLMs Locally (2025 Edition)

Every prompt you send to ChatGPT travels to someone else's computer, gets processed on someone else's GPU, and passes through someone else's content filters. Your data becomes training fodder for the next model version.

Running models locally means your data never leaves your machine. No terms of service. No data retention policies. No per-token billing. A one-time investment of £400-800 in hardware gives you unlimited inference forever.

The barrier to entry has collapsed. A £400 mini PC now runs models that rival GPT-3.5. Here's exactly what to buy at every budget.

## How LLMs Actually Use Your Hardware

Before spending money, understand what you're buying and why.

LLMs are enormous matrices of numbers (called **weights**). When you run a model, your hardware loads these weights into memory and performs billions of mathematical operations to generate each token.

**Memory capacity** determines which models you can load. A 7B parameter model at 4-bit precision needs ~4-5 GB. A 70B model needs 35-40 GB. If it doesn't fit, it either won't load or offloads to disk (unusably slow).

**Memory bandwidth** determines how fast tokens are generated. This is the single most important spec:

| Memory Type | Bandwidth | Context |
|---|---|---|
| DDR5 RAM | 50-80 GB/s | CPU inference |
| Apple M4 Unified | ~120 GB/s | Mac inference |
| RTX 3090 GDDR6X | 936 GB/s | GPU inference |

This is why GPU inference is 10-20x faster than CPU: not compute power, but memory bandwidth.

## Budget Tiers

### £200 Tier: "Getting Started"

**Best option: Used office PC + GPU.** A Dell OptiPlex or Lenovo ThinkCentre from eBay (£80-120) paired with a used Tesla P40 24GB (£80-100). The P40 is a hidden gem: 24 GB of VRAM for under £100. It needs an aftermarket cooler and the right PSU connector. Ugly, loud, astonishingly capable.

**Alternative: Beelink EQ12 (Intel N100).** £130-160. 16 GB DDR5. Runs 7B models on CPU at ~5-8 tokens/second. Fanless, tiny, sips power. Good for experimentation but you'll outgrow it.

### £400 Tier: "The Sweet Spot"

This is where local AI gets genuinely useful.

**Minisforum UM780 XTX** (~£350-400 barebones). AMD Ryzen 7 7840HS with Radeon 780M iGPU. Supports up to 64 GB DDR5-5600. Handles 7B-14B models comfortably at 10-15 tok/s. Two M.2 slots, USB4. The mini PC I'd recommend to most people.

**AOOSTAR GEM12** (~£350-400). AMD Ryzen 9 6900HX with **OCuLink port**. This matters because you can add an external GPU later without Thunderbolt overhead. If you think you might want a GPU path in the future, this is the one to buy.

Pair either with 32 GB DDR5 (£60-80) and you're under £500 all-in.

### £800 Tier: "No Compromises"

**Mac Mini M2 Pro 32GB** (refurbished £700-800). Apple's unified memory architecture is genuinely special. 32 GB accessible to both CPU and GPU at 200 GB/s. Runs 14B-30B models with the best tokens-per-pound ratio at this price.

**Mac Mini M4 Pro 48GB** (£999 new). The ultimate local LLM machine for most users. Runs quantised 70B models comfortably. 273 GB/s bandwidth.

**RTX 3090 24GB** (used £550-700). The king of consumer local LLM. 24 GB GDDR6X at 936 GB/s. Runs quantised 30B models on GPU. Needs a 750W+ PSU and a big case. 80% of the RTX 4090's performance at 40% of the price.

## Right Model for Your RAM

Not sure what your hardware can actually run? Here's the cheat sheet:

| Available Memory | Best Model (Q4_K_M) | Tokens/sec (CPU) | Tokens/sec (GPU) |
|---|---|---|---|
| 4 GB | Phi-3 Mini 3.8B | 6-10 | 25-40 |
| 8 GB | Llama 3.1 8B | 8-12 | 30-50 |
| 12 GB VRAM | Qwen 2.5 14B | — | 25-40 |
| 16 GB | Qwen 2.5 14B | 5-8 | — |
| 24 GB VRAM | DeepSeek-R1 32B | — | 20-35 |
| 32 GB | Qwen 2.5 32B | 3-6 | — |
| 48 GB | Llama 3.1 70B | 2-4 | — |

**The quantisation rule:** Use Q4_K_M unless you have a specific reason not to. It offers 95%+ of the original model's capability at roughly a quarter of the memory.

## The 5-Minute Setup

Once you have hardware, getting a model running takes minutes:

```bash
# Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Run your first model
ollama run llama3.1:8b
```

That's it. Type a prompt and it responds. Ollama handles model downloading, quantisation selection, and serving. It also exposes an OpenAI-compatible API on `localhost:11434`, so any tool that supports the OpenAI API can point at your local model.

## The eGPU Path

Already have a mini PC and want to add GPU acceleration later?

**OCuLink** is the preferred connection: a direct PCIe x4 link with ~85-90% of native performance. The AOOSTAR GEM12 supports it. Pair an OCuLink enclosure (£30-60) with a desktop GPU.

**Thunderbolt 3/4 eGPU enclosures** work but expect 70-80% of native performance. For LLM inference (streaming weights, not real-time rendering), the bottleneck is less painful than for gaming.

## Hardware Comparison at a Glance

| Hardware | Price (£) | Memory | Best Model Size | Tok/s |
|---|---|---|---|---|
| Intel N100 Mini PC | 130-160 | 16 GB DDR5 | 7B | 5-8 |
| Minisforum UM780 XTX | 350-450 | 32-64 GB DDR5 | 14B-32B | 8-15 |
| Mac Mini M2 Pro 32GB | 700-800 | 32 GB Unified | 14B-30B | 12-20 |
| Mac Mini M4 Pro 48GB | 999 | 48 GB Unified | 30B-70B | 15-25 |
| Desktop + RTX 3060 12GB | 400-550 | 12 GB VRAM | 8B-13B | 30-50 |
| Desktop + RTX 3090 24GB | 700-900 | 24 GB VRAM | 14B-30B | 40-70 |
| Tesla P40 (used) | 80-100 | 24 GB VRAM | 14B-30B | 15-25 |

## The Cost Comparison

A moderate ChatGPT Plus user pays £192/year. A developer using the API might spend £360-960/year. A team of five? Multiply accordingly.

A one-time investment of £400-800 gives you unlimited inference forever. The hardware pays for itself within 6-12 months, and you own it outright.

---

## Want the Complete Handbook?

This article covers the hardware decision. The full **Complete Local LLM Handbook** includes everything you need to go from zero to running:

- Detailed software setup: Ollama, llama.cpp, LM Studio, Docker configs
- Model selection guide: which model for coding, writing, chat, RAG, and reasoning
- Integration tutorials: VS Code, Obsidian, terminal tools, and any OpenAI-compatible app
- Fine-tuning with LoRA on consumer hardware
- Building a RAG pipeline for your own documents
- Troubleshooting guide for every common issue

**[Get the Local LLM Handbook →](https://therookai.gumroad.com/l/local-llm-handbook)**

*Your data. Your hardware. Your rules. The barrier to entry has never been lower.*
