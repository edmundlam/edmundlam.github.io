---
title: "Zero Downtime Migration of Our Distributed Task Queue System"
date: "2025-02-26"
event: "ConFoo 2025"
external_url: "https://speakerdeck.com/edmundlam/zero-downtime-migration-of-our-distributed-task-queue-system"
description: "Migrating a critical task queue system from Huey+Redis to Celery+SQS without downtime."
tags:
  - "distributed-systems"
  - "migration"
  - "observability"
  - "feature-flags"
  - "celery"
  - "sqs"
---

Poka is a factory floor SaaS platform serving 475K+ users across 1,600+ factories in 70+ countries, processing roughly 5
million async tasks per day. Our original task queue - Huey backed by Redis - worked fine at first, but as the system
scaled, a shared Redis instance became a single point of failure. Queue backlogs from one tenant could cascade and take
down others. The on-call team was getting paged sporadically in the night, which was not ideal.

This talk explored the reasons why we switched systems, and the strategic use of feature flags and robust observability 
in ensuring a seamless transition. The talk was organized into six lessons learned:

1. **The first system wasn't a mistake** — it just reached its limits. Resist the urge to blame the original
   architecture. It was right for its time.
2. **Migrations are risk management, not just tech.** We defined non-functional requirements upfront: availability,
   scalability, observability, and maintainability.
3. **Feature flags give you control over change.** Rather than a big-bang cutover, we built dynamic task routing via an
   ops flag — per task name, per region. Any task could be switched to Celery or rolled back to Huey without a
   deployment.
4. **Observability is a superpower.** We built dashboards tracking task throughput by region, queue backlog, and worker
   scaling in real time.
5. **You can't predict every edge case** — build for adaptability. Our rollout strategy evolved mid-migration, from
   horizontal to phased.
6. **Documentation helps you make and defend decisions.** We used RFCs for upfront design and ADRs to capture the
   context behind each call.

The migration succeeded with zero
downtime. 

[Session details](https://confoo.ca/en/2025/session/zero-downtime-migration-of-our-distributed-task-queue-system)
