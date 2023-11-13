/*
  Full documentation (including features and how to use) for m-labs is found on :
    https://moneerAlDakkak.github.io/MLabs
*/
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MTheme_colors;
import { parse_to_HSLArray } from "./helpers/color_converting";
const ROOT = document.querySelector(":root");
class MTheme {
    constructor(name, colors) {
        _MTheme_colors.set(this, { main: [], accent: [], onAccent: [], text: [] });
        this.name = name;
        for (let colorKey in colors) {
            __classPrivateFieldGet(this, _MTheme_colors, "f")[colorKey] = parse_to_HSLArray(colors[colorKey]);
        }
    }
    apply() {
        for (let colorName in __classPrivateFieldGet(this, _MTheme_colors, "f")) {
            ROOT.style.setProperty(`--m-color-${colorName}-h`, `${__classPrivateFieldGet(this, _MTheme_colors, "f")[colorName][0]}`);
            ROOT.style.setProperty(`--m-color-${colorName}-s`, `${__classPrivateFieldGet(this, _MTheme_colors, "f")[colorName][1]}%`);
            ROOT.style.setProperty(`--m-color-${colorName}-l`, `${__classPrivateFieldGet(this, _MTheme_colors, "f")[colorName][2]}%`);
            ROOT.style.setProperty(`--m-color-${colorName}-a`, `${__classPrivateFieldGet(this, _MTheme_colors, "f")[colorName][3]}`);
            ROOT.style.setProperty(`--m-color-${colorName}`, `hsla(${__classPrivateFieldGet(this, _MTheme_colors, "f")[colorName][0]},
          ${__classPrivateFieldGet(this, _MTheme_colors, "f")[colorName][1]}%,
          ${__classPrivateFieldGet(this, _MTheme_colors, "f")[colorName][2]}%,
          ${__classPrivateFieldGet(this, _MTheme_colors, "f")[colorName][3]})
        `);
        }
    }
    changeColor(colorName, newValue) {
        __classPrivateFieldGet(this, _MTheme_colors, "f")[colorName] = parse_to_HSLArray(newValue);
        this.apply();
    }
    static setFont(fonts) {
        ROOT.style.setProperty("--m-font-en", fonts.en);
        fonts.ar ? ROOT.style.setProperty("--m-font-ar", fonts.ar) : null;
    }
    static setRadius(radius) {
        ROOT.style.setProperty("--m-ui-radius", `${radius}px`);
    }
}
_MTheme_colors = new WeakMap();
// Vue Imports :
// @ts-ignore
import MNotes from "./vue/MNotes.vue";
// @ts-ignore
import MButton from "./vue/MButton.vue";
// @ts-ignore
import MLight from "./vue/MLight.vue";
// @ts-ignore
import MCode from "./vue/MCode.vue";
// @ts-ignore
import MDText from "./vue/MDText.vue";
// @ts-ignore
import MTabs from "./vue/MTabs.vue";
// @ts-ignore
import MMenu from "./vue/MMenu.vue";
// @ts-ignore
import MMenuItem from "./vue/MMenuItem.vue";
// @ts-ignore
import MNews from "./vue/MNews.vue";
// @ts-ignore
import MPoppup from "./vue/MPoppup.vue";
const components = {
    MNotes,
    MButton,
    MLight,
    MCode,
    MDText,
    MTabs,
    MMenu,
    MMenuItem,
    MNews,
    MPoppup,
};
const m = {
    install: (Vue) => {
        for (let component in components) {
            Vue.component(component, components[component]);
        }
    },
};
export { MTheme, m, MNotes, MButton, MLight, MCode, MDText, MTabs, MMenu, MMenuItem, MNews, MPoppup, };
