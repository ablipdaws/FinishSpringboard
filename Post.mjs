export default class Post
{
	constructor (title, content)
	{
		this.title = title;
		this.content = content;
	}

	publish ()
	{
		console.log(`Publishing post: ${this.title}`);
	}
}
import {capitalize, square} from "./utils/index.mjs";

console.log(capitalize("hello"));
console.log(square(4));
export * from './stringUtils.mjs';
export * from './numberUtils.mjs';
export const square = (n) => n * n;
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
async function loadConfig ()
{
	const themeModule = await import("./theme.mjs");

	const currentHour = new Date().getHours();

	if (currentHour < 18)
	{
		themeModule.setLightTheme();
	}
	else
	{
		themeModule.setDarkTheme();
	}
}

// Execute the function
loadConfig();
let theme = null;

export const setLightTheme = () =>
{
	console.log("Setting light theme.");
	theme = "light";
};

export const setDarkTheme = () =>
{
	console.log("Setting dark theme.");
	theme = "dark";
};
console.log("Welcome to the application! Initializing...");
import './globalConfig.mjs';