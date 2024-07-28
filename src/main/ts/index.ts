import "../../common/styles/common.scss";
import "../styles/main.scss";
import { createMenu, loadTheme } from "../../common/ts/common";
import homeDarkBgVid from "../assets/home_dark_bg.mp4";
import homeLightBgVid from "../assets/home_light_bg.mp4";
import lightThemeAudioSrc from "../assets/home_light_bg_audio.mp3";
import darkThemeAudioSrc from "../assets/home_dark_bg_audio.mp3";
import checkboxAudioSrc from "../assets/checkbox_audio.mp3";
import hello3DLightImgSrc from "../assets/hello_3d_light.png";
import hello3DDarkImgSrc from "../assets/hello_3d_dark.png";

let backgroundAudioAllowed: boolean = false;

createMenu();

const interBubble = document.querySelector<HTMLDivElement>(".interactive")!;
let curX = 0;
let curY = 0;
let tgX = 0;
let tgY = 0;

function move() {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(() => {
        move();
    });
}

window.addEventListener("mousemove", (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
});

move();

const root: HTMLElement = document.documentElement;

const callback = (
    mutationsList: MutationRecord[],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _observer: MutationObserver
) => {
    for (const mutation of mutationsList) {
        if (
            mutation.type === "attributes" &&
            mutation.attributeName === "class"
        ) {
            const newClass = (<HTMLElement>mutation.target).className;
            if (newClass === "light-theme") {
                document.querySelector("source")!.src = homeLightBgVid;

                (<HTMLVideoElement>document.getElementById("homeBgVid")).load();

                root.style.setProperty("--color-bg1", "#f5d7bd");
                root.style.setProperty("--color-bg2", "#e8c9ab");
                root.style.setProperty("--color1", "210, 168, 125");
                root.style.setProperty("--color2", "190, 152, 109");
                root.style.setProperty("--color3", "169, 132, 90");
                root.style.setProperty("--color4", "154, 119, 79");
                root.style.setProperty("--color5", "141, 107, 72");
                root.style.setProperty("--color-interactive", "164, 137, 113");
                root.style.setProperty("--circle-size", "80%");
                root.style.setProperty("--blending", "hard-light");

                (<HTMLImageElement>document.querySelector("img")).src =
                    hello3DLightImgSrc;
            } else if (newClass === "dark-theme") {
                document.querySelector("source")!.src = homeDarkBgVid;

                (<HTMLVideoElement>document.getElementById("homeBgVid")).load();

                root.style.setProperty("--color-bg1", "#283e30");
                root.style.setProperty("--color-bg2", "#395741");
                root.style.setProperty("--color1", "73, 110, 76");
                root.style.setProperty("--color2", "88, 129, 87");
                root.style.setProperty("--color3", "126, 153, 113");
                root.style.setProperty("--color4", "163, 177, 138");
                root.style.setProperty("--color5", "209, 213, 195");
                root.style.setProperty("--color-interactive", "238, 236, 232");
                root.style.setProperty("--circle-size", "80%");
                root.style.setProperty("--blending", "hard-light");

                (<HTMLImageElement>document.querySelector("img")).src =
                    hello3DDarkImgSrc;
            }
        }
    }
};

const observer = new MutationObserver(callback);

observer.observe(root, { attributes: true, attributeFilter: ["class"] });

loadTheme();

const bgAudioDiv: HTMLElement | null = document.querySelector(".wrap div");
const bgAudioBtn: HTMLElement | null = document.querySelector(".wrap input");

const audioOnSVG = document.getElementById("audio-on");
const audioOffSVG = document.getElementById("audio-off");
const lightThemeAudio = new Audio(lightThemeAudioSrc);
const darkThemeAudio = new Audio(darkThemeAudioSrc);

lightThemeAudio.loop = true;
darkThemeAudio.loop = true;

let backgroundAudio = darkThemeAudio;
let otherBgAudio = lightThemeAudio;

if (isScreenDimensionRestricted()) {
    bgAudioDiv!.style.display = "none";
}

bgAudioBtn?.addEventListener("change", () => allowBgAudio());

function allowBgAudio() {
    if (document.documentElement.className === "dark-theme") {
        bgAudioDiv!.style.borderBottom = "2px solid rgb(80, 250, 123)";
    } else {
        bgAudioDiv!.style.borderBottom = "2px solid rgb(12, 93, 86)";
    }

    if (localStorage.getItem("audioState") === "on") {
        new Audio(checkboxAudioSrc).play();
    }

    backgroundAudioAllowed = true;

    if (
        localStorage.getItem("audioState") === "on" &&
        !isScreenDimensionRestricted()
    ) {
        backgroundAudio.play();
        otherBgAudio.pause();
    }

    bgAudioDiv!.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 2000,
        iterations: 1
    });

    setTimeout(function () {
        bgAudioDiv!.style.display = "none";
    }, 2000);

    (<HTMLElement>document.querySelector(".menu")).style.borderRadius = "10px";
}

function playBgAudio() {
    if (
        localStorage.getItem("audioState") === "on" &&
        backgroundAudioAllowed &&
        !isScreenDimensionRestricted()
    ) {
        otherBgAudio.pause();
        backgroundAudio.play();
    }
}

function isScreenDimensionRestricted() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const ratio = width / height;
    return ratio <= 1.55;
}

function updateAudioSource() {
    const rootElement = document.documentElement;
    const isDarkTheme = rootElement.classList.contains("dark-theme");
    backgroundAudio = isDarkTheme ? darkThemeAudio : lightThemeAudio;
    otherBgAudio = isDarkTheme ? lightThemeAudio : darkThemeAudio;
}

function toggleAudio(on: boolean) {
    if (on && !isScreenDimensionRestricted()) {
        playBgAudio();
    } else {
        backgroundAudio.pause();
    }
}

function handleResize() {
    if (isScreenDimensionRestricted()) {
        backgroundAudio.pause();
    } else if (audioOnSVG!.style.display === "block") {
        playBgAudio();
    }
}

updateAudioSource();
playBgAudio();

audioOnSVG!.addEventListener("click", () => {
    toggleAudio(false);
});

audioOffSVG!.addEventListener("click", () => {
    toggleAudio(true);
});

window.addEventListener("resize", () => {
    handleResize();
});

const observer2 = new MutationObserver(() => {
    updateAudioSource();
    playBgAudio();
});

observer2.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"]
});

window.addEventListener("resize", () => {
    if (!isScreenDimensionRestricted() && !backgroundAudioAllowed) {
        (<HTMLElement>document.querySelector(".wrap div")).style.display =
            "block";
    }
});
