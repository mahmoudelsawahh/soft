git pull
cp .htaccess ..
npm i
npm run build
npx kill-port 3009
node app.js 2>&1 > /dev/null &
# pgrep 
# git config credential.helper store