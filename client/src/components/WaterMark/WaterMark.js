import memories from "../../images/memories.png"
import "./styles.css"
export default function WaterMark({children,options}) {


  return (
    <div className="watermark">
        <svg> 
            <image opacity={0.4} width={30} height={30}  y="155" href={memories} />
            <text fill={options.color} opacity={options.opacity}  y="176">{options.text}</text>
        </svg>
        {children}
    </div>
  )
}