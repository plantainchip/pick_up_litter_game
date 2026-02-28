import "kaplay/global";

export default function(){
    setBackground(34,197,230)
    add([
        text("you lost"),
        pos(center()),
        anchor("center"),
    ])
    onKeyPress((key) => {
        go("start", );
    })
}