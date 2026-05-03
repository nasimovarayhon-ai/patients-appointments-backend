# Patients Appointments Backend

Simple Node.js + Express backend for university assignment.

## Entities

### Patient
- id
- firstName
- lastName
- dateOfBirth
- phone
- email

### Appointment
- id
- patientId
- date
- time
- doctorName
- reason

## Relationship

One Patient can have many Appointments.

## Run project

npm install
npm start

## Server

http://localhost:3000

## API Endpoints

### Patient
POST /patient/create  
GET /patient/list

### Appointment
POST /appointment/create  
GET /appointment/list
