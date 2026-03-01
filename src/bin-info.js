export function spawnBin(){
    const bin = add([
        sprite("garbagebin"),
        pos(775,340),
        body({isStatic:true}),
        area({isSensor:true}),
        move(LEFT,200),
        offscreen({destroy:true}),
        anchor("bot"),
        platformEffector({
            ignoreSides: [DOWN,UP,LEFT,RIGHT]
        }),
        "bin"
    ])
    wait(rand(10,30),()=>{
        spawnBin()
    })
}

export default {spawnBin}