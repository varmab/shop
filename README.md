Shop is Full Stack website made of Node and React

## Setup

Clone or Download all files and run following commands

1. Make sure your mongodb is running.

2. Download all files

3. Run following commands to install development tools & necessary npms to run backend

npm install -g concurrently nodemon

npm install express dotenv mongoose jsonwebtoken bcryptjs

4. Setup sample items data in to mongodb by running

node seed.js

Above command seed few sample items in to database.

5. Now run following command to run website and backend

npm start