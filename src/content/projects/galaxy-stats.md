---
title: "Galaxy Stats"
description: "An ETL pipeline that transforms Once Upon A Galaxy tournament data into interactive HTML reports with statistical analysis, archetype clustering, and metagame insights."
tags:
  - "Python"
  - "Data Analysis"
  - "ETL"
  - "Visualization"
date: "2026-04-27"
external_url: "https://edmundlam.github.io/galaxy-stats/"
---

Galaxy Stats is a comprehensive ETL pipeline that processes tournament data from galaxy.fun into interactive,
self-contained HTML reports. The system uses Python with BeautifulSoup for HTML parsing, NumPy and SciPy for statistical
analysis including hierarchical clustering to identify card archetypes, and generates standalone reports with embedded
CSS and JavaScript. The 6-stage pipeline includes parse, analyze, finalize, render, copy, and update phases with GitHub
Pages deployment.

- [Live site](https://edmundlam.github.io/galaxy-stats/)
- [GitHub repository](https://github.com/edmundlam/galaxy-stats)
