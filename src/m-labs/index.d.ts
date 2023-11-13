interface COLORS {
    main: string;
    accent: string;
    text: string;
    onAccent: string;
    [propName: string]: string;
}
interface FONTS {
    en: string;
    ar?: string;
}
declare class MTheme {
    #private;
    name: string;
    constructor(name: string, colors: COLORS);
    apply(): void;
    changeColor(colorName: string, newValue: string): void;
    static setFont(fonts: FONTS): void;
    static setRadius(radius: number): void;
}
import MNotes from "./vue/MNotes.vue";
import MButton from "./vue/MButton.vue";
import MLight from "./vue/MLight.vue";
import MCode from "./vue/MCode.vue";
import MDText from "./vue/MDText.vue";
import MTabs from "./vue/MTabs.vue";
import MMenu from "./vue/MMenu.vue";
import MMenuItem from "./vue/MMenuItem.vue";
import MNews from "./vue/MNews.vue";
import MPoppup from "./vue/MPoppup.vue";
declare const m: {
    install: (Vue: any) => void;
};
export { MTheme, m, MNotes, MButton, MLight, MCode, MDText, MTabs, MMenu, MMenuItem, MNews, MPoppup, };
