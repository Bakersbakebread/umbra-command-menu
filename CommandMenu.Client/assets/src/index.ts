import { UmbEntryPointOnInit } from '@umbraco-cms/backoffice/extension-api';
import { ManifestTypes } from '@umbraco-cms/backoffice/extension-registry';
import './command-menu';

import './command-menu/command-menu.styles.css?inline';

export const onInit: UmbEntryPointOnInit = (_host, extensionRegistry) => {

    // create popover target
    const popoverTarget = document.createElement('div');
    popoverTarget.id = 'command-menu-popover-target';
    // add popover attribute to target
    popoverTarget.setAttribute('popover', '');
    // create a style element
    const style = document.createElement('style');
    // add CSS rule for ::backdrop
    style.textContent = `
        #command-menu-popover-target::backdrop {
            background-color: rgba(0, 0, 0, 0.5);
        }

        :popover-open {
            background: transparent;
            border: transparent;
            // width: 100%;
          }
    `;
    
    // append the style element to the document head
    _host.appendChild(style);
    _host.appendChild(popoverTarget);
        
    // create command menu
    const commandMenu = document.createElement('commandmenu-commandmenu');
    popoverTarget.appendChild(commandMenu);

    
    window.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'K') {
            // open popovertarget
            popoverTarget.showPopover();
            popoverTarget.focus();
        }
    });

    extensionRegistry.unregister('Umb.HeaderApp.Search');

    extensionRegistry.register({
		type: 'headerApp',
		alias: 'command-menu-search-app',
		name: 'Command Menu ~ Header App Search',
		js: () => import('./search-icon/searchIcon.element.ts'),
		weight: 900,
		meta: {
			label: 'CommandMenuSearch',
			icon: 'commandmenusearch',
			pathname: 'commandmenusearch',
		},
	});

    commandMenu.addEventListener('closePopover', () => {
        // close popover when close event is emitted from component
        popoverTarget.hidePopover();
    });

    commandMenu.addEventListener('openPopover', () => {
        // open popover when open event is emitted from component
        alert('open popover event received')
        popoverTarget.showPopover();
    });
};
