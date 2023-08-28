/* const handleClick = () => {
    const body = document.querySelector("body");
    body.innerHTML = `
            <h1>Parabéns!</h1>
            <h2>Seus reflexos estão bom!</h2>

        `;
    body.style.backgroundColor = "green";
    body.style.color = "#fff";
};

document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("btn-start");
    el.addEventListener("mouseover", () => {
        el.style.position = "absolute";
        el.style.top = `${Math.floor(Math.random() * (window.innerHeight - 14))}px`;
        el.style.left = `${Math.floor(Math.random() * (window.innerWidth - 30))}px`;
    });
    el.addEventListener("click", () => handleClick());
}); */

const handleClick = () => {
    const body = $("body");
    body.html(`
        <h1>Parabéns!</h1>
        <h2>Seus reflexos estão bom!</h2>
    `);

    body.css("background-color", "#000");
    body.css("color", "#fff");
};

const startButtonInit = () => {
    const el = $("#btn-start");
    el.on("mouseover", () => {
        el.css("position", "absolute");
        el.css("top", `${Math.floor(Math.random() * (window.innerHeight - 14))}px`);
        el.css("left", `${Math.floor(Math.random() * (window.innerWidth - 30))}px`);
    });
    el.on("click", () => handleClick());
}

const infoButtonInit = () => {
    const el = $("#btn-info");
    const elInitialText = el.html();
    el.on("click", () => {
        if (el.html() == elInitialText) {
            el.html("OCULTAR INFORMAÇÕES");
        } else {
            el.html(elInitialText);
        }
        console.log($(".info"));
        $(".info").slideToggle();
    });
};

$(document).ready(() => {
    startButtonInit();
    infoButtonInit();
});