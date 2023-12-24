# The Burger App
The burger app is an application utilizing the MERN stack to keep track of burgers I have tried in the NYC area.

## To use...
Run the following commands in the `frontend` folder:
`npm install`
`npm start`

Then, in a separate terminal, run the following commands in the `backend` folder:
`npm install`
`npm start`

## To use database functionality:
At the MongoDB website:

    1. Sign In using your OSU Google credentials or GitHub account. (Feel free to make a personal account later for personal projects.) 

    2. Once logged in, you are the Organization Owner.

    3. Click the Project tab at the left.
        Click  New Project  at the right.
        Name the project related to the app.
        To add yourself as the owner of this database project, click the   Create Project  button.

    4. Click the  Build a Database  button.
        In the Deploy screen, choose the MO/Free option.
        For the Provider, choose Google Cloud.
        For the Region, choose region that is near you).
        Name the cluster (though, "cluster0" is just fine).
        Click the Create button.

    5. In the Security Quickstart screen, add yourself as a user with a username and password. 
        Set a strong password, so your work is not hacked during the course!
        Click the  Create User  button.
        Use the default My Local Environment button and notice your IP address as been added. 
        Click the  Finish and Close  button.
        Click the  Go to Databases  button.

    6. You'll now be directed to the Atlas tab, where you'll see the Cluster0 (or other name) that you set up in step 4, above.
        Click the Configuration button. Nothing needs to change there. Exit out of it.
        Click the Connect button.
        Choose MongodDB for VS Code. 
            Install MongodB VS Code Extension.
            Click the new Leaf icon on the left.
            Click the  Connect button to see the popup field.
            Add your new connection string to that field and add your password. It will look like something like this: mongodb+srv://<accountName>:<accountPassword>@cluster0.7xuzlbc.mongodb.net/
            Add your account name and account password to the string (replacing the <orange> items as well as the < and >).
            Hit the enter/return key to connect.
            Look for the response message at the lower right corner. 

Use the connection string in `website/app`

    In website/app, paste that same connection string into the .env file of your workspace folder.
