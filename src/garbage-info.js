export function spawnGarbage(){
    const rand_lane = choose([180, 268,305])
    const can1 = add([
        sprite("can1"),
        pos(760, rand_lane ),
        body({ isStatic: true }),
        area({isSensor: true}),
        move(LEFT,100),
        offscreen({destroy: true}),
        platformEffector({
            ignoreSides: [DOWN,UP,LEFT,RIGHT]
        }),
        "can1"
    ])
    wait(rand(3,10),()=>{
        spawnGarbage()
    })

    can1.onCollide("bean",()=> {
        can1.destroy()
    })

}


export default {spawnGarbage}