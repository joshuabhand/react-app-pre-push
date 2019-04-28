This project demonstrates the module pre-push.

## Install Pre-push

Windows users:
1) Modify node_modules/pre-push/index.js
Add .cmd extension to 'npm' references.
'npm' -> 'npm.cmd'

2) Install Node.js somewhere other than Program Files
The space in the directory path will cause this module to fail when looking for npm.
You will receive an error such as "cannot find package.json" or "cannot find root .git directory".

3) Run git bash as admin when installing module
If you npm install normally, you will get a permission error because windows will try to create a .symlink file.

4) Update node_modules/pre-push/hook file with delete-branch exception
Add the bash script that prevents hook from running when deleting remote branches.

Mac users:
1) Update node_modules/pre-push/hook file with delete-branch exception
Add the bash script that prevents hook from running when deleting remote branches.

## More info

https://github.com/dflourusso/pre-push
