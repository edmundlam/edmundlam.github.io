---
title: "Your MCP Is Not an API Gateway: Designing Tools Agents Can Actually Use"
date: "2026-10-06"
event: "MCP Dev Summit Toronto 2026"
external_url: "/talks/agent_friendly.html"
description: "Why porting your REST API one-to-one into MCP tools makes agents slower, costlier, and likelier to do the wrong thing - and the design craft that fixes it."
tags:
  - "mcp"
  - "ai-agents"
  - "api-design"
  - "tool-design"
  - "llm"
---

It's tempting to point your coding agent at your REST API, have it port every endpoint, and ship it. Don't. Tools that mirror your API one-to-one make agents slower, more expensive, and likelier to do the wrong thing.

We built the MCP server for a connected-worker manufacturing platform, dozens of tools across many domains. Our first pass was a straight port, and it failed badly enough that we built our own skills to fix and vet every new tool. This talk is the craft that came out of that:

- Helping agents find the right tool among dozens through progressive discovery;
- Pruning a tool's twenty parameters down to the handful an agent should reason about;
- Stripping response bloat (signed media URLs alone were 40% of a payload) so it doesn't crowd the context window;
- Guardrails on destructive and unbounded operations, so an agent can't delete an entire factory or pull a million rows;
- Returning errors an agent can recover from, instead of "it failed".

Every point comes from a decision we made, and often remade. You'll leave able to tell a real MCP tool from a wrapped API endpoint, and how to design one that's agent-friendly.

[Slides](/talks/agent_friendly.html) · [Session details](https://events.linuxfoundation.org/mcp-dev-summit-toronto/program/schedule/?id=1287321)
