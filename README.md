# money-manager

This is an application for money management using which user can set the budget for the categories and add expenses as per category which helps to manage the money for better savings

## Schema

1.  user
    - id
    - name
    - email
    - password
    - phone
    - createdAt
    - deletedAt
    - updatedAt

2. expense
    - id
    - user_id
    - description
    - classification
    - category_id
    - amount
    - createdAt
    - deletedAt
    - updatedAt

3. budget_category
    - id
    - user_id
    - budget
    - category
    - createdAt
    - deletedAt
    - updatedAt

## Features

1. Colour highlights
2. Data in tabular format
3. Graphs and trends 
    - X-axis: Amount
    - Y-axis: Category 
4. Daily notification to fill expense
5. Create desktop (using elecrton)
6. Typeaheads (for autocomplete)

## Division of tasks

- Backend
    - CRUD for category, user & expense
    - DB Schema
- Frontend
    - Web
    - Mobile
- DevOps
    - setup
    - services
    - Deployment 

## Core concepts

- AWS cloud architecture
- Hosting our own server
- RDS & DBMS
- Deployments
- Architecture of backend
- Graphs using D3
- Electron
- Node using Nest
- Push notification for web & mobile
- Typeahead
