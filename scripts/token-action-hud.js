import { MODULE_NAME, TAH_CSS_ENABLED } from "./consts.js";
import { injectCSS } from "./utils.js";

Hooks.once("renderTokenActionHud", async () => {
     if( game.settings.get(MODULE_NAME, TAH_CSS_ENABLED) ){
          injectCSS("tah");
          console.log( MODULE_NAME + " | token action hud loaded -> loaded css improvements");
     }
});