# Tasks: Petstore Fullstack E-commerce

**Input**: Design documents from `spec.md` and `plan.md`

## Phase 1: Setup
- [x] T001 Create `backend/` and `frontend/` directories
- [x] T002 Initialize Spring Boot in `backend/`
- [x] T003 Initialize React Vite in `frontend/`
- [x] T004 [P] Setup Tailwind CSS in `frontend/`
- [x] T005 [P] Setup Material UI in `frontend/`

## Phase 2: Foundational
- [x] T006 Configure `backend/src/main/resources/application.properties` for PostgreSQL
- [x] T007 Create `Pet` entity in `backend/src/main/java/com/petstore/model/Pet.java`
- [x] T008 Create `PetRepository` in `backend/src/main/java/com/petstore/repository/PetRepository.java`

## Phase 3: User Story 1 - Browse Pet Gallery (Priority: P1)
- [x] T009 Implement `PetService` for fetching pets in `backend/src/main/java/com/petstore/service/PetService.java`
- [x] T010 Implement `PetController` GET `/api/pets` in `backend/src/main/java/com/petstore/controller/PetController.java`
- [x] T011 [P] Create `PetCard` component in `frontend/src/components/PetCard.jsx`
- [x] T012 [P] Create `PetGrid` component in `frontend/src/components/PetGrid.jsx`
- [x] T013 Implement API fetch in `frontend/src/services/api.js`
- [x] T014 Assemble `Home` page in `frontend/src/pages/Home.jsx`

## Phase 4: User Story 2 - Filter Pets (Priority: P1)
- [x] T015 Add filtering logic to `PetController` (category param)
- [x] T016 Create `Filter` component in `frontend/src/components/Filter.jsx`
- [x] T017 Integrate filtering in `Home` page

## Phase 5: User Story 3 - Admin CRUD (Priority: P1)
- [x] T018 Implement POST, PUT, DELETE in `PetController`
- [x] T019 Create Admin dashboard/forms in `frontend/src/pages/Admin.jsx` (optional but good for CRUD)
- [x] T020 Seed initial pet data in `backend/` (data.sql or CommandLineRunner)

## Phase N: Polish & Deployment
- [x] T021 Apply premium styling to all components
- [x] T022 Create `render.yaml` for deployment
- [x] T023 Final end-to-end verification
