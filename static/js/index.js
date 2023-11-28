// * ----- 视频保护 ----- * //
var video = document.getElementById("videobg");
video.addEventListener("error", function() {
    console.warn('video crash, page will reload')
    location.reload();
})

// * ----- 按钮操作 ----- * //
function openyuan(){ window.open('https://github.com/Hex-Dragon/PCL2/discussions/1930') }

// * ----- 参考链接 ----- * //
function opengh(ghid){
    if (ghid == -10){
        window.open('https://shimo.im/docs/qKPttVvXKqPD8YDC')
    } else if (ghid == -11){
        window.open('https://www.bilibili.com/read/cv27286854/')
    } else if (ghid == 2531){
        window.open('https://github.com/Hex-Dragon/PCL2/issues/2531#issuecomment-1822511620')
    } else {
        window.open('https://github.com/Hex-Dragon/PCL2/issues/'+ghid)
    }
}

// * ----- 附文 ----- * //
layui.use(function(){
    var $ = layui.$;
    var layer = layui.layer;
    var util = layui.util;
    // 事件
    util.on('lay-on', {
        'fuwen': function(){
            layer.open({
                type: 1,
                title: '附文',
                shadeClose: true,
                content: $('#ID-test-layer-wrapper'),
            });
        }
    })
})

// * ----- 帮助路径 ----- * //
function pclhelp1(){
    const helpele1 = document.getElementById('help1')
    layer.tips('Minecraft > 多人游戏常见问题 > 多人游戏已被禁用 ...', helpele1 , {
        tips: 4,
        time: 1500,
        area: ['315px','auto'],
    });
}

function pclhelp2(){
    const helpele2 = document.getElementById('help2')
    layer.tips('启动器 > 将 PCL 添加到 ...', helpele2 , {
        tips: 4,
        time: 1500
    });
}

function pclhelp3(){
    const helpele3 = document.getElementById('help3')
    layer.tips('Minecraft > 多人游戏常见问题', helpele3 , {
        tips: 4,
        time: 1500
    });
}

// * ----- 附注&返回 ----- * //
function fzb1(){
    window.scrollTo({
        top: 390,
        behavior: 'smooth'
    });
}

function fzb2(){
    window.scrollTo({
        top: 440,
        behavior: 'smooth'
    });
}

function fzb3(){
    window.scrollTo({
        top: 1803,
        behavior: 'smooth'
    });
}

function fzb4(){
    window.scrollTo({
        top: 2095,
        behavior: 'smooth'
    });
}

function fz(){
    window.scrollTo({
        top: 10000,
        behavior: 'smooth'
    });
}

// * ----- 初始化 ----- * //
function setup(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

window.onload(setup())