# Simple Wordpress Worflow using Gulp.js

## Description

This is a very basic workflow to install in your theme folder.

What it does:
- It concatenates all your css files from the development/css folder in one style.css saved at the root of the theme folder (and therefore used by wordpress)
- It concatenates all your javascript files from the development/js folder in one script.js file saved and minified as js/script.js.
- It adds a default command so you only need to call gulp in the command prompt to get it started
- It adds a live reload feature so that you can view changes live in the browser as you save your files
- The .gitingore file excludes allfiles from the workflow so you end up with minified css and js in your typical wordpress install with no extra files.

## Set up

1. Install Node.js

2. copy the repo in your wordpress theme root directory or with git:

    git init
    
    git clone https://github.com/sebgeorges/Simple-Wordpress-Workflow.git

3. in the package.json file:
change the information to match your own project

4. In the command prompt, cd to the 
directory to your wordpress theme root folder.

5. Run:
    npm init
    
6. Run:
    npm install
    
7. In the gulpfile.js file:
- Add your own files to the jsFiles array (commented)
- Add your own files to the cssFiles array (commented)
- Save


8. open the .gitignore file and uncomment everything (remove the "#" character at the start of every line)

Test this in git Bash:
    git status
    
you should not see any of the worflow files or folders

9. install and activate the chrome plugin:
https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en
    
10. In functions.php enqueue the script.js from the js folder at the root of your theme and the stylesheet style.css from the theme root folder.


## Use

You will be working with the files inside the development folder.

Before starting development work, ensure the follwing:
- scripts and css files are in their respective folders in the development folder. 
- Move the default wordpress style.css file to development/css (it will be replaced with a new minified version as soon as your run the gulp command for the first time)
- check that you have a folder named "js" at the root of your theme

You can then start the command prompt, cd to the theme root folder and run:
    gulp

Then, when you make changes in your source files in the development folder, the output files (minified and concatenated) are updated in you wordpress theme. At the same time you can view the changes live in the browser in chrome, with the live preview plugin switched on (you need both the gulp task to be running in the command prompt AND the chrome plugin to be switched on for automatic reload to work).

PHP files changes are also set up to track changes so the browser reloads automatically when your make changes in those too.

with git, you can track changes to your theme without worrying about the npm and gulp stuff getting in the way since the .gitignore file is set up to ignore all npm and gulp components (don't forget to uncomment the .gitignore commands, see step 8 of installation).

## Options

- if you want to include the distribution version of your css and javascript you can remove the "#development" line in .gitignore.

- you can easily change the name of the development folder and its structure by changing the jsFilesPath and cssFilesPath variables in the gulpfile.js file.

The source file paths are built by concatenating jsFilesPath + jsFiles variables and cssFilesPath + cssFiles.




