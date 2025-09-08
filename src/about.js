function aboutPage() {
    const content = document.querySelector("#content");

    const aboutPg = document.createElement("div");
    aboutPg.classList.add("aboutPage");

    const rowOne = document.createElement("div");
    rowOne.classList.add("rowOne");
    aboutPg.appendChild(rowOne);

    const textOne = document.createElement("div");
    textOne.classList.add("textOne");
    rowOne.appendChild(textOne);

    const h2a = document.createElement("h2");
    h2a.textContent = "Italy in New York";
    textOne.appendChild(h2a);

    const paraOne = document.createElement("p");
    paraOne.textContent = "You dont have to go any further than the corner of Number Ave and State St to get an authentic Italian pie. Call ahead to make a reservation or place a carry out order.";
    textOne.appendChild(paraOne);

    const h2b = document.createElement("h2");
    h2b.textContent = "Our Promise";
    textOne.appendChild(h2b);

    const paraTwo = document.createElement("p");
    paraTwo.textContent = "Our family has spent decades perfecting our secret recipes. If anything is not to your satisfaction, we promise to make it right.";
    textOne.appendChild(paraTwo);

    const imgOne = document.createElement("div");
    imgOne.classList.add("imgOne");
    rowOne.appendChild(imgOne);

    const rowTwo = document.createElement("div");
    rowTwo.classList.add("rowTwo");
    aboutPg.appendChild(rowTwo);

    const h4 = document.createElement("h4");
    h4.textContent = "Panucci's Pizzeria";
    rowTwo.appendChild(h4);

    const addrOne = document.createElement("p");
    addrOne.textContent = "456 Number Ave"
    rowTwo.appendChild(addrOne);

    const addrTwo = document.createElement("p");
    addrTwo.textContent = "New York, NY 10001"
    rowTwo.appendChild(addrTwo);

    const br = document.createElement("br");
    rowTwo.appendChild(br);

    const phone = document.createElement("h3");
    phone.textContent = "(212) 111-9876";
    rowTwo.appendChild(phone);

    content.appendChild(aboutPg);
}
export default aboutPage;