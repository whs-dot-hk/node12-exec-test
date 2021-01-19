```sh
docker build -t test .
docker run -v`pwd`/index.js:/index.js -v`pwd`/test.xlsx:/test.xlsx -it test sh
node index.js
```
