function userTheme(toggle = false) {
    let userMode = localStorage.userThemeMode || 'auto';
  const osMode = !!window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
	if(toggle) {
		switch(userMode) {
			case 'auto':
                userMode = 'dark';
                break;
			case 'dark':
                userMode = 'light';
                break;
            case 'light':
                userMode = 'dark';
                break;
			default:
				userMode = 'auto';
		}
		localStorage.userThemeMode = userMode;
    }
    console.log(`osMode : ${osMode}`);
    console.log(`current mode : ${userMode}`);
    window.__THEME_MODE = userMode === 'auto' ? osMode : userMode;
    document.getElementsByTagName('html')[0].classList[window.__THEME_MODE === 'dark' ? 'add' : 'remove']('darkmode');
    if(userMode=='auto') {
        if(osMode=='dark') {
            document.getElementById("theme-changer").src = "./elements/bio/ic_light.svg";
            document.getElementById("logo").src = "./elements/bio/img_logo_dark.svg";
        } else {
            document.getElementById("theme-changer").src = "./elements/bio/ic_dark.svg";
            document.getElementById("logo").src = "./elements/bio/img_logo_light.svg";
        }
    } else if(userMode=='dark') {
        document.getElementById("theme-changer").src = "./elements/bio/ic_light.svg";
        document.getElementById("logo").src = "./elements/bio/img_logo_dark.svg";
    } else if(userMode=='light') {
        document.getElementById("theme-changer").src = "./elements/bio/ic_dark.svg";
        document.getElementById("logo").src = "./elements/bio/img_logo_light.svg";
    }
}

if (!!window.matchMedia) {
	['light', 'dark'].forEach(mode => {
		window.matchMedia(`(prefers-color-scheme: ${mode})`).addListener(e => {
			if(!!e.matches) {
				userTheme();
			}
		});  
	});
}

userTheme();

function localeJp (toggle = false) {

    if(toggle){
        document.getElementById("jp").style.display = "inline";
        document.getElementById("ko").style.display = "none";
        document.getElementById("korButton").style.opacity = "0.5";
        document.getElementById("jpnButton").style.opacity = "1";
    } else {
        document.getElementById("jp").style.display = "none";
        document.getElementById("ko").style.display = "inline";
        document.getElementById("korButton").style.opacity = "1";
        document.getElementById("jpnButton").style.opacity = "0.5";
    }
} 