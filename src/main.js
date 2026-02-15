import kaplay from "kaplay";
import "kaplay/global";

import { crew } from "@kaplayjs/crew";


kaplay({
    width: 780,
    height: 360,
    background: [27, 27, 27],
    plugins: [crew]
})

debug.inspect = false
// onClick(() => addKaboom(mousePos()));
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
    move(LEFT, 100),
])

const seawallpanel2 = add([
    sprite("04seawall"),
    pos(780,0),
    move(LEFT, 100),
])

const grasspanel1 = add([
    sprite("05grass"),
    pos(0,0),
    move(LEFT, 110),
])

const grasspanel2 = add([
    sprite("05grass"),
    pos(780,0),
    move(LEFT, 110),
])

const floor1 = add([
    pos(0, 320),
    rect(780, 10),
    body({ isStatic: true }),
    area(),
    color(225, 100, 70),
    opacity(0),
    // move(LEFT, 100),
    "floor1"
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




const bufferfloor = add([
    pos(0, 300),
    rect(780, 20),
    area({isSensor:true}),
    color(20,120,225),
    opacity(0),
    "bufferfloor"
])

const seawallfloor = add([
    pos(0, 220),
    rect(780, 10),
    body({ isStatic: true }),
    area({}),
    color(20,120,225),
    platformEffector({
        ignoreSides: [UP,LEFT,RIGHT]
    }),
    opacity(0),
    "seawallfloor"
])


const player = add([
    sprite("player"), 
    pos(100, 240), 
    area(),
    body(),
    z(1),
    "bean"
]);


// this here for jump -------
onKeyPress("w", () => {
    if(player.isGrounded()){
        player.jump(500);
    }
})

onUpdate(()=> {
    if(player.isFalling()){
        setGravity(5000);
    } else {
        setGravity(1600);
    }

    // for jump buffering
    if(isKeyPressed("w") && player.isFalling() && player.isColliding(bufferfloor)){
        console.log("jump again" + dt())
        player.jump(500)
    }
})

// this here for jump -------

function SpawnPlatforms(){
    const platform = add([
        pos(740, 280),
        rect(180, 30),
        body({ isStatic: true }),
        area({isSensor: true}),
        color(0, 100, 70),
        move(LEFT,100),
        offscreen({destroy: true}),
        platformEffector({
            ignoreSides: [UP,LEFT,RIGHT]
        }),
        
        // platformEffector(),
        // surfaceEffector({ speed: 200 }),
        "platform"
    ])
    wait(rand(3,10),()=>{
        SpawnPlatforms()
    })

}

SpawnPlatforms()


onCollideUpdate("bean", "floor1", (a,b,c) => {
    player.moveTo(200, 300, 100)
})

onCollideUpdate("bean", "platform", (a,b,c) => {
    player.moveTo(200, player.pos.y, 100)
})

// onUpdate(() => {
//     debug.log(player.pos.x)
// })