import "kaplay/global";

export default function(){
    setBackground(34,197,230)
    add([
        sprite("gameover_screen")
    ])
    onKeyPress((key) => {
        go("start", );
    })
}