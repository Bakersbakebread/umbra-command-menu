import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { LitElement, html, css, customElement, property, unsafeCSS } from "@umbraco-cms/backoffice/external/lit";
import { TailwindElementMixin } from "../shared/tailwindfactory.element";

import styles from './command-menu.styles.css?inline';


@customElement('commandmenu-commandmenu')
export class CommandMenu  extends UmbElementMixin(TailwindElementMixin(styles)) {
    @property({ type: String }) name = 'CommandMenu';
    

    logSomething() {
        console.log('something');
    }

    handleSearch() {
        this.logSomething();
    }

    emitCloseEvent() {
        this.dispatchEvent(new CustomEvent('closePopover'));
    }

    @property() developerLinks =  [
        {
            icon: 'icon-folder',
            label: 'Create new doctype',
            link: '/umbraco/section/settings/workspace/document-type/create/parent/document-type-root/null/view/design/root'
        },
        {
            icon: 'icon-folder',
            label: 'Create new data type',
            link: '/umbraco/section/settings/workspace/data-type/create/parent/data-type-root/null/view/details'
        },
        {
            icon: 'icon-ordered-list',
            label: 'Go to log viewer',
            link: '/umbraco/section/settings/workspace/logviewer/view/overview'
        }
    ];

    @property() settingsLinks =  [
        {
            icon: 'icon-handshake',
            label: 'Go to <strong>Models Builder</strong>',
            link: '/umbraco/section/settings/dashboard/models-builder'
        },
        {
            icon: 'icon-file-cabinet',
            label: 'Go to Examine Management',
            link: 'umbraco/section/settings/dashboard/examine-management'
        },
        {
            icon: 'icon-shopping-basket',
            label: 'Go to Ecommerce',
            link: 'https://bouncingdvdlogo.com/'
        },
        {
            icon: 'icon-hearts',
            label: 'Go to Health Checks',
            link: '/umbraco/section/settings/dashboard/health-check'
        }
    ]

    getFilteredSettingsLinks() {
        if(this.search === '') return this.settingsLinks;
        return this.settingsLinks.filter(link => link.label.toLowerCase().includes(this.search.toLowerCase()));
    }
    getFilteredLinks() {
        if(this.search === '') return this.developerLinks;
        return this.developerLinks.filter(link => link.label.toLowerCase().includes(this.search.toLowerCase()));
    }

    @property() search = '';

    handleSearching(e: Event) {
        console.log(e);
        const target = e.target as HTMLInputElement;
        this.search = target.value;
        console.log(this.search);
    }

    render() {
        return html`
        <div class="items-center justify-center p-2 md:p-12 lg:px-20 lg:py-36">
          <div class=" mx-auto overflow-hidden transition-all transform bg-white divide-y divide-gray-100 shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5">
            <div class="relative">
              <uui-icon name="icon-search" class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400 md hydrated" name="search-outline" role="img" aria-label="search outline"></uui-icon>
              <input @input=${(e) => this.handleSearching(e) } type="text" class="w-full h-12 pr-4 text-gray-800 placeholder-gray-400 bg-transparent border-0 pl-11 focus:ring-0 sm:text-sm" placeholder="What do you need?" role="combobox" aria-expanded="false" aria-controls="options">
            </div>
            <ul class="p-3 space-y-3 overflow-y-auto max-h-96 scroll-py-3" id="options" role="listbox">
              <li>
                <div class="px-1 py-3">
                  <p class="text-sm font-semibold text-gray-500">
                    Developer
                  </p>
                </div>
              </li>
              ${this.getFilteredLinks().map((link) => html`
              <li class="flex p-3 text-gray-500 duration-200 cursor-default select-none hover:text-blue-500 group rounded-xl hover:bg-gray-50" id="option-1" role="option" tabindex="-1">
                <a @click='${this.emitCloseEvent}' href="${link.link}" class="flex">
                  <div class="flex items-center justify-center flex-none">
                  <uui-icon name="${link.icon}" class="w-5 h-5 md hydrated" role="img" aria-label="arrow-forward-outline"></uui-icon>

                  </div>
                  <div class="flex-auto ml-4">
                    <p class="text-sm">
                      ${link.label}
                    </p>
                  </div>
                </a>
              </li>
              `)}
              <li>
                <div class="px-1 py-3">
                  <p class="text-sm font-semibold text-gray-500">
                    Settings
                  </p>
                </div>
              </li>
              ${this.getFilteredSettingsLinks().map((link) => html`
              <li class="flex p-3 text-gray-500 duration-200 cursor-default select-none hover:text-blue-500 group rounded-xl hover:bg-gray-50" id="option-1" role="option" tabindex="-1">
                <a @click='${this.emitCloseEvent}' href="${link.link}" class="flex">
                  <div class="flex items-center justify-center flex-none">
                  <uui-icon name="${link.icon}" class="w-5 h-5 md hydrated" role="img" aria-label="arrow-forward-outline"></uui-icon>

                  </div>
                  <div class="flex-auto ml-4">
                    <p class="text-sm">
                      ${link.label}
                    </p>
                  </div>
                </a>
              </li>
              `)}
            </ul>
          </div>
        </div>
        `;
    }
} 