export function bicyclePlayer(){

    // Player components
    const player = add([
        sprite("playerAnims"), 
        pos(100, 300), 
        // area({shape: new Circle(vec2(0),10)}),
        area({shape: new Rect(vec2(6,0), 65, 70)}),
        anchor("bot"),
        body(),
        z(1),
        animate(),
        "bean"
    ]);
    

    // Player default animation function
    const playerPlayBike = () => {
    if (player.isGrounded() && player.getCurAnim().name !== "bike") {
        player.play("bike");
    }
    };

    onKeyRelease(["w"], () => {
        playerPlayBike();
    });

    player.onGround(()=> {
        player.play("bike")
    })

    // this here for jump -------
    onKeyPress("w", () => {
        // console.log(player.curPlatform()._tags.has("bottomroad"))
        // player.collisionIgnore = ["toproad","bench"]

        // if(player.curPlatform()._tags.has("bottomroad")){
        //     console.log(player.curPlatform()._tags.has("bottomroad"))
        //     player.collisionIgnore = ["pothole"]
        // }
        
        if(player.isGrounded()){
            player.jump(500);
        }
    })

    // onKeyDown("w", () => {
    //     // const p = player.curPlatform();
    //     // if(player.curPlatform()._tags.has("bottomroad")){
    //     //     console.log(player.curPlatform()._tags.has("bottomroad"))
    //     //     setGravityDirection(UP);
    //     // }
    // });

        

    // if the platform has platform effector component, ignore it when press s to fall through
    onKeyPress("s", () => {
        const p = player.curPlatform();
        if (p != null && p.has("platformEffector")) {
            p.platformIgnore.add(player);
        }
    });

    onUpdate(()=> {
        if(player.isFalling()){
            setGravity(5000);
        } else {
            setGravity(1600);
        }
        if(player.pos.x != 200){
            player.moveTo(200,player.pos.y,100)
        }
    });

    // Collision with floor
    
    // onCollideUpdate("bean", "seawallfloor", (a,b,c) => {
    //     player.moveTo(200, player.pos.y, 100)
    // })

    // onCollideUpdate("bean", "toproad", (a,b,c) => {
    //     player.moveTo(200, player.pos.y, 100)
    // })

    // onCollideUpdate("bean", "bottomroad", (a,b,c) => {
    //     player.moveTo(200, player.pos.y, 100)
    // })

    // onCollideUpdate("bean", "bench", (a,b,c) => {
    //     player.moveTo(200, player.pos.y, 100)
    // })

    // onCollide("bean", "pothole", () => {
    //     addKaboom(vec2(200,player.pos.y - 50))
    // })



    return player

}

export default {
    bicyclePlayer
}