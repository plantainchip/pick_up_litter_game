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

    const player_bicycle = add([
        pos(100, 300), 
        rect(50, 10),
        area({isSensor:true}),
        anchor("bot"),
        follow(player,vec2(5,0)),
        opacity(0),
        "player_bicycle"
    ])
    

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
        
        if(player.isGrounded()){
            player.jump(500);
        }
    })

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

    onCollide("player_bicycle","pothole",()=>{
        player.color = (0,0,10,100)
    })

    onCollideEnd("player_bicycle","pothole",()=>{
        player.color = (0,0,0,0)
    })

    return player, player_bicycle

}

export default {
    bicyclePlayer
}