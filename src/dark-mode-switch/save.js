/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save() {
	return (
		<span
			{...useBlockProps.save({
				className: "toggle-color-scheme theme-toggle",
			})}
			data-wp-interactive="jmaleman/dark-mode-switch"
			data-wp-init="callbacks.init"
			data-wp-on--click="actions.toggle"
			data-wp-watch="callbacks.updateScheme"
			data-wp-bind--aria-pressed="state.isDark"
			data-wp-class--is-dark-scheme="state.isDark"
		>
			<span className="moon"></span>
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
