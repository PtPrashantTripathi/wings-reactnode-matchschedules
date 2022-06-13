cd ReactJS
rm calculate-score.js
npm install
echo "React installation is done"
cd ../NodeJS/
npm install;
echo "Nodejs installation is done"
node src/db/defaultDB.js
echo "Mongodb setup is done"
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
echo "All installations and setup are done. You are ready to go ahead!!!"
