import "../../common/styles/common.scss";
import { createMenu, loadTheme } from "../../common/ts/common";
import "../styles/about.scss";
import donutVP9 from "../assets/donut_VP9.webm";
import donutPRORES from "../assets/donut_PRORES.mov";
import pawnVP9 from "../assets/pawn_VP9.webm";
import pawnPRORES from "../assets/pawn_PRORES.mov";
import donutBlender from "../assets/blender_donut_animation.mp4";
import vendingMachineBlender from "../assets/blender_vending_machine.png";
import learningSrc from "../assets/learning_diagram.png";
import creatingSrc from "../assets/creating_diagram.png";
import sharingSrc from "../assets/sharing_diagram.png";
import pdfFile from "../assets/pdfs/Maahir_Jain_Resume.pdf";

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

        load("animation");

        donutVideoElement.loop = true;
        donutVideoElement.play();
        pawnVideoElement.loop = false;
        pawnVideoElement.pause();
        helloOption!.style.animation = "none";
    } else if (option === "chess") {
        chessBtn?.classList.add("selected");
        animationBtn?.classList.remove("selected");
        helloOption?.classList.remove("selected");

        load("chess");

        pawnVideoElement.loop = true;
        pawnVideoElement.play();
        donutVideoElement.loop = false;
        donutVideoElement.pause();
        helloOption!.style.animation = "none";
    } else {
        helloOption?.classList.add("selected");
        chessBtn?.classList.remove("selected");
        animationBtn?.classList.remove("selected");

        load("hello");

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

function load(option: string) {
    const contentDiv = document.getElementById("about-content");

    if (option === "hello") {
        contentDiv!.innerHTML = `<h2>Hi, I'm Maahir Jain</h2>
            <p>I'm a junior at <a href="https://www.cc.gatech.edu/" target="_blank" rel="noopener noreferrer" class="gt">Georgia Tech</a>, majoring in computer science. My work is motivated by my commitment to learning, creating, and sharing.</p>

            <div class="slider-container">
                <div class="learning active">
                    <h2>LEARNING</h2>
                    <div class="content">
                        As a student, I am constantly engaged in learning. I strive to complement the theoretical foundations I learn in college with practical skills and experience. Here are some of my recent learnings.

                        <img></img>
                    </div>
                </div>

                <div class="creating inactive">
                    <h2>CREATING</h2>
                    <div class="content">
                        My journey of software creation began with simple games in Scratch. Since then, I've been exposed to much more technology and theory, which has not only given me new skills to create with, but has also refined my understanding of how to create. Here are some of the considerations I've experimented with recently through the process of creation.

                        <img></img>
                    </div>
                </div>

                <div class="sharing inactive">
                    <h2>SHARING</h2>
                    <div class="content">
                        It is my goal with every new skill I learn to use it in a way that helps people. I believe this is best achieved by sharing what I create, and iterating to deliver greater impact. Hence, in the near future, I hope to share more and more often.

                        <img></img>
                    </div>
                </div>
            </div>

            <div class="media">
                <div class="speech">maahirdjain@gmail.com</div>
                <svg id="github-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>
                <svg id="gmail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,18H18V9.25L12,13L6,9.25V18H4V6H5.2L12,10.25L18.8,6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>
                <svg id="linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" /></svg>
                <a id="resume-btn" type="application/pdf" target="_blank">Resume</a>
            </div>`;

        const learningDiv: HTMLElement | null =
            document.querySelector(".learning");
        const creatingDiv: HTMLElement | null =
            document.querySelector(".creating");
        const sharingDiv: HTMLElement | null =
            document.querySelector(".sharing");

        (<HTMLImageElement>learningDiv?.querySelector("img")).src = learningSrc;
        (<HTMLImageElement>creatingDiv?.querySelector("img")).src = creatingSrc;
        (<HTMLImageElement>sharingDiv?.querySelector("img")).src = sharingSrc;

        // eslint-disable-next-line no-inner-declarations
        function getActiveDiv() {
            if (learningDiv?.classList.contains("active")) {
                return learningDiv;
            } else if (creatingDiv?.classList.contains("active")) {
                return creatingDiv;
            } else {
                return sharingDiv;
            }
        }

        // eslint-disable-next-line no-inner-declarations
        function sliderChange(div: HTMLElement) {
            const activeDiv = getActiveDiv();

            if (div != activeDiv) {
                (<HTMLElement>div.querySelector(".content")).style.display =
                    "block";
                (<HTMLElement>(
                    activeDiv?.querySelector(".content")
                )).style.display = "none";

                div.classList.remove("inactive");
                div.classList.add("active");

                activeDiv?.classList.remove("active");
                activeDiv?.classList.add("inactive");
            }
        }

        learningDiv?.addEventListener("click", () => {
            sliderChange(learningDiv);
        });

        creatingDiv?.addEventListener("click", () => {
            sliderChange(creatingDiv);
        });

        sharingDiv?.addEventListener("click", () => {
            sliderChange(sharingDiv);
        });

        document
            .getElementById("github-icon")
            ?.addEventListener("click", () => {
                window.open("https://github.com/maahirjain", "_blank");
            });

        document.getElementById("gmail-icon")?.addEventListener("click", () => {
            window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=maahirdjain@gmail.com",
                "_blank"
            );
        });

        document
            .getElementById("linkedin-icon")
            ?.addEventListener("click", () => {
                window.open("https://linkedin.com/in/maahirjain/", "_blank");
            });

        (<HTMLAnchorElement>document.getElementById("resume-btn")!).href =
            pdfFile;
    } else if (option === "animation") {
        contentDiv!.innerHTML = `<h2>Animation</h2>
            <p>
                I've only picked up animation recently, but I've been amazed by what I can create with a few core tools. I like to think of myself as a creative guy, and I see animation as one avenue to explore my creativity. There's certainly a lot more to learn, but I'm excited to deepen my animation and 3D skills, and also extend them to the web with Three.JS and related tools. Nonetheless, here are some of my early projects created in Blender.
            </p>

            <div class="animation-img-container">
                <div>
                    <video controls></video>
                    <p>A 3D animation of a donut scene, created following <a href="https://www.youtube.com/playlist?list=PLjEaoINr3zgEPv5y--4MKpciLaoQYZB1Z" target="_blank" rel="noopener noreferrer">Blender Guru's Beginner Donut Tutorial</a></p>
                </div>

                <div>
                    <img alt="Blender vending machine render">
                    <p>A 3D stylistic model of a vending machine, created following <a href="https://youtu.be/BzTN2yTgTj0?si=Vx3zD4dh1Xbb3-f8" target="_blank" rel="noopener noreferrer">lacruzo's Grease Pencil Tutorial</a></p>
                </div>
            </div>`;

        const animationImgContainer = document.querySelector(
            ".animation-img-container"
        );

        animationImgContainer!.querySelector("video")!.src = donutBlender;
        animationImgContainer!.querySelector("img")!.src =
            vendingMachineBlender;
    } else {
        contentDiv!.innerHTML = `<h2>Chess</h2>
            <p>
                In 2020, during the pandemic, I got hooked onto chess. I played daily, actively watched chess content, and played online tournaments. Although I play less often now, when I do play, the game never ceases to excite and awe me. Here are some of the proud stats I've amounted till date. 
            </p>

            <div class="chess-stats-container">
                <div class="chesscom">
                    <div class="full-row">Chess.com</div>
                    <div class="full-row stat">Games: <div class="number">12,612</div></div>
                    <div class="stat">Highest Blitz Rating: <div class="number">1839</div></div>
                    <div class="stat">Highest Rapid Rating: <div class="number">1856</div></div>
                    <div class="stat">Highest Bullet Rating: <div class="number">2019</div></div>
                </div>

                <div class="lichess">
                    <div class="full-row">Lichess</div>
                    <div class="full-row stat">Games: <div class="number">11,336</div></div>
                    <div class="full-row stat">Highest Blitz Rating: <div class="number">2247</div></div>
                </div>
            </div>`;
    }
}

load("hello");
