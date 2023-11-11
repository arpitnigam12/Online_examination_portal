# Online Examination Portal Readme  (Created by:ARPIT NIGAM)

## Project Overview
This project is an Online Examination Portal built using React.js for the frontend and JSON Server as the backend. It features both student and admin panels with login and signup functionality.The admin panel allows for test creation, editing, and result viewing, while the student panel provides access to available tests, test instructions, and result viewing.

# Table of Contents
1.Installation
2.Usage
3.Features
4.Folder Structure
5.Technologies Used

# Installation

# 1.Download and Extract:
  a)Download the project repository as a zip file.
  b)Extract the contents to your desired directory.
  
# 2.Initialize npm:
    a)Open a terminal in the project directory.
    b)Run the following command to initialize npm:
      npm init

# 3.Start React App:
    a)Run the following command to start the React app:
      npm start
      
# 4.Install JSON Server:
    a)Open a new terminal window.
    b)Install JSON Server globally by running:
      npm install -g json-server

# 5.Start JSON Server:
    a)In the new terminal, run the following command to start the JSON Server and watch the db.json file:
      json-server --watch db.json --port 3333

## (The JSON Server will be accessible at http://localhost:3333)

### (Note: you can use any email and password for admin login)


# Features

#  =>Admin Panel
  1.Login/Signup: Admins can securely log in or create a new account
  
  2.Test Management: Admins can create, edit, and manage tests.
  
  3.Result Viewing: Admins can view the results of students who have taken the tests.

# =>Student Panel
  1.Login/Signup: Students can securely log in or create a new account.
  
  2.Test Access: Students can access available tests and choose which ones to attend.
  
  3.Result Viewing: Students can view their test results.  
  
  4.Subject Selection: Students can choose subjects based on their preferences.


# Technologies Used
   React.js: Frontend framework for building user interfaces.
   
   JSON Server: Backend server for handling API requests and providing mock data.

## overview vedio of project is provied in code section you can access it.

# License
This project is created by Arpit Nigam 






