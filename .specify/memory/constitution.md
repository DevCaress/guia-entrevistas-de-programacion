<!--
Sync Impact Report
Version change: template -> 1.0.0
Modified principles:
- PRINCIPLE_1_NAME -> I. Code and Content Quality
- PRINCIPLE_2_NAME -> II. Testing and Verification Discipline
- PRINCIPLE_3_NAME -> III. Consistent User Experience
- PRINCIPLE_4_NAME -> IV. Performance by Design
- PRINCIPLE_5_NAME -> V. Security and Best Practices
Added sections:
- Quality Standards and Constraints
- Development Workflow and Quality Gates
Removed sections:
- None
Templates requiring updates:
- updated: .specify/templates/plan-template.md
- updated: .specify/templates/spec-template.md
- updated: .specify/templates/tasks-template.md
- not present: .specify/templates/commands/*.md
- reviewed: README.md
- reviewed: AGENTS.md
Follow-up TODOs:
- None
-->
# Guia para entrevistas tecnicas como Ingeniero de software Constitution

## Core Principles

### I. Code and Content Quality
All changes MUST be clear, maintainable, and scoped to the stated feature or
content goal. Code examples MUST use idiomatic patterns for their language,
avoid unnecessary abstraction, and include enough context to be useful in an
interview-preparation guide. Markdown content MUST use consistent headings,
working links, concise descriptions, and terminology that matches the rest of
the repository. Rationale: the project is a learning resource, so unclear
examples or inconsistent curation directly reduce user trust and usefulness.

### II. Testing and Verification Discipline
Every behavior-changing code contribution MUST include automated tests at the
lowest practical level and at least one user-story or integration-level
verification when workflows cross module, UI, API, storage, or external service
boundaries. Documentation-only changes MUST be verified for Markdown structure,
links affected by the change, and any command snippets or examples introduced.
Tests MUST be defined before implementation tasks and MUST run successfully
before a change is considered complete. Rationale: interview guidance and code
samples are reused by learners; regressions and broken examples compound over
time.

### III. Consistent User Experience
User-facing content, examples, and any future application interfaces MUST follow
the existing information architecture, naming style, and language expectations
for the target audience. New sections MUST be discoverable from the index when
they add durable guide content. Interactive or visual features MUST support
clear primary workflows, accessible labels, keyboard reachability where
applicable, and responsive layouts without overlapping text. Rationale:
consistency lets readers scan, compare, and practice without relearning the
guide structure.

### IV. Performance by Design
Plans MUST state performance expectations for any feature that renders UI,
processes data, runs examples, builds assets, or depends on network resources.
Implementations MUST avoid avoidable large dependencies, blocking work on the
main interaction path, excessive bundle growth, and unbounded algorithms.
Performance-sensitive changes MUST include measurable acceptance criteria and
verification results. Rationale: learning tools and examples must remain fast
enough to run locally and simple enough for candidates to reason about.

### V. Security and Best Practices
Changes MUST follow secure defaults: no committed secrets, no unsafe dependency
or script execution patterns, explicit handling of untrusted input, least
privilege for integrations, and sanitized examples that do not teach insecure
practices. Dependencies MUST be justified by feature value, maintained status,
and license compatibility with the repository. Rationale: best-practice content
must model the same standards it recommends.

## Quality Standards and Constraints

- Specs MUST include functional requirements plus relevant quality attributes:
  testing, UX consistency, performance, security, and maintainability.
- Plans MUST document the chosen project structure, tools, quality gates, and
  measurable performance constraints before implementation tasks are generated.
- Tasks MUST include verification work for each independently deliverable user
  story and cross-cutting tasks for security, performance, documentation, and
  link or example validation when applicable.
- Markdown contributions MUST preserve the table of contents, heading hierarchy,
  link readability, and existing Spanish-first audience expectations unless a
  feature explicitly changes the content strategy.
- Code contributions MUST prefer established project patterns and standard
  tooling over new frameworks or abstractions unless the plan records a concrete
  reason.

## Development Workflow and Quality Gates

1. Specification: define user scenarios, acceptance criteria, affected content
   or code areas, measurable success criteria, and risks for quality,
   performance, security, and UX consistency.
2. Planning: complete the Constitution Check before research and repeat it
   after design. Any violation MUST be recorded with a simpler alternative and a
   reason the alternative is insufficient.
3. Tasks: generate tasks by independently testable user story. Include tests or
   verification tasks before implementation tasks for each story.
4. Implementation: keep changes small, reviewable, and traceable to the spec.
   Preserve unrelated user changes and avoid broad refactors without a linked
   requirement.
5. Review: a change is complete only when the relevant tests, link checks,
   formatting checks, performance checks, and security review items have passed
   or are explicitly documented as not applicable.

## Governance

This constitution supersedes conflicting local practices for Spec Kit-driven
work in this repository. Amendments MUST be proposed as a documented change to
this file, include a Sync Impact Report, and update affected templates or
runtime guidance in the same change. Reviewers MUST verify constitution
compliance for every generated spec, plan, task list, and implementation.

Versioning follows semantic versioning:

- MAJOR: incompatible governance changes, removed principles, or redefined
  obligations.
- MINOR: new principles, new required sections, or materially expanded quality
  gates.
- PATCH: clarifications, wording improvements, or non-semantic corrections.

Compliance review is required at plan creation, after design, before task
execution, and before completion. Unresolved violations MUST be documented in
the plan's Complexity Tracking section with mitigation or explicit approval.

**Version**: 1.0.0 | **Ratified**: 2026-06-20 | **Last Amended**: 2026-06-20
