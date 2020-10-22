rm -rf dist &&
npm run build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:zhangbin2013/sc-ui-website.git &&
git push -f -u origin main &&
cd -
echo https://github.com/zhangbin2013/sc-ui-website/


mkdir sc-ui-website
cd sc-ui-website
git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/big-bin/sc-ui-website.git
git push -u origin master
