// Set All Issue Element's Trigger
function setIssueTrigger(){
    const issueElements = document.getElementsByClassName("issue");
    for (let issueElement of issueElements){
        let dataLink = issueElement.getAttribute("data-link");
        let dataPass = issueElement.getAttribute("data-pass");
        let linkID = issueElement.innerHTML.substring(1);
        if (dataPass != 'pass'){
            if (dataLink != null) {
                issueElement.addEventListener("click", function(){ window.open(dataLink); });
            } else {
                issueElement.addEventListener("click", function(){ window.open(`https://github.com/Hex-Dragon/PCL2/issues/${linkID}`); });
            }
        }
    }
}

// Set All Discussion Element's Trigger
function setDiscTrigger(){
    const discElements = document.getElementsByClassName("disc");
    for (let discElement of discElements){
        let dataLink = discElement.getAttribute("data-link");
        let dataPass = discElement.getAttribute("data-pass");
        let linkID = discElement.innerHTML.substring(1);
        if (dataPass != 'pass'){
            if (dataLink != null) {
                discElement.addEventListener("click", function(){ window.open(dataLink); });
            } else {
                discElement.addEventListener("click", function(){ window.open(`https://github.com/Hex-Dragon/PCL2/discussions/${linkID}`); });
            }
        }
    }
}

// Set All In-Help Element's Trigger
function setInhelpTrigger(){
    const inhelpElements = document.getElementsByClassName("inhelp");
    for (let inhelpElement of inhelpElements){
        let dataContent = inhelpElement.getAttribute("data-content");
        let dataPass = inhelpElement.getAttribute("data-pass");
        if (dataPass != 'pass'){
            inhelpElement.addEventListener("click", function(){
                GmAlert.information(dataContent, 'info', {
                    timeout: 10000,
                    headerLeft: '帮助库路径提示',
                    hideClose: false,
                })
            });
        }
    }
}

// Links
function openGuide(){ window.open('/guide.html') }
function open2611updateLog(){ window.open('https://www.bilibili.com/read/cv28121157/') }
function openShimoDoc(){ window.open('https://shimo.im/docs/qKPttVvXKqPD8YDC') }
function open3rdPartyPage(){ window.open('https://github.com/Hex-Dragon/PCL2/issues?q=label%3A%E7%AC%AC%E4%B8%89%E6%96%B9+is%3Aclosed') }

// FootMarks
function jumpToTip(highLightElementId){ 
    document.getElementById('footmark').scrollIntoView({behavior:"smooth"})
    setTimeout(() => {
        document.getElementById(`footmark${highLightElementId}`).setAttribute('class','focus')
    }, 500);
}

function jumpToRaw(RawElementId){
    document.getElementById(`tip${RawElementId}`).scrollIntoView({behavior:"smooth"})
}

function setTipUnfocusTrigger(){
    document.addEventListener("click", function(){
        try{ document.getElementsByClassName('focus')[0].removeAttribute('class') }
        catch{}
    })
}

// for: guide.html
function copyCommand(){
    try {
        navigator.clipboard.writeText('dir "{verindie}mods" /b | clip');
    } catch {
        // 备用方案
        const copyText = document.getElementById('copy-text')
        copyText.value = 'dir "{verindie}mods" /b | clip'
        copyText.select()
        document.execCommand('copy')
    }
    const element = GmAlert.notice('复制成功', 'success', {
        timeout: 2000,
    })['$el']
    element.style.color = '#E0E0E0'
}

// 初始化
window.onload = function(){
    setIssueTrigger();
    setDiscTrigger();
    setInhelpTrigger();
    setTipUnfocusTrigger();
}