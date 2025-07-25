<<<<<<< HEAD
git checkout dev //get into dev
git fetch origin //getting all commits history
git pull origin dev //getting all datas

git checkout {branch name} //get into your own branch
git pull origin login //get all datas from your branch
git merge dev //merge that
# Git shows conflicts... if ->
# You fix the files manually 
git add .
git commit -m "Resolved conflicts merging dev into login"
git push origin login  (finally do this)
create pr in the github ---> Surya will review this






=======
git checkout dev //get into dev git fetch origin //getting all commits history git pull origin dev //getting all datas

git checkout {branch name} //get into your own branch git pull origin login //get all datas from your branch git merge dev //merge that

Git shows conflicts... if ->
You fix the files manually
git add . git commit -m "Resolved conflicts merging dev into login" git push origin login (finally do this) create pr in the github ---> Surya will review this
>>>>>>> 5e93230672e0992c4e1a569840a0ebda461ede7d
