import jishiqi from './jishiqi.js';
import { remove } from './remove.js';
import { arr } from './dom.js';


const obj = new jishiqi();

window.onclick = function () {
    if (obj.timer) {
        obj.jiesu();
        obj.timer = null;
    } else {
        obj.jishi();
    }
    remove(arr);
};