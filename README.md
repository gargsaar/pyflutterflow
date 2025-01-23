# Pyflutterflow

*The python companion to the flutterflow ecosystem.*

PyFlutterFlow is a companion to FlutterFlow, serving as an API backend that provides:

- A Firebase Auth integration with support for:
  - token decoding
  - custom claims interpretation for admin roles
  - Pydantic models
  - User Sync utilities
  - User onboarding

- A Supabase integration with:
  - Supabase JWT token minting
  - A proxy for Supabase Postgrest API calls
  - Supabase REST utilities


- A Firebase Cloud Messaging integration with:
  - Endpoints for sending notifications
  - User token management via Firestore (working alongside FlutterFlow FCM utilities)
  - Supabase notification database records with read receipts and notification histories
  - Notification badge utilities


- Email service via Resend with:
  - Onboarding emails including email verification links where necessary
  - General email sending


- An administration panel:
  - served as a Vue.js SPA
  - with user management for Firebase and Supabase
  - including privacy policy and terms of service management
  - with CRUD utilities for Supabase tables


- Cloudinary suppport:
  - with endpoints for image uploading


- A full pytest integration testing suite
  - with sample tests and instructions on using it via local Supabase



PyFlutterFlow is designed to be used inside of a FastAPI project, such as
that provided in the [FlutterFlow Starter Kit](https://kealy.studio/flutterflow/).
The Python API in the kit will define the various settings that pyFlutterFlow needs,
along with the initializer code and scripts that it depends on.
