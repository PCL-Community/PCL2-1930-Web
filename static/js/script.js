// Set All Issue Element's Trigger
function setIssueTrigger() {
    const issueElements = document.getElementsByClassName("issue");
    for (let issueElement of issueElements) {
        let dataLink = issueElement.getAttribute("data-link");
        let dataPass = issueElement.getAttribute("data-pass");
        let linkID = issueElement.innerHTML.substring(1);
        if (dataPass != "pass") {
            if (dataLink != null) {
                issueElement.addEventListener("click", function () {
                    window.open(dataLink);
                });
            } else {
                issueElement.addEventListener("click", function () {
                    window.open(
                        `https://github.com/Hex-Dragon/PCL2/issues/${linkID}`
                    );
                });
            }
        }
    }
}

// Set All Discussion Element's Trigger
function setDiscTrigger() {
    const discElements = document.getElementsByClassName("disc");
    for (let discElement of discElements) {
        let dataLink = discElement.getAttribute("data-link");
        let dataPass = discElement.getAttribute("data-pass");
        let linkID = discElement.innerHTML.substring(1);
        if (dataPass != "pass") {
            if (dataLink != null) {
                discElement.addEventListener("click", function () {
                    window.open(dataLink);
                });
            } else {
                discElement.addEventListener("click", function () {
                    window.open(
                        `https://github.com/Hex-Dragon/PCL2/discussions/${linkID}`
                    );
                });
            }
        }
    }
}

// Set All In-Help Element's Trigger
function setInhelpTrigger() {
    const inhelpElements = document.getElementsByClassName("inhelp");
    for (let inhelpElement of inhelpElements) {
        let dataContent = inhelpElement.getAttribute("data-content");
        let dataPass = inhelpElement.getAttribute("data-pass");
        if (dataPass != "pass") {
            inhelpElement.addEventListener("click", function () {
                GmAlert.information(dataContent, "info", {
                    timeout: 10000,
                    headerLeft: "帮助库路径提示",
                    hideClose: false,
                });
            });
        }
    }
}

// Set All Link&Content same link element's href
function setLinkContentSameLink() {
    const linkElements = document.querySelectorAll("a.copyLink");
    for (let linkElement of linkElements) {
        linkElement.setAttribute("href", linkElement.innerHTML.toString());
    }
}

// Links
function openGuide() {
    window.open("/guide.html");
}
function open2611updateLog() {
    window.open("https://www.bilibili.com/read/cv28121157/");
}
function openShimoDoc() {
    window.open("https://shimo.im/docs/qKPttVvXKqPD8YDC");
}
function open3rdPartyPage() {
    window.open(
        "https://github.com/Hex-Dragon/PCL2/issues?q=label%3A%E7%AC%AC%E4%B8%89%E6%96%B9+is%3Aclosed"
    );
}
function openWikiAnc() {
    window.open(
        "https://zh.minecraft.wiki/w/Minecraft_Wiki:%E8%BF%81%E7%A7%BB%E9%80%9A%E7%9F%A5?variant=zh-cn#%E6%88%91%E4%BB%AC%E9%9C%80%E8%A6%81%E4%BD%A0%E7%9A%84%E5%B8%AE%E5%8A%A9%EF%BC%81"
    );
}
function openBBSUpdate() {
    window.open("https://t.bilibili.com/891597994798874693");
}

// FootMarks
function jumpToTip(highLightElementId) {
    document.getElementById("footmark").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
        document
            .getElementById(`footmark${highLightElementId}`)
            .setAttribute("class", "focus");
    }, 500);
}

function jumpToRaw(RawElementId) {
    document
        .getElementById(`tip${RawElementId}`)
        .scrollIntoView({ behavior: "smooth" });
}

function setTipUnfocusTrigger() {
    document.addEventListener("click", function () {
        try {
            document
                .getElementsByClassName("focus")[0]
                .removeAttribute("class");
        } catch {}
    });
}

// Public
function copyCommand(index) {
    const map = {
        0: 'dir "{verindie}mods" /b | clip',
        1: 'netsh interface ip set dns  "适配器名称" static 8.8.8.8',
        2: 'nslookup raw.githubusercontent.com'
    };
    if (!(index in map)) return;
    try {
        navigator.clipboard.writeText(map[index]);
    } catch {
        // 备用方案
        const copyText = document.getElementById("copy-text");
        copyText.value = map[index];
        copyText.select();
        document.execCommand("copy");
    }
    const element = GmAlert.notice("复制成功", "success", {
        timeout: 2000,
    })["$el"];
    element.style.color = "#E0E0E0";
}

// 初始化
window.onload = function () {
    setIssueTrigger();
    setDiscTrigger();
    setInhelpTrigger();
    setTipUnfocusTrigger();
    setLinkContentSameLink();
    console.log(`     ____     ____       __           ___       __ __         _        __         __        __     
    /\\  _\`\\  /\\  _\`\\    /\\ \\        /'___\`\\    _\\ \\\\ \\__    /' \\     /'_ \`\\     /'__\`\\    /'__\`\\   
    \\ \\ \\L\\ \\\\ \\ \\/\\_\\  \\ \\ \\      /\\_\\ /\\ \\  /\\__  _  _\\  /\\_, \\   /\\ \\L\\ \\   /\\_\\L\\ \\  /\\ \\/\\ \\  
     \\ \\ ,__/ \\ \\ \\/_/_  \\ \\ \\  __ \\/_/// /__ \\/_L\\ \\\\ \\L_ \\/_/\\ \\  \\ \\___, \\  \\/_/_\\_<_ \\ \\ \\ \\ \\ 
      \\ \\ \\/   \\ \\ \\L\\ \\  \\ \\ \\L\\ \\   // /_\\ \\  /\\_   _  _\\   \\ \\ \\  \\/__,/\\ \\   /\\ \\L\\ \\ \\ \\ \\_\\ \\
       \\ \\_\\    \\ \\____/   \\ \\____/  /\\______/  \\/_/\\_\\\\_\\/    \\ \\_\\      \\ \\_\\  \\ \\____/  \\ \\____/
        \\/_/     \\/___/     \\/___/   \\/_____/      \\/_//_/      \\/_/       \\/_/   \\/___/    \\/___/ `);
    console.log(
        "Based on WForst-Breeze/PCL2-1930 (https://github.com/WForst-Breeze/PCL2-1930/), Licensed for LingyunAwA to make this page"
    );
};
