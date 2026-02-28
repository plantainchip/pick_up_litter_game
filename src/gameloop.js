import "kaplay/global";
import { bicyclePlayer } from "./player-info";
import { seawallBackground } from "./seawall-background";
import { spawnGarbage } from "./garbage-info";
import { spawnPothole } from "./pothole-info";
import { spawnBench } from "./bench-info";
import { lanes } from "./lanes-info";
import { headsupdisplay } from "./hud-info";  

export default function(){
    seawallBackground()
    lanes()
    bicyclePlayer()
    headsupdisplay()
    spawnBench()
    spawnPothole()
    spawnGarbage()
}

