# Petstore Constitution

## Core Principles

### I. Fullstack Alignment
Data structures and API contracts must be strictly maintained between the Spring Boot backend and the React frontend. Any change to the backend model must be reflected in the frontend types/interfaces.

### II. RESTful Excellence
All CRUD operations for pets (Dogs, Cats, Birds, Fishes) must follow RESTful standards. Use appropriate HTTP methods (GET, POST, PUT, DELETE) and status codes.

### III. Premium UI/UX
The user interface must be visually stunning and responsive. Leverage Tailwind CSS for layout and Material UI (MUI) for complex components. Use rich aesthetics, smooth transitions, and a modern color palette.

### IV. Data Integrity
PostgreSQL is the single source of truth. Ensure proper database constraints, JPA mapping, and data validation at both frontend and backend layers.

### V. Deployment Reliability
The application must be architected for seamless deployment on Render. Configuration for both backend (Java) and frontend (Vite) must be automated and documented.

## Technology Stack
- **Backend**: Java 17+, Spring Boot 3, Spring Data JPA, PostgreSQL.
- **Frontend**: React (Vite), Tailwind CSS, Material UI (MUI).
- **Deployment**: Render.

## Development Workflow
1. **Specify**: Define requirements in `spec.md`.
2. **Plan**: Create a technical blueprint in `plan.md`.
3. **Tasks**: Break down into actionable items in `tasks.md`.
4. **Implement**: Incremental coding with verification.

## Governance
This constitution is the primary reference for all development decisions. Changes to the core tech stack or architectural principles require an amendment.

**Version**: 1.0.0 | **Ratified**: 2026-05-07 | **Last Amended**: 2026-05-07
