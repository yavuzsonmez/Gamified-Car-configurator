const { exec } = require("child_process");

let branchToCheck = "master"
let deployerScript = "./deployNow.sh"

exec("git fetch", () => {
	exec(`git diff ${branchToCheck} origin/${branchToCheck} | wc -l`, (error, stdout, stderr) => {
		if (error) {
			return;
		}
		if (stderr) {
			console.log("THERE ARE CHANGES!")
			exec("./deployNow.sh", () => { console.log("REDEPLOYING!")});
			return;
		}
		if (stdout == 0)
		{

			console.log("NO CHANGES!")
		}
		
		else
		{
			console.log("THERE ARE CHANGES!")
			exec("./deployNow.sh", () => { console.log("REDEPLOYING!")});
		}
	});

});