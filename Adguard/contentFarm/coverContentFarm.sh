#!/bin/bash

cd /home/typecho/Adguard/contentFarm
rm ./contentFarm.js
rm ./contentFarm.block.origin
rm ./scam-sites.txt

wget https://raw.githubusercontent.com/cobaltdisco/Google-Chinese-Results-Blocklist/master/GHHbD_perma_ban_list.txt
wget https://raw.githubusercontent.com/danny0838/content-farm-terminator/gh-pages/files/blocklist/scam-sites.txt
mv ./GHHbD_perma_ban_list.txt ./contentFarm.block.origin
cat ./scam-sites.txt >> ./contentFarm.block.origin

sed 's/^/HEADD&/g' ./contentFarm.block.origin > ./contentFarm.block.addHead 
sed 's/$/ENDD/' ./contentFarm.block.addHead > ./contentFarm.block.list

sed -i s/HEADD/'"'/g `grep HEADD -rl --include="*.list" ./*` 
sed -i s/ENDD/'",'/g `grep ENDD -rl --include="*.list" ./*`

date=$(env LANG=en_US.UTF-8 date "+%e/%b/%Y/%R");
web_num=$(grep -c "" ./contentFarm.block.list);

cat ./contentFarm.Head.example > ./contentFarm.js
echo -e "There are $web_num content farm domains in total until now.\nLast updated at $date\n*/\n" >> ./contentFarm.js
cat ./contentFarm.Ads.example >> ./contentFarm.js
echo -e "\nvar contentFarm_Domains = [" >> ./contentFarm.js
cat ./contentFarm.block.list >> ./contentFarm.js
cat ./contentFarm.End.example >> ./contentFarm.js
cp -rf ./contentFarm.js /home/typecho/Adguard/