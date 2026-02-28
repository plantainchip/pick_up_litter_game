export function seawallBackground(){
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

    const shipspanel1 = add([
        sprite("02ships"),
        pos(0,0),
        move(LEFT, 8),
    ])

    const shipspanel2 = add([
        sprite("02ships"),
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
        move(LEFT, 200),
    ])

    const seawallpanel2 = add([
        sprite("04seawall"),
        pos(780,0),
        move(LEFT, 200),
    ])

    const grasspanel1 = add([
        sprite("05grass"),
        pos(0,0),
        move(LEFT, 210),
        z(2)
    ])

    const grasspanel2 = add([
        sprite("05grass"),
        pos(780,0),
        move(LEFT, 210),
        z(2)
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

        if(shipspanel1.pos.x < (-779)){
            shipspanel1.moveTo(780,0)
        }
        if(shipspanel2.pos.x < (-779)){
            shipspanel2.moveTo(780,0)
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
}

export default {
    seawallBackground
}