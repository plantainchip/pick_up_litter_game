export function spawnPothole(){
    const mid_or_bot = choose([292,325])
    const pothole = add([
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

    pothole.onCollide("player_bicycle",()=> {
        debug.log("fall")
    })
}
export default {spawnPothole}