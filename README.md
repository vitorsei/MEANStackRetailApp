# MEANStackRetailApp
Retail App using the MEAN Stack

Before bootstrapping all 3 projects it is necessary to install the node packages
	
	--On the CLI, for each of the projects
	npm install  

## Server


* Restore the database
	
	Via CLI on the server directory.
		
		command: mongorestore //Restores all the files from the dump folder 
			 
	To check if restored sucessfuly
			
		// On the CLI
		use test			
		db.products.count(); --it should return 350

* To run the server (http://localhost:3000)

		// On the CLI			
		node index.js

* **Mocha**
  
	This project use the Mocha Framework for tests. To run the tests:
	
		//On the CLI
		npm run test
		or 
		npm run watch (gulp task)  

<br/>

##Web app
	
* **Url to access**: http://localhost:3000/Presentation
 
* **Browserify**
	
	In order to use node js features and sintax, this app uses Browserfiy. So all changes in the *.js files need to be reflected on the "/bin/index.js" file.
	
	There is a gulp task that automates this process. To run:
	
		-- On the CLI
		npm run watch 
	 
* **Karma**
	The web app uses the Karma framework. To its tests:
		
		-- On the CLI
		over the directory: ./presentation/node_modules/karma/bin	
		command: 			karma start ../../../karma.local.conf.js 

* Login using **facebook** 
	
	This app is integrated with facebook login. To login, access: [http://localhost:3000/auth/facebook](http://localhost:3000/auth/facebook)

<br/>

## Mobile app
The mobile app was built on top of Ionic and Cordova

* To install **Ionic** and **Cordova**
	
		//On the CLI
		npm install cordova ionic -g

* To bootstrap the mobile app:

 
		//On the CLI:
		ionic server --lab

* **HTML2JS NPM module**
    
	**Mobile apps have a very different paradigm.**	A web application downloads templates each time.But a mobile app gets downloaded once from the app store and then is stored on your phone.
	
	In order to ship your directive's templates with your app, you're going to need another **compilation process** :

	The gulp-html2js module gives you a gulp plugin for converting HTML files into an AngularJS template as string. 
			
	There is gulp task that is responsible for compiling a **templates.js file in your bin directory** that contains all your templates as a separate AngularJS module called Templates.

	All you have to do is to **copy and paste	the index.js file and this templates.js file
	into the ionic project.**