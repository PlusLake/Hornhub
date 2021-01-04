const hornName = [
    "Yamaha YHR-871D",
    "J.Michael FH-850",
    "J.Michael PFH-550S",
    "Alexander Double Horn 103",
    "Hans Hoyer 3702",
];

function add(n) {
    return document.createElement(n);
}

function addLabel(type, content) {
    let e = add(type);
    e.innerText = content;
    return e;
}

function addComma(i) {
	return i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function gen() {
	let obj = add("obj");
	let random = Math.floor(Math.random() * hornName.length);

	let img = add("imgBox");
	img.style.backgroundImage = "url('horn/horn" + random + ".png')";
	obj.appendChild(img);
	obj.appendChild(addLabel("name", hornName[random]));
	obj.appendChild(addLabel("view", addComma(Math.floor(Math.random() * 32767)) + " views"));
	obj.appendChild(addLabel("like", addComma(90 + Math.floor(Math.random() * 10)) + "%"));

	document.getElementById("content").appendChild(obj);
}

function main() {
	let count = (Math.floor(Math.random() * 4) + 4) * 3;
	for(let i = 0; i < count; i++) {
		gen();
	}
}

main();