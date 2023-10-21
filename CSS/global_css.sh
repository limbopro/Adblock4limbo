 #!/bin/bash
 rm easylist.txt 
 wget  https://easylist.to/easylist/easylist.txt 
 grep -E '^#{2}\.\w{3,100}' ./easylist.txt > test1.css
 grep -E '^#{3}\w{3,100}' ./easylist.txt > test.css
 cat test1.css >> test.css
 sed -i 's/##//' test.css
sed -i 's/$/,&/g' ./test.css
