import "../../../common/styles/common.scss";
import { createMenu, loadTheme } from "../../../common/ts/common";
import "../../common/styles/projects.scss";
import "../styles/misc.scss";
import "../../common/ts/projects";
import pdfFile from "../assets/pdfs/Cool_LaTeX_Template.pdf";

createMenu();
loadTheme();

(<HTMLAnchorElement>document.getElementById("latex-template-preview")).href =
    pdfFile;
