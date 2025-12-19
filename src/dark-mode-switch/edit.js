/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	// return (
	// 	<p {...useBlockProps()}>
	// 		{__(
	// 			"Light Dark Mode Toggle Block – hello from the editor!",
	// 			"dark-mode-switch",
	// 		)}
	// 	</p>
	// );
	return (
		<span
			{...useBlockProps({ className: "toggle-color-scheme theme-toggle" })}
			data-wp-interactive="jmaleman/dark-mode-switch"
			data-wp-bind--aria-pressed="state.isDark"
			data-wp-class--is-dark="state.isDark"
			data-wp-on--click="state.isDark = !state.isDark"
			data-wp-watch="document.documentElement.style.setProperty('color-scheme', state.isDark ? 'dark' : 'light')"
		>
			<span class="moon"></span>
			<span class="sun">
				<span class="ray"></span>
				<span class="ray"></span>
				<span class="ray"></span>
				<span class="ray"></span>
				<span class="ray"></span>
				<span class="ray"></span>
				<span class="ray"></span>
				<span class="ray"></span>
			</span>
		</span>
	);
}
