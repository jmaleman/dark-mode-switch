import { store } from "@wordpress/interactivity";

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Helper para leer cookies
const getCookie = (name) => {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(";").shift();
	return null;
};

// Función helper para aplicar el esquema
const applyScheme = (colorScheme) => {
	document.documentElement.style.setProperty("color-scheme", colorScheme);
	document.documentElement.classList.toggle("is-dark", colorScheme === "dark");
	document.documentElement.classList.toggle(
		"is-light",
		colorScheme === "light",
	);
};

const { state } = store("jmaleman/dark-mode-switch", {
	state: {
		// Leer el valor inicial de la cookie
		colorScheme:
			getCookie("dark-mode-switch-color-scheme") ||
			(prefersDarkScheme.matches ? "dark" : "light"),
		name: "dark-mode-switch-color-scheme",
		cookiePath: "/",
		cookieDomain: window.location.hostname,
		get isDark() {
			return state.colorScheme === "dark";
		},
	},
	actions: {
		toggle() {
			state.colorScheme = state.isDark ? "light" : "dark";

			// Save preference to cookie
			const path = state.cookiePath || "/";
			const domain = state.cookieDomain ? `; domain=${state.cookieDomain}` : "";
			document.cookie = `${state.name}=${state.colorScheme};path=${path}${domain};max-age=31536000;SameSite=Lax`;
		},
	},
	callbacks: {
		init() {
			// Aplicar el esquema al inicializar
			applyScheme(state.colorScheme);
		},
		updateScheme() {
			applyScheme(state.colorScheme);
		},
	},
});
