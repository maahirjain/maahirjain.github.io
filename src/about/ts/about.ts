import "../../common/styles/common.scss";
import { createMenu, loadTheme } from "../../common/ts/common";
import "../styles/about.scss";
import donutVP9 from "../assets/donut_VP9.webm";
import donutPRORES from "../assets/donut_PRORES.mov";
import pawnVP9 from "../assets/pawn_VP9.webm";
import pawnPRORES from "../assets/pawn_PRORES.mov";

createMenu();
loadTheme();

const donutVideoElement = document.createElement("video");

const donutSourceMP4 = document.createElement("source");
donutSourceMP4.src = donutPRORES;
donutSourceMP4.type = "video/mp4; codecs=hvc1";

const donutSourceWEBM = document.createElement("source");
donutSourceWEBM.src = donutVP9;
donutSourceWEBM.type = "video/webm";

donutVideoElement.appendChild(donutSourceMP4);
donutVideoElement.appendChild(donutSourceWEBM);

document.getElementById("animation-btn")?.appendChild(donutVideoElement);

const pawnVideoElement = document.createElement("video");
pawnVideoElement.autoplay = true;
pawnVideoElement.loop = true;

const pawnSourceMP4 = document.createElement("source");

const pawnSourceWEBM = document.createElement("source");
pawnSourceWEBM.src = pawnVP9;
pawnSourceWEBM.type = "video/webm";

pawnVideoElement.appendChild(pawnSourceMP4);
pawnVideoElement.appendChild(pawnSourceWEBM);

document.getElementById("chess-btn")?.appendChild(pawnVideoElement);
