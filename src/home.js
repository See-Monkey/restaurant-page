function homePage() {
    const hours = [
        {day: "Monday", time: "Closed"},
        {day: "Tuesday - Friday", time: "5 - 10 pm"},
        {day: "Saturday", time: "noon - 10 pm"},
        {day: "Monday", time: "noon - 9 pm"}
    ];

    const content = document.querySelector("#content");
    
    const homePg = document.createElement("div");
    homePg.classList.add("homePage");

    const rowOne = document.createElement("div");
    rowOne.classList.add("rowOne");
    homePg.appendChild(rowOne);

    const imgOne = document.createElement("div");
    imgOne.classList.add("imgOne");
    rowOne.appendChild(imgOne);

    const textOne = document.createElement("div");
    textOne.classList.add("textOne");
    rowOne.appendChild(textOne);

    const h2a = document.createElement("h2");
    h2a.textContent = "Simply the Best";
    textOne.appendChild(h2a);

    const paraOne = document.createElement("p");
    paraOne.textContent = "Over 45 years of visiting farms and produce partners in Italy guarantees the highest quality control on our key ingredients.";
    textOne.appendChild(paraOne);

    const br = document.createElement("br");
    textOne.appendChild(br);

    const h2b = document.createElement("h2");
    h2b.textContent = "Time Honored Tradition";
    textOne.appendChild(h2b);

    const paraTwo = document.createElement("p");
    paraTwo.textContent = "Family recipes that have been passed down for generations, rooted in Italian traditions, lovingly crafted to share with you.";
    textOne.appendChild(paraTwo);

    const rowTwo = document.createElement("div");
    rowTwo.classList.add("rowTwo");
    homePg.appendChild(rowTwo);

    const textTwo = document.createElement("div");
    textTwo.classList.add("textTwo");
    rowTwo.appendChild(textTwo);

    const hoursHeader = document.createElement("h2");
    hoursHeader.textContent = "Hours";
    textTwo.appendChild(hoursHeader);

    hours.forEach(obj => {
        const day = document.createElement("h3");
        const time = document.createElement("p");
        day.textContent = obj.day;
        time.textContent = obj.time;
        textTwo.appendChild(day);
        textTwo.appendChild(time);
    });

    const imgTwo = document.createElement("div");
    imgTwo.classList.add("imgTwo");
    rowTwo.appendChild(imgTwo);

    content.appendChild(homePg);
}
export default homePage;