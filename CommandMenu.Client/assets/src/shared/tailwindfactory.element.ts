import { LitElement, unsafeCSS } from "@umbraco-cms/backoffice/external/lit";
import style from './tailwind.global.css?inline';

const tailwindElement = unsafeCSS(style);
export const TailwindElementMixin = (style) =>
    class extends LitElement {

        static styles = [tailwindElement, unsafeCSS(style)];
    
    };

    const element = TailwindElementMixin(style);