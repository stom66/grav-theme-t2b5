// Helper function to set a cookie
function setCookie(name, value, days) {
	const date = new Date();
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	const expires = "expires=" + date.toUTCString() + ";";
	const sameSite = "SameSite=Strict;";
	document.cookie = name + "=" + value + ";" + expires + sameSite + "path=/";
}

// Helper function to show/hide the cookie banner
function hideCookieBanner() {
	console.log("hideCookieBanner()");
	document.getElementById("cookie-banner").classList.add("d-none");
}
function showCookieBanner() {
	console.log("showCookieBanner()");
	document.getElementById("cookie-banner").classList.remove("d-none");
}

// Helper function to detect DoNotTrack 
function isDntActive() {
	// get the value from the various browser implementations.
	let dnt_active = parseInt(
		// Internet Explorer 9 and 10 vendor prefix
		navigator.msDoNotTrack ||
	
		// IE 11 uses window.doNotTrack
		window.doNotTrack ||
	
		// W3C, Firefox, Chrome
		navigator.doNotTrack,
		10
	);
	
	// If this comes to exactly 1 DNT is set.
	return (dnt_active === 1);
}

function HideCookieBannerIfDNTIsActive() {
	if (isDntActive()) {
		hideCookieBanner();
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const banner     = document.getElementById("cookie-banner");
	const btnAccept  = document.getElementById("btn-accept-tracking");
	const btnDisable = document.getElementById("btn-disable-tracking");
	const cookieBannerClosed = "cookieBannerClosed";

    // Accept button click handler
    btnAccept.addEventListener("click", () => {
        setCookie(cookieBannerClosed, "true", 365); // Set cookie for 1 year
		hideCookieBanner()
    });

    // Disable button click handler
    btnDisable.addEventListener("click", () => {
        setCookie(cookieBannerClosed, "true", 365); // Set cookie for 1 year
		hideCookieBanner()
    });


    // Helper function to get a cookie
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    }

    // Check if the deny-tracking cookie exists, otherwise shopw the banner
    if (!getCookie(cookieBannerClosed)) {
		showCookieBanner();
    }

	// Check if the user has GlobalPrivacyControl:
/* 	if (navigator.globalPrivacyControl) {
		console.log("Global Privacy Control is ENABLED");
	} else {
		console.log("Global Privacy Control is DISABLED");
	} */
});
