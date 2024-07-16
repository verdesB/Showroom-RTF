import {Mouse} from "lucide-react";

export const helpersDesktop = (
    <>
        <div className="pageSection__helperKeyboard">
            <img src="./keyboard.png" alt="Keyboard" style={{width: '3rem'}}/>
        </div>
        <div className="pageSection__helperMouse">
            <Mouse style={{color: '#9a9a9a', width: "3rem", height: '3rem'}}/>
        </div>
        <div className="pageSection__helpersEscape">
            <img src="/ESC.svg" style={{color: '#9a9a9a', width: "3rem", height: '3rem', }}/>
        </div>
    </>
);