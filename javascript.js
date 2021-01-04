(() => {
    const horns = [
        "Yamaha YHR-871D",
        "J.Michael FH-850",
        "J.Michael PFH-550S",
        "Alexander Double Horn 103",
        "Hans Hoyer 3702",
    ];

    const add = n => document.createElement(n);
    const addLabel = (type, content) => {
        let e = add(type);
        e.innerText = content;
        return e;
    };
    
    const main = () => {
        const addComma = i => i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
        [...Array((Math.floor(Math.random() * 4) + 4) * 3).keys()]
            .map(() => Math.floor(Math.random() * horns.length))
            .forEach(randomHorn => {
                let obj = add("obj");
                let img = add("imgBox");
                img.style.backgroundImage = "url('horn/horn" + randomHorn + ".png')";
                obj.appendChild(img);
                obj.appendChild(addLabel("name", horns[randomHorn]));
                obj.appendChild(addLabel("view", addComma(Math.floor(Math.random() * 32767)) + " views"));
                obj.appendChild(addLabel("like", addComma(90 + Math.floor(Math.random() * 10)) + "%"));
                document.getElementById("content").appendChild(obj);
            });

        document.getElementById("search").setAttribute("placeholder", `Search ${ Math.floor(Math.random() * 32767) } hornography...`);
    }
    
    main();
})();
