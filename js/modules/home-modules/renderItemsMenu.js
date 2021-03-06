import { sleep }              from './../general-modules/sleep.js';
import { renderInstructions } from './menu-modules/renderInstructions.js';
import { renderOptions }      from './menu-modules/renderOptions.js';

export async function renderItemsMenu(options) {
    let selectedMenu = await getClicked();

    console.log("  Button selected: " + selectedMenu);

    if(selectedMenu == ".btn-start")
        options.start = true;
    else if(selectedMenu == ".btn-instructions")
        await renderInstructions(options.theme);        
    else if(selectedMenu == ".btn-options")
        options = await renderOptions(options);

    return options;
}   

export async function getClicked() {
    let flag = false;
    do{
        await sleep(200);
        flag = returnActive();
    }while(flag==true);
    
    return flag;
}

function returnActive() {
    if(checkActive(".btn-start"))
        return ".btn-start";
    if(checkActive(".btn-instructions"))
        return ".btn-instructions";
    if(checkActive(".btn-options"))
        return ".btn-options";

    return true;
}

function checkActive(item) {
    return document.querySelector(item).classList.contains("active");
}