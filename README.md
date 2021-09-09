# number3
attempt # 3
run :
pipenv istall
pipenv install should give/add all dependencies need to the pip lock file.

so then run:
pipenv shell
then you should be in your virtual environment. 

Then run:
flask run

then let us pray it works.

you should see a button, when you click, message should appear in blue (tailwind), the botton working to hide and show, will prove Alpine js is working.  

### IMPORTANT
You need to add node modules.   (i have ignored them in .gitignore (also i lost merged and took my gitignore over yours be careful on the merge so that you take your .gitignore over mine than just add the node_modules/ to yours))
step 1, git init -y
step 2, npm install tailwindcss postcss postcss-cli autoprefixer
tailwind.config.js and postcss.config.js have already been created through our last attempt.  But next time we start from scratch step 3 would be to run (npx tailwindcss init -p), which we did already
step 3, the package.json should be updated with my last git push, but make sure sure that the npm run build is looking at the right files/folders
  "scripts": {
    "build": "postcss static/src/main.css -o static/dist/main.css",
    "watch": "postcss static/src/main.css -o static/dist/main.css --watch"
  },

then run :  npm run build
then run: flask run
then you should see the custom colour (teal) added to the nav bar.
