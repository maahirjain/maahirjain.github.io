export function createMenu(): void {
    const menu: HTMLElement | null = document.querySelector(".menu");

    const [div1, div2]: HTMLElement[] = [
        document.createElement("div"),
        document.createElement("div")
    ];

    const homeSVG: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>`;

    const aboutAnchor: HTMLElement = document.createElement("a");
    aboutAnchor.textContent = "About";

    const projectsAnchor: HTMLElement = document.createElement("a");
    projectsAnchor.textContent = "Projects";

    div1.innerHTML = homeSVG;
    div1.appendChild(aboutAnchor);

    const projectsDiv: HTMLElement = document.createElement("div");
    projectsDiv.id = "projects-menu-item";
    projectsDiv.appendChild(projectsAnchor);

    const dropDownSVG: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>`;
    projectsDiv.innerHTML += dropDownSVG;

    const projectsDropdownDiv: HTMLElement = document.createElement("div");
    projectsDropdownDiv.id = "projects-dropdown";
    projectsDropdownDiv.appendChild(projectsDiv);

    const featuredAnchor: HTMLElement = document.createElement("a");
    const webAnchor: HTMLElement = document.createElement("a");
    const mobileAnchor: HTMLElement = document.createElement("a");
    const miscAnchor: HTMLElement = document.createElement("a");

    featuredAnchor.textContent = "Featured";
    webAnchor.textContent = "Web";
    mobileAnchor.textContent = "Mobile";
    miscAnchor.textContent = "Misc";

    projectsDropdownDiv.appendChild(featuredAnchor);
    projectsDropdownDiv.appendChild(webAnchor);
    projectsDropdownDiv.appendChild(mobileAnchor);
    projectsDropdownDiv.appendChild(miscAnchor);

    div1.appendChild(projectsDiv);

    const moonSVG: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.75,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.2,9.5"/></svg>`;

    div2.innerHTML = moonSVG;

    menu?.appendChild(div1);
    menu?.appendChild(div2);

    projectsDropdownDiv.classList.add("hide");

    projectsDropdownDiv.style.left = `${projectsDiv.getBoundingClientRect().left - 8}px`;
    projectsDropdownDiv.style.top = `${projectsDiv.getBoundingClientRect().top + projectsDiv.offsetHeight}px`;

    document
        .querySelector(".container")
        ?.insertBefore(projectsDropdownDiv, document.querySelector(".content"));

    window.addEventListener("resize", () => {
        projectsDropdownDiv.style.left = `${projectsDiv.getBoundingClientRect().left - 8}px`;
    });

    const dropDownSVGElement: Node | null = document.querySelector(
        "#projects-menu-item svg"
    );

    dropDownSVGElement?.addEventListener("click", () => {
        projectsDropdownDiv.classList.remove("hide");
    });

    document.addEventListener("click", (e) => {
        if (
            !projectsDropdownDiv?.contains(e.target as Node) &&
            !dropDownSVGElement?.contains(e.target as Node)
        ) {
            projectsDropdownDiv.classList.add("hide");
        }
    });
}
