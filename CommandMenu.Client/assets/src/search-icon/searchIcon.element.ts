import { UmbTextStyles } from '@umbraco-cms/backoffice/style';
import type { CSSResultGroup } from '@umbraco-cms/backoffice/external/lit';
import { css, html, customElement } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';

@customElement('command-menu-search-app')
export class UmbSearchHeaderAppElement extends UmbLitElement {

	emitOpenPopover(){
		this.dispatchEvent(new CustomEvent('openPopover'));
	}

	render() {
		return html`
			<uui-button @click=${this.emitOpenPopover} look="primary" label="search" compact>
				<uui-icon name="icon-search"></uui-icon> HELLO
			</uui-button>
		`;
	}

	static styles: CSSResultGroup = [
		UmbTextStyles,
		css`
			uui-button {
				font-size: 18px;
				--uui-button-background-color: transparent;
			}
		`,
	];
}

export default UmbSearchHeaderAppElement;

declare global {
	interface HTMLElementTagNameMap {
		'command-menu-search-app': UmbSearchHeaderAppElement;
	}
}