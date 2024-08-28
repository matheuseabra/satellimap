# SatelliMap - Satellite Image Processing Application

## Overview

This application is a collaborative satellite image processing tool built with React, Leaflet, Node.js and Supabase. It allows users to view satellite images, draw objects (rectangles and polygons) on them, and manage these objects through a intuitive, minimalist interface.

## Features

- Display satellite images
- Draw rectangles and polygons on images
- List, edit, and delete drawn objects

## Architecture

The application is built using the following technologies:

- **Frontend**: React/TypeScript
- **Backend**: Express.js 
- **Database**: Supabase (PostgreSQL)
- **Map Visualization**: react-leaflet
- **Drawing Tools**: react-leaflet-draw

The application follows a modular architecture with the following main components:

- `Map`: Renders the satellite image
- `DrawToolBar`: Controls the drawing functionality
- `useObjectsApi`: Custom hook for API interactions

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Supabase account

### Setup

1. Clone the repository:

2. Install dependencies:
npm install

3. Set up environment variables:
Create a `.env` file in the root directory and add the following:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key


4. Set up Supabase:
- Create a new project in Supabase
- Run the SQL commands provided in the `database_setup.sql` file to create the necessary tables

5. Run the development server:


6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. The main page displays a satellite image.
2. Use the drawing tools to create rectangles or polygons on the image.
3. The sidebar shows a list of all objects created on the current image.
4. Click on an object in the list to edit or delete it.

## API Routes

- `GET /api/images/:imageId` - Get satellite image URL
- `GET /api/images/:imageId/objects` - Get all objects for an image
- `POST /api/images/:imageId/objects` - Create a new object
- `PUT /api/images/:imageId/objects/:objectId` - Update an existing object
- `DELETE /api/images/:imageId/objects/:objectId` - Delete an object

## Planned Improvements

1. Implement user authentication and authorization
2. Add real-time collaboration using Supabase subscriptions
3. Improve performance for large datasets
4. Enhance accessibility features
5. Implement comprehensive error handling and user feedback
6. Add unit and integration tests
7. Create a more user-friendly interface for editing object coordinates
8. Implement pagination, filtering, and sorting for the object list
9. Add support for more complex object types and properties

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.