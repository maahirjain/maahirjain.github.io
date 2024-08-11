(()=>{"use strict";var n={398:(n,e,A)=>{A.d(e,{A:()=>a});var t=A(354),o=A.n(t),r=A(314),i=A.n(r)()(o());i.push([n.id,'.light-theme body{background-color:#faf9f6;color:#000}.light-theme .menu{background-color:rgba(0,0,0,.5);color:#fff}.light-theme path{fill:#fff}.light-theme #projects-menu-item path{fill:#fff}.light-theme #projects-dropdown{background-color:rgba(0,0,0,.5);color:#fff}.dark-theme body{background-color:#21222c;color:#fff}.dark-theme .menu{background-color:rgba(255,255,255,.1);color:#fff}.dark-theme path{fill:#fff}.dark-theme #projects-menu-item path{fill:#fff}.dark-theme #projects-dropdown{background-color:rgba(255,255,255,.1);color:#fff}*{font-family:Avenir,Montserrat,Corbel,"URW Gothic",source-sans-pro,sans-serif;box-sizing:border-box}body{min-height:100vh;margin:0}.container{background:none;width:75%;height:100%;margin:0 auto}.menu{position:sticky;top:0;display:flex;justify-content:space-between;flex-wrap:wrap;padding:8px;border-radius:10px;margin-top:16px;z-index:3}.menu>div{display:flex;align-items:center;flex-wrap:wrap;gap:60px}.menu>div:last-child{gap:20px}.menu a:hover{text-decoration:underline;text-underline-offset:8px}a{color:inherit;text-decoration:inherit}#projects-menu-item{display:flex;align-items:center;gap:8px}#projects-menu-item svg{width:25px}#projects-menu-item svg:hover{transform:scale(1.2)}#projects-dropdown{position:fixed;display:flex;flex-direction:column;width:min-content;padding:8px;border-radius:0px 0px 10px 10px;z-index:3}#projects-dropdown a{opacity:75%}#projects-dropdown a:hover{opacity:100%}.hide{display:none !important}svg{width:30px}#home:hover{transform:scale(1.2)}#moon:hover,#audio-on:hover,#audio-off:hover{animation:swing 2s infinite}#sun:hover{animation:spin 4s infinite}#audio-off{display:none}.content{padding:min(.85rem,68px)}h1{font-size:3rem;padding:0;margin:100px 0px 46px}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes swing{20%{transform:rotate(15deg)}40%{transform:rotate(-10deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-5deg)}100%{transform:rotate(0deg)}}@media(max-width: 680px){.light-theme .menu>div{background-color:rgba(0,0,0,.5)}.dark-theme .menu>div{background-color:rgba(255,255,255,.1)}.dark-theme .menu,.light-theme .menu,.menu{background:none !important}.menu{flex-direction:column;gap:0}.menu>div{gap:10px;padding:8px;border-radius:10px}.menu>div:first-child{justify-content:space-between;order:2;border-radius:10px 0px 10px 10px}.menu>div:last-child{justify-content:center;width:100px;margin-left:auto;border-radius:10px 10px 0px 0px}}',"",{version:3,sources:["webpack://./src/common/styles/common.scss"],names:[],mappings:"AAUI,kBACI,wBAAA,CACA,UAAA,CAGJ,mBACI,+BAAA,CACA,UAAA,CAGJ,kBACI,SAAA,CAGJ,sCACI,SAAA,CAGJ,gCACI,+BAAA,CACA,UAAA,CApBJ,iBACI,wBAAA,CACA,UAAA,CAGJ,kBACI,qCAAA,CACA,UAAA,CAGJ,iBACI,SAAA,CAGJ,qCACI,SAAA,CAGJ,+BACI,qCAAA,CACA,UAAA,CAIR,EACI,4EAAA,CACA,qBAAA,CAGJ,KACI,gBAAA,CACA,QAAA,CAGJ,WACI,eAAA,CACA,SA3Cc,CA4Cd,WAAA,CACA,aAAA,CAGJ,MACI,eAAA,CACA,KAAA,CACA,YAAA,CACA,6BAAA,CACA,cAAA,CACA,WAAA,CACA,kBAAA,CACA,eAAA,CACA,SAAA,CAEA,UACI,YAAA,CACA,kBAAA,CACA,cAAA,CACA,QAAA,CAEA,qBACI,QAAA,CAIR,cACI,yBAAA,CACA,yBAAA,CAIR,EACI,aAAA,CACA,uBAAA,CAGJ,oBACI,YAAA,CACA,kBAAA,CACA,OAAA,CAEA,wBACI,UAAA,CAEA,8BACI,oBAAA,CAKZ,mBACI,cAAA,CACA,YAAA,CACA,qBAAA,CACA,iBAAA,CACA,WAAA,CACA,+BAAA,CACA,SAAA,CAEA,qBACI,WAAA,CAEA,2BACI,YAAA,CAKZ,MACI,uBAAA,CAGJ,IACI,UAAA,CAGJ,YACI,oBAAA,CAGJ,6CACI,2BAAA,CAGJ,WACI,0BAAA,CAGJ,WACI,YAAA,CAGJ,SACI,wBA3IgB,CA8IpB,GACI,cAAA,CACA,SAAA,CACA,qBAAA,CAGJ,gBACI,KAAA,sBAAA,CACA,GAAA,wBAAA,CAAA,CAGJ,iBACI,IAAA,uBAAA,CACA,IAAA,wBAAA,CACA,IAAA,sBAAA,CACA,IAAA,uBAAA,CACA,KAAA,sBAAA,CAAA,CAGJ,yBAEQ,uBACI,+BAAA,CADJ,sBACI,qCAAA,CAIR,2CACI,0BAAA,CAGJ,MACI,qBAAA,CACA,KAAA,CAEA,UACI,QAAA,CACA,WAAA,CACA,kBAAA,CAGJ,sBACI,6BAAA,CACA,OAAA,CACA,gCAAA,CAGJ,qBACI,sBAAA,CACA,WAAA,CACA,gBAAA,CACA,+BAAA,CAAA",sourcesContent:['@import "./themes";\n\n$container-padding: min(0.85rem, 68px);\n$container-width: 75%;\n$menu-element-dimension: min(68px, 2rem);\n$menu-btn-font-size: min(34px, 1rem);\n$orange: rgb(255, 117, 24);\n$pink: rgb(230, 0, 103);\n  \n@include themify($themes) {\n    body {\n        background-color: themed(bg);\n        color: themed(text);\n    }\n\n    .menu {\n        background-color: themed(opacity);\n        color: white;\n    }\n\n    path {\n        fill: white;\n    }\n\n    #projects-menu-item path {\n        fill: white;\n    }\n\n    #projects-dropdown {\n        background-color: themed(opacity);\n        color: white;\n    }\n}\n\n* {\n    font-family: Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif;\n    box-sizing: border-box;\n}\n\nbody {\n    min-height: 100vh;\n    margin: 0;\n}\n\n.container {\n    background: none;\n    width: $container-width;\n    height: 100%;\n    margin: 0 auto;\n}\n\n.menu {\n    position: sticky;\n    top: 0;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    padding: 8px;\n    border-radius: 10px;\n    margin-top: 16px;\n    z-index: 3;\n\n    > div {\n        display: flex;\n        align-items: center;\n        flex-wrap: wrap;\n        gap: 60px;\n\n        &:last-child {\n            gap: 20px;\n        }\n    }\n\n    a:hover {\n        text-decoration: underline;\n        text-underline-offset: 8px;\n    }\n}\n\na {\n    color: inherit;\n    text-decoration: inherit;\n}\n\n#projects-menu-item {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n\n    svg {\n        width: 25px;\n\n        &:hover {\n            transform: scale(1.2);\n        }\n    }\n}\n\n#projects-dropdown {\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    width: min-content;\n    padding: 8px;\n    border-radius: 0px 0px 10px 10px;\n    z-index: 3;\n\n    a {\n        opacity: 75%;\n\n        &:hover {\n            opacity: 100%;\n        }\n    }\n} \n\n.hide {\n    display: none !important;\n}\n\nsvg {\n    width: 30px;\n}\n\n#home:hover {\n    transform: scale(1.2);\n}\n\n#moon:hover, #audio-on:hover, #audio-off:hover {\n    animation: swing 2s infinite;\n}\n\n#sun:hover {\n    animation: spin 4s infinite;\n}\n\n#audio-off {\n    display: none;\n}\n\n.content {\n    padding: $container-padding;\n}\n\nh1 {\n    font-size: 3rem;\n    padding: 0;\n    margin: 100px 0px 46px;\n}\n\n@keyframes spin {\n    from { transform:rotate(0deg); }\n    to { transform:rotate(360deg); }\n}\n\n@keyframes swing { \n    20% { transform: rotate(15deg); } \n    40% { transform: rotate(-10deg); } \n    60% { transform: rotate(5deg); } \n    80% { transform: rotate(-5deg); } \n    100% { transform: rotate(0deg); } \n} \n\n@media (max-width: 680px) {\n    @include themify($themes) {\n        .menu > div {\n            background-color: themed(opacity);\n        }\n    }\n\n    .dark-theme .menu, .light-theme .menu, .menu {\n        background: none !important;\n    }\n\n    .menu {\n        flex-direction: column;\n        gap: 0;\n\n        > div {\n            gap: 10px;\n            padding: 8px;\n            border-radius: 10px;\n        }\n\n        > div:first-child {\n            justify-content: space-between;\n            order: 2;\n            border-radius: 10px 0px 10px 10px;\n        }\n\n        > div:last-child {\n            justify-content: center;\n            width: 100px;\n            margin-left: auto;\n            border-radius: 10px 10px 0px 0px;\n        }\n    }\n}\n  '],sourceRoot:""}]);const a=i},906:(n,e,A)=>{A.d(e,{A:()=>a});var t=A(354),o=A.n(t),r=A(314),i=A.n(r)()(o());i.push([n.id,":root{--rotation-1: -60deg;--rotation-2: 0deg;--rotation-3: 60deg;--rotation-4: 120deg;--rotation-5: 180deg;--rotation-6: 240deg}.full-row{--radius: 216px}.small{--width: 100vw;--radius: calc(0.42 * var(--width))}.x-small{--width: 100vw;--radius: calc(0.40 * var(--width))}.light-theme #projects{text-decoration-color:#bdd7e7}.light-theme .grid>div{background-color:rgba(0,0,0,.5);border:2px solid #000}.light-theme .featured-p{background-color:#3b3b3b;color:#fff}.light-theme .project-text{border:2px solid #000}.light-theme .project-text a{color:#0c5d56}.light-theme .project-text a:hover{text-decoration:underline}.dark-theme #projects{text-decoration-color:#ac83e5}.dark-theme .grid>div{background-color:rgba(255,255,255,.1);border:2px solid #fff}.dark-theme .featured-p{background-color:#8be9fd;color:#000}.dark-theme .project-text{border:2px solid #fff}.dark-theme .project-text a{color:#50fa7b}.dark-theme .project-text a:hover{text-decoration:underline}#projects{text-decoration:underline;text-underline-offset:8px}.grid{display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:16px;width:100%}.grid>div{display:flex;color:#fff;border-radius:10px;min-height:300px;overflow:auto}.featured-div{position:relative;overflow:visible !important;border-radius:10px 0px 10px 10px !important}.featured-p{position:absolute;top:-32px;right:-2px;padding:4px 8px 4px;margin:0;border-radius:10px 10px 0px 0px}.full-row{grid-column:1/-1}.project-img{width:550px;padding:32px;overflow:hidden}.project-img img{width:100%;border-radius:10px;object-fit:contain}.carousel-container{display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:32px;width:550px}.img-container{display:flex;margin-top:10px;width:504px;height:156px;perspective:1000px}.carousel{display:flex;justify-content:center;align-items:center;height:100%;width:100%;transform-style:preserve-3d;transition:transform 1s}.item{display:block;position:absolute;aspect-ratio:16/9;width:240px;height:auto;text-align:center;color:#fff;border-radius:10px;overflow:hidden}.item img{width:100%;height:100%;object-fit:contain}.a{transform:rotateY(var(--rotation-1)) translateZ(var(--radius))}.b{transform:rotateY(var(--rotation-2)) translateZ(var(--radius))}.c{transform:rotateY(var(--rotation-3)) translateZ(var(--radius))}.d{transform:rotateY(var(--rotation-4)) translateZ(var(--radius))}.e{transform:rotateY(var(--rotation-5)) translateZ(var(--radius))}.f{transform:rotateY(var(--rotation-6)) translateZ(var(--radius))}.project-info{padding:32px;box-sizing:border-box;line-height:1.5;width:50%;min-width:300px}.title-1{display:none}h2{text-align:center;margin:0;font-size:2rem}.project-text{padding:8px;border-radius:10px;height:120px;overflow:auto}kbd{font-family:monospace;padding:2px 4px;border:1px solid #000;border-radius:3px;box-shadow:inset 0 -2px 0 #000}code{font-family:monospace;padding:2px 4px;border-radius:3px;word-break:break-all}.dark-theme kbd{background-color:#e3e6e8;color:#000}.light-theme kbd{background-color:#3b3b3b;color:#fff}.dark-theme code{background-color:#e3e6e8;color:#000}.light-theme code{background-color:#3b3b3b;color:#fff}.project-btn-container{display:flex;align-items:center;margin-top:24px;gap:8px}.project-btn-container .front{padding-left:0;padding-right:0}.project-btn-container a{padding:6px 15px}.pushable{border-radius:12px;border:none;padding:0;cursor:pointer;outline-offset:4px}.front{display:block;background:#fff;padding:6px 15px;border-radius:12px;font-size:1rem;transform:translateY(-6px)}.pushable:active .front{transform:translateY(-2px)}.dark-theme .pushable{background:#000}.light-theme .pushable{background:#3b3b3b}.dark-theme .front{background:#8be9fd}.light-theme .front{background:#fff}.small{flex-direction:column;align-items:center;padding:16px}.small .carousel-container,.small .project-info{padding:0}.small .carousel-btns{margin-top:24px}.small .title-1{display:block;margin-bottom:16px}.small .title-2{display:none}.small .project-info{display:flex;flex-direction:column;justify-content:center;align-items:center}.small .project-text{margin-top:16px}.small .project-img{padding:8px;width:100%}.small .carousel-container{width:100%}.small .img-container{width:100%}.small .item{width:50%}.x-small{flex-direction:column;align-items:center;padding:16px}.x-small .carousel-container,.x-small .project-info{padding:0}.x-small .carousel-btns{margin-top:24px}.x-small .title-1{display:block;margin-bottom:16px}.x-small .title-2{display:none}.x-small .project-info{display:flex;flex-direction:column;justify-content:center;align-items:center}.x-small .project-text{margin-top:16px}.x-small .project-img{padding:8px;width:100%}.x-small .carousel-container{width:100%}.x-small .img-container{width:100%}.x-small .item{width:50%}.x-small .title-1{margin-bottom:0}.x-small .carousel-btns{margin-top:0}.x-small .project-info{width:100%;min-width:min-content}@media(max-width: 1172px){.full-row{flex-direction:column;align-items:center;padding:16px}.full-row .carousel-container,.full-row .project-info{padding:0}.full-row .carousel-btns{margin-top:24px}.full-row .title-1{display:block;margin-bottom:16px}.full-row .title-2{display:none}.full-row .project-info{display:flex;flex-direction:column;justify-content:center;align-items:center}.full-row .project-text{margin-top:16px}}@media(max-width: 735px){.full-row{--radius: 30vw;flex-direction:column;align-items:center;padding:16px}.full-row .carousel-container,.full-row .project-info{padding:0}.full-row .carousel-btns{margin-top:24px}.full-row .title-1{display:block;margin-bottom:16px}.full-row .title-2{display:none}.full-row .project-info{display:flex;flex-direction:column;justify-content:center;align-items:center}.full-row .project-text{margin-top:16px}.full-row .project-img{padding:8px;width:100%}.full-row .carousel-container{width:100%}.full-row .img-container{width:100%}.full-row .item{width:50%}}@media(max-width: 584px){.full-row{--radius: 28vw;flex-direction:column;align-items:center;padding:16px}.full-row .carousel-container,.full-row .project-info{padding:0}.full-row .carousel-btns{margin-top:24px}.full-row .title-1{display:block;margin-bottom:16px}.full-row .title-2{display:none}.full-row .project-info{display:flex;flex-direction:column;justify-content:center;align-items:center}.full-row .project-text{margin-top:16px}.full-row .project-img{padding:8px;width:100%}.full-row .carousel-container{width:100%}.full-row .img-container{width:100%}.full-row .item{width:50%}.full-row .title-1{margin-bottom:0}.full-row .carousel-btns{margin-top:0}.full-row .project-info{width:100%;min-width:min-content}}","",{version:3,sources:["webpack://./src/projects/common/styles/projects.scss"],names:[],mappings:"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",sourcesContent:['@import "../../../common/styles/themes";\n\n:root {\n    --rotation-1: -60deg;\n    --rotation-2: 0deg;\n    --rotation-3: 60deg;\n    --rotation-4: 120deg;\n    --rotation-5: 180deg;\n    --rotation-6: 240deg;\n}\n\n.full-row {\n    --radius: 216px;\n}\n\n.small {\n    --width: 100vw;\n    --radius: calc(0.42 * var(--width));\n}\n\n.x-small {\n    --width: 100vw;\n    --radius: calc(0.40 * var(--width));\n}\n\n@include themify($themes) {\n    #projects {\n        text-decoration-color: themed(primary);\n    }\n\n    .grid > div {\n        background-color: themed(opacity);\n        border: 2px solid themed(text);\n    }\n\n    .featured-p {\n        background-color: themed(secondary);\n        color: themed(contrast);\n    }\n\n    .project-text {\n        border: 2px solid themed(text);\n\n        a {\n            color: themed(tertiary);\n\n            &:hover {\n                text-decoration: underline;\n            }\n        }\n    }\n}\n\n#projects {\n    text-decoration: underline;\n    text-underline-offset: 8px;\n}\n  \n.grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n    gap: 16px;\n    width: 100%;\n\n    > div {\n        display: flex;\n        color: white;\n        border-radius: 10px;\n        min-height: 300px;\n        overflow: auto;\n    }\n}\n\n.featured-div {\n    position: relative;\n    overflow: visible !important;\n    border-radius: 10px 0px 10px 10px !important;\n}\n\n.featured-p {\n    position: absolute;\n    top: -32px;\n    right: -2px;\n    padding: 4px 8px 4px;\n    margin: 0;\n    border-radius: 10px 10px 0px 0px;\n}\n\n.full-row {\n    grid-column: 1 / -1;\n}\n\n.project-img {\n    width: 550px;\n    padding: 32px;\n    overflow: hidden;\n\n    img {\n        width: 100%;\n        border-radius: 10px;\n        object-fit: contain;\n    }\n}\n\n.carousel-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding: 32px;\n    width: 550px;\n}\n\n.img-container {\n    display: flex;\n    margin-top: 10px;\n    width: 504px;\n    height: 156px;\n    perspective: 1000px;\n}\n\n.carousel {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    transform-style: preserve-3d;\n    transition: transform 1s;\n}\n\n.item {\n    display: block;\n    position: absolute;\n    aspect-ratio: 16 / 9;\n    width: 240px;\n    height: auto;\n    text-align: center;\n    color: #FFF;\n    border-radius: 10px;\n    overflow: hidden;\n\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n    }\n}\n\n.a {\n    transform: rotateY(var(--rotation-1)) translateZ(var(--radius));\n}\n.b {\n    transform: rotateY(var(--rotation-2)) translateZ(var(--radius));\n}\n.c {\n    transform: rotateY(var(--rotation-3)) translateZ(var(--radius));\n}\n.d {\n    transform: rotateY(var(--rotation-4)) translateZ(var(--radius));\n}\n.e {\n    transform: rotateY(var(--rotation-5)) translateZ(var(--radius));\n} \n.f {\n    transform: rotateY(var(--rotation-6)) translateZ(var(--radius));\n}\n\n.project-info {\n    padding: 32px;\n    box-sizing: border-box;\n    line-height: 1.5;\n    width: 50%;\n    min-width: 300px;\n}\n\n.title-1 {\n    display: none;\n}\n\nh2 {\n    text-align: center;\n    margin: 0;\n    font-size: 2rem;\n}\n\n.project-text {\n    padding: 8px;\n    border-radius: 10px;\n    height: 120px;\n    overflow: auto;\n}\n\nkbd {\n    font-family: monospace;\n    padding: 2px 4px;\n    border: 1px solid black;\n    border-radius: 3px;\n    box-shadow: inset 0 -2px 0 black;\n}\n\ncode {\n    font-family: monospace;\n    padding: 2px 4px;\n    border-radius: 3px;\n    word-break: break-all;\n}\n\n.dark-theme kbd {\n    background-color: rgb(227, 230, 232);\n    color: black;\n}\n\n.light-theme kbd {\n    background-color: rgb(59, 59, 59);\n    color: white;\n}\n\n.dark-theme code {\n    background-color: rgb(227, 230, 232);\n    color: black;\n}\n\n.light-theme code {\n    background-color: rgb(59, 59, 59);\n    color: white;\n}\n\n.project-btn-container {\n    display: flex;\n    align-items: center;\n    margin-top: 24px;\n    gap: 8px;\n\n    .front {\n        padding-left: 0;\n        padding-right: 0;\n    }\n\n    a {\n        padding: 6px 15px;\n    }\n}\n\n.pushable {\n    border-radius: 12px;\n    border: none;\n    padding: 0;\n    cursor: pointer;\n    outline-offset: 4px;\n}\n\n.front {\n    display: block;\n    background: white;\n    padding: 6px 15px;\n    border-radius: 12px;\n    font-size: 1rem;\n    transform: translateY(-6px);\n}\n\n.pushable:active .front {\n    transform: translateY(-2px);\n}\n\n.dark-theme .pushable {\n    background: black;\n}\n\n.light-theme .pushable {\n    background: rgb(59, 59, 59);\n}\n\n.dark-theme .front {\n    background: rgb(139, 233, 253);\n}\n\n.light-theme .front {\n    background: white;\n}\n\n@mixin medium-project-div {\n    flex-direction: column;\n    align-items: center;\n    padding: 16px;\n\n    .carousel-container, .project-info {\n        padding: 0;\n    }\n\n    .carousel-btns {\n        margin-top: 24px;\n    }\n\n    .title-1 {\n        display: block;\n        margin-bottom: 16px;\n    }\n\n    .title-2 {\n        display: none;\n    }\n\n    .project-info {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .project-text {\n        margin-top: 16px;\n    }\n}\n\n@mixin small-project-div {\n    @include medium-project-div;\n\n    .project-img {\n        padding: 8px;\n        width: 100%;\n    }\n\n    .carousel-container {\n        width: 100%;\n    }\n\n    .img-container {\n        width: 100%;\n    }\n\n    .item {\n        width: 50%;\n    }\n}\n\n@mixin x-small-project-div {\n    @include small-project-div;\n\n    .title-1 {\n        margin-bottom: 0;\n    }\n\n    .carousel-btns {\n        margin-top: 0;\n    }\n\n    .project-info {\n        width: 100%;\n        min-width: min-content;\n    }\n}\n\n.small {\n    @include small-project-div;\n}\n\n.x-small {\n    @include x-small-project-div;\n}\n\n@media (max-width: 1172px) {\n    .full-row {\n        @include medium-project-div;\n    }\n}\n\n@media (max-width: 735px) {\n    .full-row {\n        --radius: 30vw;\n        @include small-project-div;\n    }\n}\n\n@media (max-width: 584px) {\n    .full-row {\n        --radius: 28vw;\n        @include x-small-project-div;\n    }\n}'],sourceRoot:""}]);const a=i},633:(n,e,A)=>{A.d(e,{A:()=>a});var t=A(354),o=A.n(t),r=A(314),i=A.n(r)()(o());i.push([n.id,".light-theme #web{color:#bdd7e7}.dark-theme #web{color:#ac83e5}#web{opacity:1 !important}.scrollable{aspect-ratio:16/9;overflow:scroll}.outline{border:1px solid #fff}","",{version:3,sources:["webpack://./src/projects/web/styles/web.scss"],names:[],mappings:"AAGI,kBACI,aAAA,CADJ,iBACI,aAAA,CAIR,KACI,oBAAA,CAGJ,YACI,iBAAA,CACA,eAAA,CAGJ,SACI,qBAAA",sourcesContent:['@import "../../../common/styles/themes";\n\n@include themify($themes) {\n    #web {\n        color: themed(primary);\n    }\n}\n\n#web {\n    opacity: 1 !important;\n}\n\n.scrollable {\n    aspect-ratio: 16 / 9;\n    overflow: scroll;\n}\n\n.outline {\n    border: 1px solid white;\n}'],sourceRoot:""}]);const a=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var A="",t=void 0!==e[5];return e[4]&&(A+="@supports (".concat(e[4],") {")),e[2]&&(A+="@media ".concat(e[2]," {")),t&&(A+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),A+=n(e),t&&(A+="}"),e[2]&&(A+="}"),e[4]&&(A+="}"),A})).join("")},e.i=function(n,A,t,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(i[l]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);t&&i[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),A&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=A):s[2]=A),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},354:n=>{n.exports=function(n){var e=n[1],A=n[3];if(!A)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(A)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),r="/*# ".concat(o," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function A(n){for(var A=-1,t=0;t<e.length;t++)if(e[t].identifier===n){A=t;break}return A}function t(n,t){for(var r={},i=[],a=0;a<n.length;a++){var l=n[a],d=t.base?l[0]+t.base:l[0],s=r[d]||0,c="".concat(d," ").concat(s);r[d]=s+1;var C=A(c),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==C)e[C].references++,e[C].updater(p);else{var m=o(p,t);t.byIndex=a,e.splice(a,0,{identifier:c,updater:m,references:1})}i.push(c)}return i}function o(n,e){var A=e.domAPI(e);return A.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;A.update(n=e)}else A.remove()}}n.exports=function(n,o){var r=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var a=A(r[i]);e[a].references--}for(var l=t(n,o),d=0;d<r.length;d++){var s=A(r[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}r=l}}},659:n=>{var e={};n.exports=function(n,A){var t=function(n){if(void 0===e[n]){var A=document.querySelector(n);if(window.HTMLIFrameElement&&A instanceof window.HTMLIFrameElement)try{A=A.contentDocument.head}catch(n){A=null}e[n]=A}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(A)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,A)=>{n.exports=function(n){var e=A.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(A){!function(n,e,A){var t="";A.supports&&(t+="@supports (".concat(A.supports,") {")),A.media&&(t+="@media ".concat(A.media," {"));var o=void 0!==A.layer;o&&(t+="@layer".concat(A.layer.length>0?" ".concat(A.layer):""," {")),t+=A.css,o&&(t+="}"),A.media&&(t+="}"),A.supports&&(t+="}");var r=A.sourceMap;r&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,A)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},837:()=>{function n(n){const e=n.offsetWidth;n.style.setProperty("--width",`${e}px`),e<=438?(n.classList.remove("small"),n.classList.add("x-small")):(n.classList.remove("x-small"),n.classList.add("small"))}Array.from(document.querySelectorAll(".small")).forEach((e=>{n(e),window.addEventListener("resize",(()=>{n(e)})),window.addEventListener("load",(()=>{n(e)}))}));const e=Array.from(document.querySelector(".grid").querySelectorAll(":scope > div"));console.log(e);const A=[];let t=0;function o(n,e,t){const r=A[t],i=Array.from(e.querySelector(".carousel").querySelectorAll(":scope > div")).length,a=e.querySelector(".carousel");function l(e){return"next"===n?e-60:e+60}function d(){const n=120-60*r;null==a||a.animate([{transform:`rotateY(${n}deg)`},{transform:`rotateY(${l(n)}deg)`}],{duration:1e3,iterations:1}),a.style.transform=`rotateY(${l(n)}deg)`}"next"===n?r===i?o("prev",e,t):(d(),A[t]=r+1):"prev"==n&&(1===r?o("next",e,t):(d(),A[t]=r-1))}e.forEach((n=>{null!=n.querySelector(".carousel")&&(n.dataset.index=""+t,t++)})),e.forEach((n=>{if(null!=n.querySelector(".carousel")){A.push(2);const e=n.querySelector(".next"),t=n.querySelector(".prev");null==e||e.addEventListener("click",(()=>{o("next",n,+n.dataset.index)})),null==t||t.addEventListener("click",(()=>{o("prev",n,+n.dataset.index)}))}}))}},e={};function A(t){var o=e[t];if(void 0!==o)return o.exports;var r=e[t]={id:t,exports:{}};return n[t](r,r.exports,A),r.exports}A.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return A.d(e,{a:e}),e},A.d=(n,e)=>{for(var t in e)A.o(e,t)&&!A.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},A.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),A.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;A.g.importScripts&&(n=A.g.location+"");var e=A.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=t[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),A.p=n})(),A.nc=void 0;var t=A(72),o=A.n(t),r=A(825),i=A.n(r),a=A(659),l=A.n(a),d=A(56),s=A.n(d),c=A(540),C=A.n(c),p=A(113),m=A.n(p),u=A(398),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=l().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=C(),o()(u.A,f),u.A&&u.A.locals&&u.A.locals;const g=A.p+"sound_on.mp3",h=A.p+"sound_off.mp3",x=A.p+"dropdown_sound.mp3",w=A.p+"switch_on.mp3",b=A.p+"switch_off.mp3";function B(){const n=document.documentElement;n.classList.contains("dark-theme")?(document.querySelector(".menu > div:last-child > svg").outerHTML='<svg id="sun" class="theme-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" /></svg>',document.getElementById("sun").addEventListener("click",B),n.className="light-theme",localStorage.setItem("currClass","light-theme"),"on"===localStorage.getItem("audioState")&&new Audio(w).play()):n.classList.contains("light-theme")&&(document.querySelector(".menu > div:last-child > svg").outerHTML='<svg id="moon" class="theme-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.75,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.2,9.5"/></svg>',document.getElementById("moon").addEventListener("click",B),n.className="dark-theme",localStorage.setItem("currClass","dark-theme"),"on"===localStorage.getItem("audioState")&&new Audio(b).play())}var v=A(906),y={};y.styleTagTransform=m(),y.setAttributes=s(),y.insert=l().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=C(),o()(v.A,y),v.A&&v.A.locals&&v.A.locals;var I=A(633),k={};k.styleTagTransform=m(),k.setAttributes=s(),k.insert=l().bind(null,"head"),k.domAPI=i(),k.insertStyleElement=C(),o()(I.A,k),I.A&&I.A.locals&&I.A.locals,A(837),function(){var n;const e=document.querySelector(".menu"),[A,t]=[document.createElement("div"),document.createElement("div")],o=document.createElement("a");o.textContent="About",o.id="about",o.setAttribute("href","./about.html");const r=document.createElement("a");r.textContent="Projects",r.id="projects",r.setAttribute("href","./featured.html"),A.innerHTML='<svg id="home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>',A.appendChild(o);const i=document.createElement("div");i.id="projects-menu-item",i.appendChild(r),i.innerHTML+='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>';const a=document.createElement("div");a.id="projects-dropdown",a.appendChild(i);const l=document.createElement("a"),d=document.createElement("a"),s=document.createElement("a"),c=document.createElement("a");l.textContent="Featured",d.textContent="Web",s.textContent="Mobile",c.textContent="Misc",l.id="featured",d.id="web",s.id="mobile",c.id="misc",l.setAttribute("href","./featured.html"),d.setAttribute("href","./web.html"),s.setAttribute("href","./mobile.html"),c.setAttribute("href","./misc.html"),a.appendChild(l),a.appendChild(d),a.appendChild(s),a.appendChild(c),A.appendChild(i),t.innerHTML='<svg id="moon" class="theme-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.75,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.2,9.5"/></svg><svg id="audio-on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg><svg id="audio-off" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z" /></svg>',null==e||e.appendChild(A),null==e||e.appendChild(t),a.classList.add("hide"),a.style.left=i.getBoundingClientRect().left-8+"px",a.style.top=`${i.getBoundingClientRect().top+i.offsetHeight+10.5}px`,document.body.appendChild(a),function(){const n=document.getElementById("audio-on"),e=document.getElementById("audio-off"),A=new Audio(g),t=new Audio(h);function o(o){o?(n.style.display="block",e.style.display="none",A.play()):(n.style.display="none",e.style.display="block",r(),t.play()),localStorage.setItem("audioState",o?"on":"off")}function r(){document.querySelectorAll("audio").forEach((n=>{n.pause(),n.currentTime=0}))}null===localStorage.getItem("audioState")&&localStorage.setItem("audioState","on"),"on"===localStorage.getItem("audioState")?(n.style.display="block",e.style.display="none"):(n.style.display="none",e.style.display="block",r()),n.addEventListener("click",(()=>{o(!1)})),e.addEventListener("click",(()=>{o(!0)}))}(),window.addEventListener("resize",(()=>{a.style.left=i.getBoundingClientRect().left-8+"px",a.style.top=`${i.getBoundingClientRect().top+i.offsetHeight+10.5}px`})),window.addEventListener("scroll",(()=>{a.style.left=i.getBoundingClientRect().left-8+"px",a.style.top=`${i.getBoundingClientRect().top+i.offsetHeight+10.5}px`}));const C=document.querySelector("#projects-menu-item svg");null==C||C.addEventListener("click",(()=>{a.classList.remove("hide"),"on"===localStorage.getItem("audioState")&&new Audio(x).play()})),document.addEventListener("click",(n=>{(null==a?void 0:a.contains(n.target))||(null==C?void 0:C.contains(n.target))||a.classList.add("hide")})),document.getElementById("moon").addEventListener("click",B),null===(n=document.getElementById("home"))||void 0===n||n.addEventListener("click",(()=>{const n=document.documentElement.className;localStorage.setItem("currClass",n),location.href="./index.html"}))}(),window.addEventListener("load",(()=>{const n=localStorage.getItem("currClass");if(n){if("light-theme"===n){const n='<svg id="sun" class="theme-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" /></svg>';document.querySelector(".menu > div:last-child > svg").outerHTML=n,document.getElementById("sun").addEventListener("click",B)}document.documentElement.className=n}}))})();
//# sourceMappingURL=web.b760997391bb8b987553.js.map