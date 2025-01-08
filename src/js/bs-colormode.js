/*!
* Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
* Copyright 2011-2024 The Bootstrap Authors
* Licensed under the Creative Commons Attribution 3.0 Unported License.
*/

(() => {
	'use strict'
	
	const getStoredTheme = () => localStorage.getItem('theme')
	const setStoredTheme = theme => localStorage.setItem('theme', theme)
	
	const getPreferredTheme = () => {
		const storedTheme = getStoredTheme()
		if (storedTheme) {
			return storedTheme
		}
		
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
	}
	
	const setTheme = theme => {
		if (theme === 'auto') {
			document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
		} else {
			document.documentElement.setAttribute('data-bs-theme', theme)
		}
		
		console.log("showActiveTheme:" + theme)
	}
	
	setTheme(getPreferredTheme())
	
	const showActiveTheme = (theme, focus = false) => {
		const themeSwitcher = document.querySelector('#bd-theme')
		
		if (!themeSwitcher) {
			return
		}
		
		const themeSwitcherText = document.querySelector('#bd-theme-text')
		const activeThemeIcon   = document.querySelector('.theme-icon-active')
		const btnToActive       = document.querySelector(`[data-bs-theme-value="${theme}"]`)

		//const svgOfActiveBtn    = btnToActive.querySelector('svg use').getAttribute('href')
		const newIconClass     = [...btnToActive.querySelector('i').classList]
			.filter(cls => cls.startsWith('bi-') ||  cls.startsWith('fa-'))
			.pop();

			
		// Update the icon
		// remove the existing icon classes		
		const lastIconClass = [...activeThemeIcon.classList]
    		.filter(cls => cls.startsWith('bi-') || cls.startsWith('fa-'))
    		.pop();
			if (lastIconClass) activeThemeIcon.classList.remove(lastIconClass);

		activeThemeIcon.classList.add(newIconClass)


		// Disable the current active element
		document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
			element.classList.remove('active')
			element.setAttribute('aria-pressed', 'false')
		})
		
		// Enable the new active element
		btnToActive.classList.add('active')
		btnToActive.setAttribute('aria-pressed', 'true')


		// Update the button aria label
		const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
		themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)
		
		if (focus) {
			themeSwitcher.focus()
		}
	}
	
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
		const storedTheme = getStoredTheme()
		if (storedTheme !== 'light' && storedTheme !== 'dark') {
			setTheme(getPreferredTheme())
		}
	})
	
	window.addEventListener('DOMContentLoaded', () => {
		showActiveTheme(getPreferredTheme())
		
		document.querySelectorAll('[data-bs-theme-value]')
		.forEach(toggle => {
			toggle.addEventListener('click', () => {
				const theme = toggle.getAttribute('data-bs-theme-value')
				setStoredTheme(theme)
				setTheme(theme)
				showActiveTheme(theme, true)
			})
		})
	})
})()

