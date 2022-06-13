<html>

<body>
	<h2 class="title">MERN Stack App</h2>
	<hr>
	</hr>
	<div class="header">
		<p class="item1"><span>Match Schedules</span><br /><br />
			Develop this application using <b>ReactJS</b> and <b>NodeJS</b>. Refer to the Problem Statement and GIF
			image for details:
		</p>

		<div class="item2">
			<img src="Instruction/assets/match-fixtures.gif" width="700" height="350" />
		</div>
	</div>
	<h2 class="note">Note:</h2>
	<hr>
	</hr>
	<ul>
		<li>To run the Full Stack application, execute the <i class="commands"><strong>sh run.sh</strong></i> command,
			from the <b>wings-reactnode-matchschedules1</b> directory.</li>
		<li>To test the Full Stack application, execute the <i class="commands"><strong>sh test.sh</strong></i> command
			from the <b>wings-reactnode-matchschedules1</b> directory.</li>
		<li>After running the test command, if the test-report.xml file has not appeared either in the NodeJS or ReactJS
			folder, click the <strong>'Refresh Icon'</strong> in the VS code editor.</li>
		<img class="refresh" src="Instruction/assets/RefreshImg.png" />
		<li>Use <strong>Fetch API</strong> for service integration calls.</li>
	</ul>

	<!--Front-end-->
	<h2 class="title">FRONT-END: ReactJS</h2>
	<hr>
	</hr>
	<ul>
		<li>This application uses ReactJS as the front-end. You have to fix the test case errors in the application. The
			test cases are written in <b>Jest</b>.</li>
		<li>The code for the front-end part is available in <b><code>ReactJS/src/</code></b> and the components are
			available in <b><code>ReactJS/src/components</code></b>.</li>
		<li>Find the other useful instructions in respective components.</li>
	</ul>

	<h3>App Component:</h3>
	<ul>
		<li>Resides in ReactJS/src/App.js</li>
		<li>Is the higher order component.</li>
		<li>Contains all the functions and the state values required for the child components.</li>
		<li>On mounting, the required data should be fetched from the back-end.</li>
		<li>Error, List, Button, Modal, and Form will be the child components.</li>
		<li><b>showModalHandler</b> and <b>closeModalHandler</b> are the functions that enable to show and close the
			modal.</li>
		<li><b>inputChangeHandler</b> is the function that handles an onChange event.</li>
		<li><b>fetchData</b> is the function that fetches data from the back-end.</li>
		<li><b>submitHandler</b> is the function that posts data to the back-end.</li>
	</ul>

	<h3>Button Component:</h3>
	<ul>
		<li>Resides in ReactJS/src/components/Button.js</li>
		<li>Is the custom button component used to Add, Save, or Close a button.</li>
	</ul>

	<h3>Error Component:</h3>
	<ul>
		<li>Resides in ReactJS/src/components/Error.js</li>
		<li>Is the component that renders error messages, if any.</li>
		<li>The prop to be passed is <b>message</b>.</li>
	</ul>

	<h3>Form Component:</h3>
	<ul>
		<li>Resides in ReactJS/src/components/Form.js</li>
		<li>Contains the title in the h3 tag.</li>
		<li>Contains the Error component to display error messages.</li>
		<li>Contains the labels and input fields.</li>
		<li>On clicking the Save button, the information filled in the form should be saved in the back-end and the
			modal should be closed.</li>
		<li>The props to be passed from the parent component are <b>error</b>,
			<b>inputOnChangeHandler</b> and
			<b>onSaveHandler</b>.</li>
	</ul>

	<h3>Modal Component:</h3>
	<ul>
		<li>Resides in ReactJS/src/components/Modal.js</li>
		<li>Contains the custom Button component to close the modal.</li>
		<li>The props to be passed from the parent component are <b>show</b>, <b>children</b> and <b>closeHandler</b>.
		</li>
	</ul>

	<h3>List Component:</h3>
	<ul>
		<li>Resides in ReactJS/src/components/List.js</li>
		<li>Use the Card component and render the match fixtures.</li>
		<li>The prop to be passed from the parent component is <b>data</b>.</li>
	</ul>

	<h3>Card Component:</h3>
	<ul>
		<li>Resides in ReactJS/src/components/Card.js</li>
		<li>Display the fixtures data.</li>
		<li>The props to be passed from the parent component are <b>_id</b>, <b>index</b>, <b>count</b>, <b>venue</b>,
			<b>team1</b>, <b>team2</b> and <b>date</b>.</li>
	</ul>

	<!--Back-end-->
	<h2 class="title">BACK-END: NodeJS</h2>
	<hr>
	</hr>
	<ul>
		<li>For the back-end, you have to use <strong>NodeJS</strong> and <strong>MongoDB</strong>.</li>
		<li>The sample and default data values are in <code>NodeJS/src/db/defaultDB.js</code>.
		</li>
		<li><strong>fixtures-db </strong> is the name of the database you will be using.</li>
		<li>There is a single collection <strong>fixtures</strong> in the database
			fixtures-db.</li>
	</ul>

	<h3><strong>Models:</strong></h3>
	<p>The model file is in <code>NodeJS/src/models/fixture.js</code>, and contains the following fields:</p>
	<ul>
		<li>team1 - Date</li>
		<li>team2 - String</li>
		<li>venue - String</li>
		<li>date - Date</li>
	</ul>

	<h3><strong>Routers:</strong></h3>

	<p>There are two routes in <code>NodeJS/src/routers/index.js</code> :</p>
	<p><strong>1. GET <code>/fixtures</code></strong> - Lists the fixtures based on the condition passed, and returns
		all the data if there is no condition passed in query parameter.</p>
	The condition params that can be passed are :<ul>
		<li>start_date - Matches scheduled from the start date (inclusive).</li>
		<li>end_date - Matches scheduled before the end date (inclusive).</li>
		<li>venue - Matches scheduled at the venue.</li>
	</ul>
	<p>These conditions can be passed individually, in combinations, or all the three together. The response is returned
		based on the condition passed.</p>
	Sample Request:
	<strong>GET /fixtures</strong> and accepted params <strong>start_date</strong>,
	<strong>end_date</strong> and <strong>venue</strong>

	<p>Sample Response:</p>
	<pre><code class="lang-json">
	{
          <span class="hljs-attribute">count</span>: <span class="hljs-number">3</span>,
          <span class="hljs-attribute">records</span>: [
              {
                  <span class="hljs-attribute">_id</span>: <span class="hljs-string">'7d0fvj3fkv4jexcek8484fj3b'</span>,
                  <span class="hljs-attribute">team1</span>: <span class="hljs-string">"CSK"</span>,
                  <span class="hljs-attribute">team2</span>: <span class="hljs-string">"SRH"</span>,
                  <span class="hljs-attribute">venue</span>: <span class="hljs-string">"Bengaluru"</span>,
                  <span class="hljs-attribute">date</span>: <span class="hljs-string">"2021-05-31"</span>,
              },
              {
                  <span class="hljs-attribute">_id</span>: <span class="hljs-string">'608f981e490bbc572108eca2'</span>,
                  <span class="hljs-attribute">team1</span>: <span class="hljs-string">"KKR"</span>,
                  <span class="hljs-attribute">team2</span>: <span class="hljs-string">"DC"</span>,
                  <span class="hljs-attribute">venue</span>: <span class="hljs-string">"Mumbai"</span>,
                  <span class="hljs-attribute">date</span>: <span class="hljs-string">"2021-06-01"</span>,
              },
              {
                  <span class="hljs-attribute">_id</span>: <span class="hljs-string">'87398j5b890bbc5721dcjej3b'</span>,
                  <span class="hljs-attribute">team1</span>: <span class="hljs-string">"MI"</span>,
                  <span class="hljs-attribute">team2</span>: <span class="hljs-string">"PBKS"</span>,
                  <span class="hljs-attribute">venue</span>: <span class="hljs-string">"Bengaluru"</span>,
                  <span class="hljs-attribute">date</span>: <span class="hljs-string">"2021-06-02"</span>,
              },
          ]
      }

</code></pre>

	</br>
	<p><strong>2. POST <code>/fixtures</code></strong> - Takes the inputs from body parameters and inserts it into
		fixture table and returns the inserted object.</p>

	</p>
	Sample Request:
	<strong>POST /fixtures</strong>
	<pre><code class="lang-json"><span class="hljs-symbol">      body:</span> {
	<span class="hljs-symbol">team1:</span> <span class="hljs-string">"RR"</span>,
	<span class="hljs-symbol">team2:</span> <span class="hljs-string">"DC"</span>,
	<span class="hljs-symbol">venue:</span> <span class="hljs-string">"Bengaluru"</span>,
	<span class="hljs-symbol">date:</span> <span class="hljs-string">"2021-05-28"</span>,
      }
</code></pre>

	Sample Response:
	<pre><code class="lang-json">  {
      <span class="hljs-attribute">_id</span>: <span class="hljs-string">'08f981evciebv572108udcb2'</span>,
      <span class="hljs-attribute">team1</span>: <span class="hljs-string">"RR"</span>,
      <span class="hljs-attribute">team2</span>: <span class="hljs-string">"DC"</span>,
      <span class="hljs-attribute">venue</span>: <span class="hljs-string">"Bengaluru"</span>,
      <span class="hljs-attribute">date</span>: <span class="hljs-string">"2021-05-28"</span>,
  }
</code></pre>



	<!--Database-->
	<h2 class="title"> MongoDB Commands</h2>
	<hr />

	<ul>
		<li>To open the Mongo shell, run <i class="commands"><strong>mongo </strong></i>from the terminal.
		</li>
		<li>To view the databases in MongoDB, run <i class="commands"><strong>show
					dbs</strong></i> from the mongo shell.</li>
		<li>To select a database, run <i class="commands"><strong>use fixtures-db.
				</strong></i>.</li>
		<li>To view the names of collections, run <i class="commands"><strong>show
					collections</strong></i>.
		</li>
		<li>To view the data in a collection, run <i class="commands"><strong>db.collection_name.find().</strong></i>
		</li>
		<li>To exit, press <i class="commands"><strong>ctrl+c</strong></i></li>
	</ul>

</body>

<style>
	body {
		margin-left: 5%;
		margin-right: 5%;
	}

	header {
		background: #3C0E29;
		color: #E1E0D2;
		padding: 2px 2px 2px 12px;
		border-radius: 10px;
	}

	pre {
		background: #D0CCD2;
		padding: 3px;
		outline: 2px solid #574275;
		outline-offset: 10px;
	}

	hr {
		background-color: #574275;
		height: 2px;
		margin-bottom: 1em;
	}

	img {
		padding: 19px;
	}

	li {
		padding: 5px;
	}

	u {
		font-size: 20px;
		color: #BF942E;
	}

	span {
		color: #2E67BF;
		font-weight: 600;
	}

	.note2 {
		background-color: lightgrey;
		width: 600px;
		border: 5px solid #8c9190;
		padding: 10px;
	}

	.header {
		margin: 0% auto 0 auto;
		display: grid;
		background: #574275;
		padding: 3%;
		color: white;
		margin: "fit-content";
		grid-template-areas: "title video";
		overflow: scroll;
	}

	.item1 {
		grid-area: title;
		font-size: 16px;
		text-align: center;
		padding: 10px
	}

	.item2 {
		grid-area: video;
	}

	.item1 span {
		font-size: 35px;
		color: white;
	}

	.note {
		color: red;
	}

	.title {
		color: #2E67BF;
		font-weight: 600;
		font-size: 32px;
	}

	.commands {
		font-size: 20px;
		color: #BF502E;
	}

	.refresh {
		height: 280px;
		width: 800px;
	}

	.warning {
		color: #BF942E;
		padding: 10px;
		margin-top: 4px;
		border: 2px solid red;
	}
</style>

</html>