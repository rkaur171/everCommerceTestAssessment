Git commnads for new repository

echo "# Automation-files" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin git@github.com:rkaur171/Automation-files.git
git push -u origin master

Git commands for existing repository

git remote add origin git@github.com:rkaur171/Automation-files.git
git branch -M master
git push -u origin master
