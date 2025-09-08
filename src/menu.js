function menuPage() {
    const pizzas = [
        {name: "Deluxe", desc: "red sauce, pepperoni, sausage, bacon, green pepper, onion, mushroom", smPrice: "14.29", lgPrice: "24.99"},
        {name: "Meat", desc: "red sauce, pepperoni, sausage, bacon, ham, hamburger", smPrice: "14.99", lgPrice: "25.59"},
        {name: "Buffalo", desc: "ranch, buffalo chicken, mozzarella, buffalo drizzle", smPrice: "14.29", lgPrice: "23.09"},
        {name: "BBQ Chicken", desc: "bbq sauce, chicken, red onion, bbq drizzle", smPrice: "14.29", lgPrice: "24.99"},
        {name: "Greek", desc: "red sauce, spinach, feta, tomato, greek olive", smPrice: "13.69", lgPrice: "23.19"},
        {name: "Margherita", desc: "red sauce, garlic, fresh basil, fresh mozzarella, olive oil", smPrice: "13.09", lgPrice: "22.29"},
        {name: "Vegetarian", desc: "red sauce, mushroom, tomato, onion, green pepper, black olive", smPrice: "13.49", lgPrice: "23.09"}
    ];

    const content = document.querySelector("#content");

    const menuPg = document.createElement("div");
    menuPg.classList.add("menuPage");

    const h2 = document.createElement("h2");
    h2.textContent = "Menu";
    menuPg.appendChild(h2);

    pizzas.forEach(obj => {
        const row = document.createElement("div");
        row.classList.add("menuRow");
        
        const name = document.createElement("h3");
        name.textContent = obj.name;
        row.appendChild(name);

        const h4sm = document.createElement("h4");
        h4sm.textContent = "Sm";
        row.appendChild(h4sm);

        const h4lg = document.createElement("h4");
        h4lg.textContent = "Lg";
        row.appendChild(h4lg);

        const desc = document.createElement("p");
        desc.textContent = obj.desc;
        row.appendChild(desc);

        const smPrice = document.createElement("p");
        smPrice.textContent = obj.smPrice;
        row.appendChild(smPrice);

        const lgPrice = document.createElement("p");
        lgPrice.textContent = obj.lgPrice;
        row.appendChild(lgPrice);

        menuPg.appendChild(row);
    });

    content.appendChild(menuPg);
}
export default menuPage;