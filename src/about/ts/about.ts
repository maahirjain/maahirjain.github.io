import "../../common/styles/common.scss";
import { createMenu, loadTheme } from "../../common/ts/common";
import "../styles/about.scss";
import donutVP9 from "../assets/donut_VP9.webm";
import donutPRORES from "../assets/donut_PRORES.mov";
import pawnVP9 from "../assets/pawn_VP9.webm";
import pawnPRORES from "../assets/pawn_PRORES.mov";

createMenu();
loadTheme();

const helloOption = document.getElementById("hello-option");
const animationBtn = document.getElementById("animation-btn");
const chessBtn = document.getElementById("chess-btn");

const donutVideoElement = document.createElement("video");
donutVideoElement.muted = true;

const donutSourceMP4 = document.createElement("source");
donutSourceMP4.src = donutPRORES;
donutSourceMP4.type = "video/mp4; codecs=hvc1";

const donutSourceWEBM = document.createElement("source");
donutSourceWEBM.src = donutVP9;
donutSourceWEBM.type = "video/webm";

donutVideoElement.appendChild(donutSourceMP4);
donutVideoElement.appendChild(donutSourceWEBM);

animationBtn?.appendChild(donutVideoElement);

const pawnVideoElement = document.createElement("video");
pawnVideoElement.muted = true;

const pawnSourceMP4 = document.createElement("source");
pawnSourceMP4.src = pawnPRORES;
pawnSourceMP4.type = "video/mp4; codecs=hvc1";

const pawnSourceWEBM = document.createElement("source");
pawnSourceWEBM.src = pawnVP9;
pawnSourceWEBM.type = "video/webm";

pawnVideoElement.appendChild(pawnSourceMP4);
pawnVideoElement.appendChild(pawnSourceWEBM);
chessBtn?.appendChild(pawnVideoElement);

helloOption?.addEventListener("mouseover", () => {
    helloOption.style.animation = "wave 2.1s 0.6s infinite";
});

helloOption?.addEventListener("mouseout", () => {
    if (!helloOption.classList.contains("selected")) {
        helloOption.style.animation = "none";
    }
});

animationBtn?.addEventListener("mouseover", () => {
    donutVideoElement.loop = true;
    donutVideoElement.play();
});

animationBtn?.addEventListener("mouseout", () => {
    if (!animationBtn.classList.contains("selected")) {
        donutVideoElement.loop = false;
        donutVideoElement.pause();
    }
});

chessBtn?.addEventListener("mouseover", () => {
    pawnVideoElement.loop = true;
    pawnVideoElement.play();
});

chessBtn?.addEventListener("mouseout", () => {
    if (!chessBtn.classList.contains("selected")) {
        pawnVideoElement.loop = false;
        pawnVideoElement.pause();
    }
});

function select(option: string) {
    if (option === "animation") {
        animationBtn?.classList.add("selected");
        chessBtn?.classList.remove("selected");
        helloOption?.classList.remove("selected");

        donutVideoElement.loop = true;
        donutVideoElement.play();
        pawnVideoElement.loop = false;
        pawnVideoElement.pause();
        helloOption!.style.animation = "none";
    } else if (option === "chess") {
        chessBtn?.classList.add("selected");
        animationBtn?.classList.remove("selected");
        helloOption?.classList.remove("selected");

        pawnVideoElement.loop = true;
        pawnVideoElement.play();
        donutVideoElement.loop = false;
        donutVideoElement.pause();
        helloOption!.style.animation = "none";
    } else {
        helloOption?.classList.add("selected");
        chessBtn?.classList.remove("selected");
        animationBtn?.classList.remove("selected");

        pawnVideoElement.loop = false;
        pawnVideoElement.pause();
        donutVideoElement.loop = false;
        donutVideoElement.pause();
        helloOption!.style.animation = "wave 2.1s 0.6s infinite";
    }
}

animationBtn?.addEventListener("click", () => {
    select("animation");
});

chessBtn?.addEventListener("click", () => {
    select("chess");
});

helloOption?.addEventListener("click", () => {
    select("hello");
});

document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (helloOption?.classList.contains("selected")) {
        if (key === "ArrowDown" || key === "ArrowRight") {
            select("animation");
        } else if (key === "ArrowUp" || key === "ArrowLeft") {
            select("chess");
        }
    } else if (animationBtn?.classList.contains("selected")) {
        if (key === "ArrowDown" || key === "ArrowRight") {
            select("chess");
        } else if (key === "ArrowUp" || key === "ArrowLeft") {
            select("hello");
        }
    } else if (chessBtn?.classList.contains("selected")) {
        if (key === "ArrowDown" || key === "ArrowRight") {
            select("hello");
        } else if (key === "ArrowUp" || key === "ArrowLeft") {
            select("animation");
        }
    }
});

const learningDiv = document.querySelector(".learning");
const creatingDiv = document.querySelector(".creating");
const sharingDiv = document.querySelector(".sharing");
