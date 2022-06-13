MERN Stack App
--------------

* * *

Match Schedules  
  
Develop this application using **ReactJS** and **NodeJS**. Refer to the Problem Statement and GIF image for details:

![](Instruction/assets/match-fixtures.gif)

Note:
-----

* * *

*   To run the Full Stack application, execute the _**sh run.sh**_ command, from the **wings-reactnode-matchschedules1** directory.
*   To test the Full Stack application, execute the _**sh test.sh**_ command from the **wings-reactnode-matchschedules1** directory.
*   After running the test command, if the test-report.xml file has not appeared either in the NodeJS or ReactJS folder, click the **'Refresh Icon'** in the VS code editor.
![](Instruction/assets/RefreshImg.png)*   Use **Fetch API** for service integration calls.

FRONT-END: ReactJS
------------------

* * *

*   This application uses ReactJS as the front-end. You have to fix the test case errors in the application. The test cases are written in **Jest**.
*   The code for the front-end part is available in **`ReactJS/src/`** and the components are available in **`ReactJS/src/components`**.
*   Find the other useful instructions in respective components.

### App Component:

*   Resides in ReactJS/src/App.js
*   Is the higher order component.
*   Contains all the functions and the state values required for the child components.
*   On mounting, the required data should be fetched from the back-end.
*   Error, List, Button, Modal, and Form will be the child components.
*   **showModalHandler** and **closeModalHandler** are the functions that enable to show and close the modal.
*   **inputChangeHandler** is the function that handles an onChange event.
*   **fetchData** is the function that fetches data from the back-end.
*   **submitHandler** is the function that posts data to the back-end.

### Button Component:

*   Resides in ReactJS/src/components/Button.js
*   Is the custom button component used to Add, Save, or Close a button.

### Error Component:

*   Resides in ReactJS/src/components/Error.js
*   Is the component that renders error messages, if any.
*   The prop to be passed is **message**.

### Form Component:

*   Resides in ReactJS/src/components/Form.js
*   Contains the title in the h3 tag.
*   Contains the Error component to display error messages.
*   Contains the labels and input fields.
*   On clicking the Save button, the information filled in the form should be saved in the back-end and the modal should be closed.
*   The props to be passed from the parent component are **error**, **inputOnChangeHandler** and **onSaveHandler**.

### Modal Component:

*   Resides in ReactJS/src/components/Modal.js
*   Contains the custom Button component to close the modal.
*   The props to be passed from the parent component are **show**, **children** and **closeHandler**.

### List Component:

*   Resides in ReactJS/src/components/List.js
*   Use the Card component and render the match fixtures.
*   The prop to be passed from the parent component is **data**.

### Card Component:

*   Resides in ReactJS/src/components/Card.js
*   Display the fixtures data.
*   The props to be passed from the parent component are **\_id**, **index**, **count**, **venue**, **team1**, **team2** and **date**.

BACK-END: NodeJS
----------------

* * *

*   For the back-end, you have to use **NodeJS** and **MongoDB**.
*   The sample and default data values are in `NodeJS/src/db/defaultDB.js`.
*   **fixtures-db** is the name of the database you will be using.
*   There is a single collection **fixtures** in the database fixtures-db.

### **Models:**

The model file is in `NodeJS/src/models/fixture.js`, and contains the following fields:

*   team1 - Date
*   team2 - String
*   venue - String
*   date - Date

### **Routers:**

There are two routes in `NodeJS/src/routers/index.js` :

**1\. GET `/fixtures`** - Lists the fixtures based on the condition passed, and returns all the data if there is no condition passed in query parameter.

The condition params that can be passed are :

*   start\_date - Matches scheduled from the start date (inclusive).
*   end\_date - Matches scheduled before the end date (inclusive).
*   venue - Matches scheduled at the venue.

These conditions can be passed individually, in combinations, or all the three together. The response is returned based on the condition passed.

Sample Request: **GET /fixtures** and accepted params **start\_date**, **end\_date** and **venue**

Sample Response:

    
    	{
              count: 3,
              records: [
                  {
                      _id: '7d0fvj3fkv4jexcek8484fj3b',
                      team1: "CSK",
                      team2: "SRH",
                      venue: "Bengaluru",
                      date: "2021-05-31",
                  },
                  {
                      _id: '608f981e490bbc572108eca2',
                      team1: "KKR",
                      team2: "DC",
                      venue: "Mumbai",
                      date: "2021-06-01",
                  },
                  {
                      _id: '87398j5b890bbc5721dcjej3b',
                      team1: "MI",
                      team2: "PBKS",
                      venue: "Bengaluru",
                      date: "2021-06-02",
                  },
              ]
          }
    
    

  

**2\. POST `/fixtures`** - Takes the inputs from body parameters and inserts it into fixture table and returns the inserted object.

Sample Request: **POST /fixtures**

          body: {
    	team1: "RR",
    	team2: "DC",
    	venue: "Bengaluru",
    	date: "2021-05-28",
          }
    

Sample Response:

      {
          _id: '08f981evciebv572108udcb2',
          team1: "RR",
          team2: "DC",
          venue: "Bengaluru",
          date: "2021-05-28",
      }
    

MongoDB Commands
----------------

* * *

*   To open the Mongo shell, run _**mongo**_ from the terminal.
*   To view the databases in MongoDB, run _**show dbs**_ from the mongo shell.
*   To select a database, run _**use fixtures-db.**_ .
*   To view the names of collections, run _**show collections**_.
*   To view the data in a collection, run _**db.collection\_name.find().**_
*   To exit, press _**ctrl+c**_

