export function lanes(){
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
}

export default {lanes}