export function spawnGarbage(){
    // const rand_lane = choose([180, 268,305])
    const rand_lane = choose([220, 304,340])

    const can1 = add([
        choose([
            sprite("can1"),
            sprite("can2"),
            sprite("bottle1"),
            sprite("bottle2"),
            sprite("foodbox"),
            sprite("plasticbag1"),
            sprite("plasticbag2"),

        ]),
        pos(775, rand_lane ),
        body({ isStatic: true }),
        area({isSensor: true}),
        move(LEFT,200),
        offscreen({destroy: true}),
        anchor("bot"),
        platformEffector({
            ignoreSides: [DOWN,UP,LEFT,RIGHT]
        }),
        "can1"
    ])
    wait(rand(0.3,5),()=>{
        spawnGarbage()
    })

    can1.onCollide("bean",()=> {
        can1.destroy()
    })

}


export default {spawnGarbage}