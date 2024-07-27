import "../../common/styles/common.scss";
import "../styles/main.scss";
import { createMenu, loadTheme } from "../../common/ts/common";
import homeDarkBgVid from "../assets/home_dark_bg.mp4";
import homeLightBgVid from "../assets/home_light_bg.mp4";

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
            }
        }
    }
};

const observer = new MutationObserver(callback);

observer.observe(root, { attributes: true, attributeFilter: ["class"] });

loadTheme();
