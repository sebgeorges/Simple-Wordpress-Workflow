#Simple Wordpress Worflow using Gulp.js

##Description

This is a very basic workflow to install in your theme folder.

What it does:
- It concatenates all your css files in one style.css file which is then minified.
- It concatenates all your javascript files in one script.js file which is then minified.
- It adds a default command so you only need to call gulp in the command prompt to get it started
- It adds a live reload feature so that you can view changes live in the browser as you save your files
- The .gitingore file excludes allfiles from the workflow so you end up with minified css and js in your typical wordpress install with no extra files.

##10 step Installation

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
    
10. In the command prompt run:
    gulp








