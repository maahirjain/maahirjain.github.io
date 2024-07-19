export function createMenu(): void {
    const menu: HTMLElement | null = document.querySelector(".menu");

    const [div1, div2]: HTMLElement[] = [
        document.createElement("div"),
        document.createElement("div")
    ];

    div1.style.display = "flex";
    div1.style.gap = "16px";

    div2.style.display = "flex";
    div2.style.gap = "16px";

    const homeSVG: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>`;

    const aboutBtn: HTMLElement = document.createElement("button");
    aboutBtn.textContent = "About";

    const projectsBtn: HTMLElement = document.createElement("button");
    projectsBtn.textContent = "Projects";

    div1.innerHTML = homeSVG;
    div1.appendChild(aboutBtn);
    div1.appendChild(projectsBtn);

    const moonSVG: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.75,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.2,9.5"/></svg>`;

    div2.innerHTML = moonSVG;

    menu?.appendChild(div1);
    menu?.appendChild(div2);
}
