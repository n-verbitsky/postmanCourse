const myPC = {
    os: "Windows 10 Pro",
    version: "10.07.1",
    language: "English",
    location: "Belarus",
}

for (const key in myPC) {
    if (myPC.hasOwnProperty(key)) {
        const element = myPC[key];
        console.log(element);
    }
}