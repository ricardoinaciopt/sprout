const { writeTextFile, readTextFile, readDir, BaseDirectory } =
  window.__TAURI__.fs;

const entries = await readDir("", {
  dir: BaseDirectory.App,
  recursive: true,
});

const filesInDir = Array.from(entries);

console.log(entries);
console.log("-------------");
console.log(filesInDir.length);

switch (filesInDir.lenght) {
  case 0:
    console.log("nao tem");
    if (document.getElementById("ok-input") !== null) {
      document
        .getElementById("ok-input")
        .addEventListener("click", async function () {
          let name = document.getElementById("name-input").value;
          if (name !== null && name !== "") {
            writeTextFile(
              { path: "user.conf", contents: name },
              { dir: BaseDirectory.App }
            );
          }
        });
      location.replace("main.html");
    }
    break;
  default:
    console.log("tem file");
    const username = readTextFile("user.conf", {
      dir: BaseDirectory.App,
    });
    location.replace("main.html");
    if (document.getElementById("user") !== null) {
      document.getElementById("user").textContent = username;
    }
    break;
}
