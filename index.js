const util = require("util");
const exec = util.promisify(require("child_process").exec);

const fsp = require("fs").promises;

async function inner() {
  const { stdout, stderr } = await exec(
    "ssconvert -I Gnumeric_Excel:xlsx -T Gnumeric_stf:stf_csv test.xlsx test.csv"
  );
  console.log("stdout:", stdout);
  console.error("stderr:", stderr);

  const data = await fsp.readFile("test.csv");

  console.log(data.toString());
}

async function outer() {
  await inner();
}

try {
  outer();
} catch (e) {
  console.log(e);
}
