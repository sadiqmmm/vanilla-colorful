import { interactiveStyles, pointerStyles } from '../styles.js';
import type { Constructor } from '../types';

export interface PointerInterface {
  pointer: HTMLElement;
  setPointer(properties: Record<string, string>): void;
}

export const PointerMixin = <T extends Constructor<HTMLElement>>(
  base: T,
  styles: string
): T & Constructor<PointerInterface> => {
  const template = document.createElement('template');

  template.innerHTML = `
    <style>${styles}${interactiveStyles}${pointerStyles}</style>
    <div id="interactive"><div id="pointer" part="pointer"></div></div>
  `;

  class Pointer extends base {
    pointer!: HTMLElement;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any[]) {
      super(...args);
      const root = this.attachShadow({ mode: 'open' });
      root.appendChild(template.content.cloneNode(true));
      this.pointer = root.getElementById('pointer') as HTMLElement;
    }

    setPointer(properties: Record<keyof CSSStyleDeclaration, string>): void {
      for (const p in properties) {
        this.pointer.style[p] = properties[p];
      }
    }
  }

  return Pointer;
};