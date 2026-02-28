export function spawnBench(){
    // const mid_or_bot = choose([273,310])
    const platform = add([
        sprite("bench"),
        pos(760, 273 ),
        body({ isStatic: true }),
        area({isSensor: true}),
        move(LEFT,200),
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
export default {spawnBench}