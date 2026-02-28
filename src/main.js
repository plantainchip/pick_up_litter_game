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

loadSprite("playerAnims","./sprites/780x360sprites/player_animations_bike_jump_fall.png",{
    sliceX: 6,
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
        }
    }
});

scene("game",gameloop);
scene("gameover",gameover);

scene("start",()=>{
    setBackground(34,97,230)
    add([
        text("start"),
        pos(center()),
        anchor("center"),
    ])
    onKeyPress((key) => {
        go("game", );
    })
})
onLoad(() => go("start"))



