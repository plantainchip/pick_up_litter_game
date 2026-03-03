import kaplay from "kaplay";
import "kaplay/global";
import { crew } from "@kaplayjs/crew";
import { bicyclePlayer } from "./player-info";
import { seawallBackground } from "./seawall-background";
import { spawnGarbage } from "./garbage-info";
import { spawnPothole } from "./pothole-info";
import { spawnBench } from "./bench-info";
import { lanes } from "./lanes-info";
import { headsupdisplay } from "./hud-info";   
import gameloop from "./gameloop";
import gameover from "./gameover";

kaplay({
    width: 780,
    height: 360,
    background: [27, 27, 27],
    plugins: [crew]
})

debug.inspect = false

setGravity(1600);

loadCrew("font", "happy");
loadCrew("sprite", "bean");
loadSprite("00sky","./sprites/780x360sprites/sky.png")
loadSprite("01cloud","./sprites/780x360sprites/cloud.png")
loadSprite("02ships","./sprites/780x360sprites/ships.png")
loadSprite("03atlantic","./sprites/780x360sprites/atlantic.png")
loadSprite("04seawall","./sprites/780x360sprites/seawall.png")
loadSprite("05grass","./sprites/780x360sprites/grass.png")
loadSprite("player","./sprites/780x360sprites/player.png")
loadSprite("can1","./sprites/780x360sprites/greencan.png")
loadSprite("can2","./sprites/780x360sprites/redcan.png")
loadSprite("bottle1","./sprites/780x360sprites/greenbottle.png")
loadSprite("bottle2","./sprites/780x360sprites/brownbottle.png")
loadSprite("foodbox","./sprites/780x360sprites/foodbox.png")
loadSprite("plasticbag1","./sprites/780x360sprites/blackplasticbag.png")
loadSprite("plasticbag2","./sprites/780x360sprites/whiteplasticbag.png")
loadSprite("bench","./sprites/780x360sprites/bench1.png")
loadSprite("stall","./sprites/780x360sprites/stall1.png")
loadSprite("wood","./sprites/780x360sprites/wood1.png")
loadSprite("pothole","./sprites/780x360sprites/pothole.png")
loadSprite("progress_bar","./sprites/780x360sprites/progress_bar.png")
loadSprite("green_bar","./sprites/780x360sprites/green_bar.png")
loadSprite("garbagebin","./sprites/780x360sprites/garbagebin.png")
loadSprite("people1","./sprites/780x360sprites/people1.png")
loadSprite("people2","./sprites/780x360sprites/people2.png")
loadSprite("people3","./sprites/780x360sprites/people3.png")
loadSprite("text_title","./sprites/780x360sprites/text_title.png")
loadSprite("gameover_screen","./sprites/780x360sprites/gameover_screen.png")


loadSprite("playerAnims","./sprites/780x360sprites/player_animations_bike4_jump1_fall1_hurt2.png",{
    sliceX: 8,
    sliceY: 1,
    anims: {
        bike: {
            from: 0,
            to: 3,
            loop: true,
        },
        jump: {
            from:4,
            to: 4,
        },
        fall: {
            from: 5,
            to: 5,
        },
        hurt: {
            from: 7,
            to:7,
        },
    }
});

window.STATE = {
    garbage_picked_up: 0,
    fast_speed: 300,
    medium_speed: 200,
    slow_speed: 100,
}

scene("game",gameloop);
scene("gameover",gameover);

scene("start",()=>{
        add([sprite("00sky")])
    // add([sprite("01cloud")])


    const cloudpanel1 = add([
        sprite("01cloud"),
        pos(0,0),
        move(LEFT, 8),
    ])

    const cloudpanel2 = add([
        sprite("01cloud"),
        pos(780,0),
        move(LEFT, 8),
    ])

    const shipspanel1 = add([
        sprite("02ships"),
        pos(0,0),
        move(LEFT, 8),
    ])

    const shipspanel2 = add([
        sprite("02ships"),
        pos(780,0),
        move(LEFT, 8),
    ])

    const oceanpanel1 = add([
        sprite("03atlantic"),
        pos(0,0),
        move(LEFT, 24),
    ])

    const oceanpanel2 = add([
        sprite("03atlantic"),
        pos(780,0),
        move(LEFT, 24),
    ])

    const seawallpanel1 = add([
        sprite("04seawall"),
        pos(0,0),
        move(LEFT,100),
    ])

    const seawallpanel2 = add([
        sprite("04seawall"),
        pos(780,0),
        move(LEFT, 100),
    ])

    const grasspanel1 = add([
        sprite("05grass"),
        pos(0,0),
        move(LEFT, 100+10),
        z(2)
    ])

    const grasspanel2 = add([
        sprite("05grass"),
        pos(780,0),
        move(LEFT, 100+10),
        z(2)
    ])


    onUpdate(() => {
        if(cloudpanel1.pos.x < (-779)){
            cloudpanel1.moveTo(780,0)
        }
        if(cloudpanel2.pos.x < (-779)){
            cloudpanel2.moveTo(780,0)
        }

        if(oceanpanel1.pos.x < (-779)){
            oceanpanel1.moveTo(780,0)
        }
        if(oceanpanel2.pos.x < (-779)){
            oceanpanel2.moveTo(780,0)
        }

        if(shipspanel1.pos.x < (-779)){
            shipspanel1.moveTo(780,0)
        }
        if(shipspanel2.pos.x < (-779)){
            shipspanel2.moveTo(780,0)
        }

        if(seawallpanel1.pos.x < (-779)){
            seawallpanel1.moveTo(780,0)
        }
        if(seawallpanel2.pos.x < (-779)){
            seawallpanel2.moveTo(780,0)
        }

        if(grasspanel1.pos.x < (-779)){
            grasspanel1.moveTo(780,0)
        }
        if(grasspanel2.pos.x < (-779)){
            grasspanel2.moveTo(780,0)
        }

    })
    add([
        sprite("text_title"),
    ])

    // Player components
    const player = add([
        sprite("playerAnims"), 
        pos(width()/2 -20, 300), 
        anchor("bot"),
        body({isStatic:true}),
        z(1),
        animate(),
        "bean"
    ]);
    player.play("bike")

    onKeyPress((key) => {
        go("game", );
    })
})
onLoad(() => go("start"))



