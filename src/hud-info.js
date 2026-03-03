import gameover from "./gameover";
import { bicyclePlayer } from "./player-info";

export function headsupdisplay(){

    const progress_bar = add([
        sprite("progress_bar"),
        pos(width()/2,28),
        anchor("center"),
    ])

    const green_bar = add([
        sprite("green_bar"),
        pos(143,34),
        scale(1,1)
    ])

    green_bar.scale = vec2(STATE.garbage_picked_up,1)

    // score
    const scoreLabel = add([
        text("0",{
            size: 24,
            font: "happy"
        }),
        pos(656,22),
        color(148,123,27),
        {value:0}
    ])

    onCollide("bean","can1",()=>{
        green_bar.scale = vec2(1,1)
        
        if(STATE.garbage_picked_up == 156){
            STATE.garbage_picked_up
        } else {
            STATE.garbage_picked_up += 6
            scoreLabel.value+=10
            scoreLabel.text = scoreLabel.value
        }
        green_bar.scale = vec2(STATE.garbage_picked_up,1)
    })

    add([
        sprite("bean"),
        pos(40,22),
        scale(0.5)
    ])
    const livesLabel = add([
        text("x3",{
            size: 24,
            font: "happy"
        }),
        pos(75,22),
        color(148,123,27),
        {value:3}
    ])
   

    onCollide("player_bicycle","pothole",()=> {
        STATE.garbage_picked_up = 0
        livesLabel.value-=1
        livesLabel.text = "x"+livesLabel.value
        green_bar.scale = vec2(STATE.garbage_picked_up,1)
        if(livesLabel.value == 0){
            wait(1,()=>{
                go("gameover")
            })
        }
    })
    onCollide("player_bicycle","people1",()=> {
        STATE.garbage_picked_up = 0
        livesLabel.value-=1
        livesLabel.text = "x"+livesLabel.value
        green_bar.scale = vec2(STATE.garbage_picked_up,1)
        if(livesLabel.value == 0){
            wait(1,()=>{
                go("gameover")
            })
        }
    })

    let binCollided = false;
    let pressE = false;

    onCollideUpdate("player_bicycle","bin",()=>{
        binCollided = true;
    })

    onCollideEnd("player_bicycle","bin",()=>{
        binCollided = false;
    })

    onKeyPress("e",()=>{
        pressE = true;

        if(binCollided+pressE == 2){
            STATE.garbage_picked_up = 0;
            green_bar.scale = vec2(STATE.garbage_picked_up,1);
            //score for bin
            scoreLabel.value+=100
            scoreLabel.text = scoreLabel.value
        }
    })



}

export default {headsupdisplay}