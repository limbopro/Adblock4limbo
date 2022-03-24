#!/bin/bash

cd /home/typecho/
rm surge_Adblock4limbo.list
cp Adblock4limbo.list surge_Adblock4limbo.list
sed -i s/reject/''/g `grep reject -rl --include="surge_Adblock4limbo.list" ./*` 
sed 's/.$//' surge_Adblock4limbo.list >> surge_Adblock4limbo.list.x
sed 's/.$//' surge_Adblock4limbo.list.x >> surge_Adblock4limbo.list
