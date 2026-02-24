import kaplay from "kaplay";
import "kaplay/global";
import { bicyclePlayer } from "./player-info";
import { seawallBackground } from "./seawall-background";

kaplay({
    width: 780,
    height: 360,
    background: [27, 27, 27],
})

debug.inspect = true

setGravity(1600);


loadSprite("00sky","./sprites/780x360sprites/sky.png")
loadSprite("01cloud","./sprites/780x360sprites/cloud.png")
loadSprite("02ships","./sprites/780x360sprites/ships.png")
loadSprite("03atlantic","./sprites/780x360sprites/atlantic.png")
loadSprite("04seawall","./sprites/780x360sprites/seawall.png")
loadSprite("05grass","./sprites/780x360sprites/grass.png")
loadSprite("player","./sprites/780x360sprites/player.png")
loadSprite("foodbox","./sprites/780x360sprites/foodbox.png")
loadSprite("can1","./sprites/780x360sprites/greencan.png")
loadSprite("bench","./sprites/780x360sprites/bench1.png")
loadSprite("stall","./sprites/780x360sprites/stall1.png")
loadSprite("wood","./sprites/780x360sprites/wood1.png")
loadSprite("pothole","./sprites/780x360sprites/pothole.png")
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


function spawnBench(){
    // const mid_or_bot = choose([273,310])
    const platform = add([
        sprite("bench"),
        pos(760, 273 ),
        body({ isStatic: true }),
        area({isSensor: true}),
        move(LEFT,100),
        offscreen({destroy: true}),
        platformEffector({
            ignoreSides: [UP,LEFT,RIGHT]
        }),
        "bench"
    ])
    wait(rand(3,10),()=>{
        spawnBench()
    })
}
spawnBench()

let potholePlacementTop = false;

function spawnPothole(){
    const mid_or_bot = choose([292,325])
    const platform = add([
        sprite("pothole"),
        pos(760, mid_or_bot ),
        body({ isStatic: true }),
        area({isSensor: true}),
        move(LEFT,100),
        offscreen({destroy: true}),
        platformEffector({
            ignoreSides: [DOWN,UP,LEFT,RIGHT]
        }),
        "pothole"
    ])
    wait(rand(3,10),()=>{
        spawnPothole()
    })
}
spawnPothole()