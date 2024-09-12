import React  from "react";
import { Img_Box } from "./img";
function Para(){
    return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima molestias corporis consequuntur vel. In doloribus dolorum inventore consequuntur laborum obcaecati illo laudantium, provident, reiciendis minima delectus sint id ea?</p>
}
export function Box(){
    return <div className="box">
    <Img_Box/>
    <Para/>
    </div>
}

