export function spawnPeople(){
    const people1 = add([
        sprite("people1"),
        pos(760, 168 ),
        body({ isStatic: true }),
        area({isSensor: true}),
        move(LEFT,200),
        offscreen({destroy: true}),
        platformEffector({
            ignoreSides: [DOWN,UP,LEFT,RIGHT]
        }),
        "people1"
    ])
    wait(rand(3,10),()=>{
        spawnPeople()
    })

}

export default {spawnPeople}