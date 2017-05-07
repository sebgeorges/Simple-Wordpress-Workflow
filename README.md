# Simple Wordpress Worflow using Gulp.js

## Description

This is a very basic workflow to install in your theme folder.

What it does:
- It concatenates all your css files from the development/css folder in one style.css saved at the root of the theme folder (and therefore used by wordpress)
- It concatenates all your javascript files from the development/js folder in one script.js file saved and minified as js/script.js.
- it compresses your image assets (jpeg, png, svg) and outputs the compressed images in assets/img.
- It adds a default command so you only need to call gulp in the command prompt to get it started
- It adds a live reload feature so that you can view changes live in the browser as you save your files
- The .gitingore file excludes allfiles from the workflow so you end up with minified css and js in your typical wordpress install with no extra files.

## Set up

1. Install Node.js

2. copy the repo in your wordpress theme root directory or with git:

        git init
    
        git clone https://github.com/sebgeorges/Simple-Wordpress-Workflow.git

Then copy the content of the repo and copy to your theme root directory

**WARNING**

Be careful if you already have folders named **js**, **development** or **assets** containing files at the theme root as this step may erase exisiting content! Ensure that you either rename your exisiting folders or manually transfer the content from the repo to your exisiting folder.

3. if it is already created, move the default style.css file to the development/css folder.

4. move all your javascript files to the development/js folder

5. in the package.json file:
change the information to match your own project

6. In the command prompt, cd to the 
directory to your wordpress theme root folder.
    
7. Run:

        npm install

8. In the gulpfile.js file:
- Add your own files to the jsFiles array (commented)
- Add your own files to the cssFiles array (commented)
- Save


9. open the .gitignore file and uncomment everything (remove the "#" character at the start of every line)

Test this in git Bash:

        git status
    
you should not see any of the worflow files or folders

10. install and activate the chrome plugin:
https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en
    
11. In functions.php enqueue a script.js file from the js folder at the root of your theme (not the one in development) and the stylesheet style.css from the theme root folder.

for example:

    function workflow_example_scripts() {
    wp_enqueue_script( 'workflow-example-javascript', get_template_directory_uri() . '/js/script.js', array(), true );
    
    wp_enqueue_style( 'workflow-example-style', get_stylesheet_uri() );
    }
    
    add_action( 'wp_enqueue_scripts', 'workflow_example_scripts' );


## Use

Before starting development work, ensure the follwing:
- javascript and css files that you want to work with are in their respective folders in the development folder.
- Your image assets are in the development/img folder
- Move the default wordpress style.css file to development/css (it will be replaced with a new minified version as soon as your run the gulp command for the first time)
- check that you have a folder named "js" at the root of your theme

You can then start the command prompt, cd to the theme root folder and run:

    gulp

Then, when you make changes in your source files in the development folder, the output files (minified and concatenated) are updated in you wordpress theme. At the same time you can view the changes live in the browser in chrome, with the live preview plugin switched on.

**Note**
(you need both the gulp task to be running in the command prompt AND the chrome plugin to be switched on for automatic reload to work).

PHP files changes are also set up to track changes so the browser reloads automatically when your make changes in those too.

with git, you can track changes to your theme without worrying about the npm and gulp stuff getting in the way since the .gitignore file is set up to ignore all npm and gulp components (don't forget to uncomment the .gitignore commands, see step 8 of installation).

## Adding Files

If you add css style sheets to your development/css folder, scripts to development/js or images to development/img while gulp is running, these will be processed as normal.If you add anything while gulp is not running, you can process it all by running the gulp command.

## Options

- if you want to include the development version of your css and javascript you can remove the "#development" line in .gitignore.

- you can easily change the name of the development folder and its structure by changing the jsFilesPath and cssFilesPath variables in the gulpfile.js file.

If you change the development folder structure, don't forget to update the imageSource variable.

The source file paths are built by concatenating jsFilesPath + jsFiles variables and cssFilesPath + cssFiles.

## Example

Assuming you are using the default folder structure

workflow example

1. run in command prompt

        gulp

2. You add new assets
- You add new images in development/img
- the images get compressed and the new compressed images are added to assets/img

3. Make changes in the PHP files
- You then link the images to your theme (e.g. as background image or figure) from the assets/img folder to one of the wordpress template files and see it happening live in the browser (Chrome) as you save the document.

4. Add styling
- style your background image/image figure from development/css/style.css (or any other stylesheet you added to the variable cssFiles)
- you can see the changes as the browser reloads automoatically
- the css is concatenated with any other stylesheet and gets compressed automatically.

5. Commit your changes in Git and push to your onlie repo if you are using one

### The result

Your theme repo will contain the concatenated and minified css sheets and the compressed images as well as all other theme files. The theme will not contain any of the gulp, npm or development components so that you have a clean and optimised theme that you can upload to your live server.




