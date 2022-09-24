const remote = require('@electron/remote');
const fs = require('fs');
const close = document.getElementById('close');
const minimize = document.getElementById('minimize');
const maximize = document.getElementById('maximize');
const downloads = document.getElementById('downloads');
const imageToggle = document.getElementById('img-toggle');
const modal = document.getElementById('download-modal');
const closeModal = document.getElementById('close-modal');
const getWin = () => remote.BrowserWindow.getFocusedWindow();
const { EditorView, basicSetup } = require('codemirror');
const { lua } = require('@codemirror/legacy-modes/mode/lua');
const { StreamLanguage } = require('@codemirror/language');
var logic = 0;
const closeWin = () => {
    getWin().close();
}
const minimizeWin = () => {
    getWin().minimize();
}
const maximizeWin = () => {
    const win = getWin();
    win.isMaximized() ? win.unmaximize() : win.maximize();
    win.isMaximized() ? imageToggle.src = "../assets/restore_down_1024.png" : imageToggle.src = "../assets/maximize_1024.png";
}
minimize.addEventListener('click', minimizeWin);
maximize.addEventListener('click', maximizeWin);
close.addEventListener('click', closeWin);
new EditorView({
    extensions: [basicSetup, StreamLanguage.define(lua)],
    parent: document.getElementById('editor')
})