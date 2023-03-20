import { MODULE_NAME, TAH_CSS_ENABLED } from "../consts.js";

const registerSettings = async () => {
    game.settings.register( MODULE_NAME, TAH_CSS_ENABLED, {
        name: "Improved Token Action HUD layout.",
        hint: "This fixes tah button sizes to fit the content better and also get enough space in the grid.",
        scope: "client",
        config: true,
        default: true,
        type: Boolean,
        onChange: debouncedReload,
    });
}

Hooks.once( "init", registerSettings );