import kaplay from "kaplay";
import "kaplay/global";
import { crew } from "@kaplayjs/crew";
import { bicyclePlayer } from "./player-info";
import { seawallBackground } from "./seawall-background";
import { spawnGarbage } from "./garbage-info";
import { spawnPothole } from "./pothole-info";
import { spawnBench } from "./bench-info";


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

seawallBackground()
const player = bicyclePlayer()

const seawallfloor = add([
    pos(0, 220),
    rect(780, 10),
    body({ isStatic: true }),
    area(),
    color(20,120,225),
    platformEffector({
        ignoreSides: [UP,LEFT,RIGHT]
    }),
    opacity(0),
    "seawallfloor"
])

const toproad = add([
    pos(0, 300),
    rect(780, 10),
    body({ isStatic: true }),
    area(),
    color(20,120,225),
    platformEffector({
        ignoreSides: [UP,LEFT,RIGHT]
    }),
    opacity(0),
    "toproad"
])

const bottomroad = add([
    pos(0, 338),
    rect(780, 10),
    body({ isStatic: true }),
    area(),
    color(225, 100, 70),
    opacity(0),
    // move(LEFT, 100),
    "bottomroad"
])

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

onCollide("player_bicycle","pothole",()=> {
    garbage_picked_up = 0
    green_bar.scale = vec2(garbage_picked_up,1)
})

spawnBench()
spawnPothole()
spawnGarbage()

