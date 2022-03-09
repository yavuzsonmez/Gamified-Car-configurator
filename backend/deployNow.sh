ls
git stash
git pull origin master
pm2 stop backend
pm2 start "npm start" --name "backend"