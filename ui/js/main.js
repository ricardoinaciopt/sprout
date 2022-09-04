const { writeTextFile, readTextFile, BaseDirectory } = window.__TAURI__.fs;

if (document.getElementById("ok-input") !== null) {
  document.getElementById("ok-input").addEventListener(
    "click",
    async function () {
      let name = document.getElementById("name-input").value;
      if (name !== null && name !== "") {
        await writeTextFile(
          { path: "user.conf", contents: name },
          { dir: BaseDirectory.App }
        );
        location.replace("main.html");
      }
    },
    false
  );
}

if (document.getElementById("user") !== null) {
  const username = await readTextFile("user.conf", { dir: BaseDirectory.App });
}
