// let userAgent = navigator;
// console.log(userAgent);

let userAgent = navigator.userAgent;
let browser;

if(userAgent.match(/chrome/i))
{
    browser = 'chrome';
}

else if(userAgent.match(/firefox/i))
{
    browser = 'firefox';
}

else if(userAgent.match(/opr/i))
{
    browser = 'opera';
}

else if(userAgent.match(/safari/i))
{
    browser = 'safari';
}

else{
    alert('Other Browser');
}

const logo = document.querySelector(`.logos .${browser}`);

if(logo !="")
{
    logo.style.opacity = '1';
    logo.style.transform = 'scale(1.4)';
}