rm -rf dist &&
npm run build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@gitee.com:big-bin/sc-ui-website.git &&
git push -f -u origin master &&
cd -
echo https://big-bin.gitee.io/sc-ui-website
