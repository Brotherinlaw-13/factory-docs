# The Local LLM Hardware Guide: What to Buy at Every Budget

Running AI models on your own hardware is no longer a fantasy reserved for people with enterprise GPUs. The barrier to entry has collapsed. Two years ago, running a capable model locally required a £3,000 GPU. Today, a £400 mini PC runs models that rival GPT-3.5. The question is not *whether* you can run LLMs locally, it is *what to buy*.

This guide breaks down the best hardware at three price points, so you can stop paying per-token and start running unlimited AI inference on hardware you own.

---

## How LLMs Actually Use Your Hardware

Before spending money, understand what you are buying and why.

LLMs are, at their core, enormous matrices of numbers (called **weights** or **parameters**). When you run a model, your hardware loads these weights into memory and performs billions of mathematical operations to generate each token. The speed of generation depends on two things: where the weights live, and how fast they can be read.

**Memory capacity** determines which models you can load. A 7-billion parameter model quantised to 4-bit precision needs roughly 4 to 5 GB of memory. A 70B model needs 35 to 40 GB. If the model does not fit in memory, it either will not load or will partially offload to disc, which is unusably slow.

**Memory bandwidth** determines how fast tokens are generated. This is the single most important spec for local LLM performance. DDR5 RAM delivers roughly 50 to 80 GB/s. An RTX 3090's GDDR6X delivers 936 GB/s. Apple's M4 unified memory sits at around 120 GB/s. This is why GPU inference is dramatically faster than CPU inference: not because of compute power, but because of memory bandwidth.

---

## £200 Tier: Getting Started

At this price, you are looking at the second-hand market or entry-level mini PCs.

**Best option: Used office PC + GPU.** A Dell OptiPlex or Lenovo ThinkCentre from eBay (£80 to £120) paired with a used GTX 1070 8GB or Tesla P40 24GB (£60 to £100) gets you into GPU-accelerated inference. The Nvidia Tesla P40 is a hidden gem: 24 GB of VRAM for around £80 to £100 used, though it needs an aftermarket cooler and a PSU with the right power connector. It is ugly, loud, and astonishingly capable for the money.

**Alternative: Beelink EQ12 or similar N100 mini PC** (£130 to £160). Intel N100, 16 GB DDR5. Good enough for 7B models on CPU at roughly 5 to 8 tokens per second. Fanless, tiny, sips power. Decent for experimentation but you will outgrow it quickly.

---

## £400 Tier: The Sweet Spot

This is where local LLM gets genuinely useful.

**Minisforum UM780 XTX** (roughly £350 to £400 barebones). AMD Ryzen 7 7840HS with Radeon 780M iGPU. Supports up to 64 GB DDR5-5600. The iGPU can accelerate inference via ROCm/Vulkan, and the CPU alone handles 7B to 14B models comfortably at 10 to 15 tokens per second. Two M.2 slots, USB4, compact form factor. This is the mini PC most people should buy.

**Beelink SER8** (roughly £380 to £420). Same Ryzen 7 8845HS platform. Very similar performance with slightly newer silicon. Excellent build quality. Either of these paired with 32 GB DDR5 (£60 to £80) gives you a capable local LLM box for under £500 all-in.

**AOOSTAR GEM12** (roughly £350 to £400). AMD Ryzen 9 6900HX variant with an OCuLink port. This is significant because it means you can add an external GPU later without Thunderbolt overhead. If you think you might want a GPU path in the future, this is the mini PC to buy.

---

## £800 Tier: No Compromises

**Mac Mini M2 Pro (16-core GPU, 32 GB)** available refurbished for £700 to £800. Apple's unified memory architecture is genuinely special for LLM inference. The 32 GB of unified memory is accessible to both CPU and GPU at 200 GB/s bandwidth. This means a 32 GB Mac can run models that would require 32 GB of VRAM on a discrete GPU, but at roughly 2 to 3x the bandwidth of DDR5. For models in the 14B to 30B range, the Mac Mini offers the best tokens-per-pound ratio of any hardware at this price.

**Mac Mini M4 Pro (24 GB)** from £599 new. Faster CPU and GPU than the M2 Pro, but only 24 GB in the base model. The 48 GB variant (£999) is the ultimate local LLM machine for most users: it runs quantised 70B models comfortably.

**RTX 3090 24GB** the king of consumer local LLM, available used for £550 to £700. 24 GB GDDR6X at 936 GB/s. Runs quantised 30B models on GPU, and handles 70B models with partial CPU offloading. If you have a desktop with a 750W+ PSU and a case that fits a triple-slot card, this is the single best GPU you can buy for local inference.

---

## Hardware Comparison at a Glance

| Hardware | Price (£) | Memory | Bandwidth | Best Model Size | Tokens/sec |
|---|---|---|---|---|---|
| Intel N100 Mini PC | 130-160 | 16 GB DDR5 | 38 GB/s | 7B | 5-8 |
| Minisforum UM780 XTX | 350-450* | 32-64 GB DDR5 | 77 GB/s | 14B-32B | 8-15 |
| Mac Mini M2 Pro 32GB | 700-800 | 32 GB Unified | 200 GB/s | 14B-30B | 12-20 |
| Mac Mini M4 Pro 48GB | 999 | 48 GB Unified | 273 GB/s | 30B-70B | 15-25 |
| Desktop + RTX 3060 12GB | 400-550 | 12 GB VRAM | 360 GB/s | 8B-13B (GPU) | 30-50 |
| Desktop + RTX 3090 24GB | 700-900 | 24 GB VRAM | 936 GB/s | 14B-30B (GPU) | 40-70 |
| Tesla P40 (used) | 80-100 | 24 GB VRAM | 346 GB/s | 14B-30B (GPU) | 15-25 |

*Barebones price; add RAM and storage.*

---

## The Right Model for Your RAM

Once you have the hardware, choosing the right model matters just as much. Here is a quick cheat sheet:

| Available Memory | Best Model (Q4_K_M) | Tokens/sec (CPU) | Tokens/sec (GPU) |
|---|---|---|---|
| 4 GB | Phi-3 Mini 3.8B | 6-10 | 25-40 |
| 8 GB | Llama 3.1 8B | 8-12 | 30-50 |
| 16 GB | Qwen 2.5 14B | 5-8 | - |
| 24 GB VRAM | DeepSeek-R1 32B (distilled) | - | 20-35 |
| 32 GB | Qwen 2.5 32B | 3-6 | - |
| 48 GB | Llama 3.1 70B | 2-4 | - |

---

## The eGPU Path

If you have a mini PC or laptop and want GPU acceleration without building a desktop, external GPUs are an option.

**OCuLink** is the preferred connection: it is essentially a direct PCIe x4 link with minimal overhead. Pair an OCuLink enclosure (£30 to £60) with a desktop GPU and you get external GPU inference with roughly 85 to 90% of native PCIe performance.

**Thunderbolt 3/4 eGPU enclosures** work but add latency and bandwidth constraints. For LLM inference, where you are streaming weights from VRAM rather than doing real-time rendering, the Thunderbolt bottleneck is less painful than for gaming. Expect 70 to 80% of native GPU performance. Enclosures cost £150 to £250 used.

**The recommendation:** If building new, buy the AOOSTAR GEM12 with OCuLink and add a GPU when budget allows. If adding to an existing Thunderbolt laptop, it works, but manage your expectations.

---

## Where to Start

The honest answer for most people: buy a Minisforum UM780 XTX (or the Beelink SER8), add 32 GB of DDR5, install Ollama, and run Llama 3.1 8B. You will have a fully functional, completely private AI assistant running on your desk in under 30 minutes. No subscriptions. No API keys. No data leaving your network.

Once you see what is possible, you will never look at a £20/month AI subscription the same way again.

---

*This is an extract from The Complete Local LLM Handbook. Get the full guide at therookai.gumroad.com/l/local-llm-handbook*
