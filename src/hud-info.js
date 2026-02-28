import gameover from "./gameover";

export function headsupdisplay(){
    let garbage_picked_up = 0;

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

    green_bar.scale = vec2(garbage_picked_up,1)

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
        
        if(garbage_picked_up == 156){
            garbage_picked_up
        } else {
            garbage_picked_up += 6
            scoreLabel.value+=1
            scoreLabel.text = scoreLabel.value
        }
        green_bar.scale = vec2(garbage_picked_up,1)
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
        garbage_picked_up = 0
        livesLabel.value-=1
        livesLabel.text = "x"+livesLabel.value
        green_bar.scale = vec2(garbage_picked_up,1)
        if(livesLabel.value == 0){
            wait(1,()=>{
                go("gameover")
            })
            
        }
    })
}

export default {headsupdisplay}