import { GiCctvCamera } from 'react-icons/gi'
import { RiSignalTowerFill } from 'react-icons/ri'
import { FaFingerprint } from 'react-icons/fa'
import { AiFillBulb } from 'react-icons/ai'
import { MdSignalWifiStatusbar3Bar } from 'react-icons/md'
import { AiOutlineGlobal } from 'react-icons/ai'
import { SiInductiveautomation } from "react-icons/si";
import { FaFire } from "react-icons/fa";
import { MdOutlineStackedLineChart } from "react-icons/md";
import { MdCable } from "react-icons/md";
import { PiSpeakerSimpleHighFill } from "react-icons/pi";
import { LiaRobotSolid } from "react-icons/lia";


const categoryMapping = {
  Videovigilancia: 'videovigilancia',
  Radiocomunicación: 'Radiocomunicacion',
  'Control  de Acceso ': 'ControldeAcceso',
  'Redes e IT': 'RedesEIT',
  'IoT / GPS / Telemática y Señalización Audiovisual':
    'TelematicaYSenializacion',
  'Energía / Herramientas': 'EnergiaYHerramientas',
  "Automatización   e Intrusión":"AutomatizacionEIntrusion",
  "Detección  de Fuego":"DeteccionDeFuego",
  "Marketing":"Marketing",
  "Cableado Estructurado":"CableadoEstructurado",
  "Audio y Video":"AudioYVideo",
  "Robots e Industrial":"RobotsEIndustrial"

}
const iconsMap = {
  videovigilancia: GiCctvCamera,
  Radiocomunicacion: RiSignalTowerFill,
  ControldeAcceso: FaFingerprint,
  RedesEIT: MdSignalWifiStatusbar3Bar,
  TelematicaYSenializacion: AiOutlineGlobal,
  EnergiaYHerramientas: AiFillBulb,
  AutomatizacionEIntrusion:SiInductiveautomation,
    DeteccionDeFuego:FaFire,
  Marketing:MdOutlineStackedLineChart,
CableadoEstructurado:MdCable,
AudioYVideo:PiSpeakerSimpleHighFill,
RobotsEIndustrial:LiaRobotSolid


}

const DisplayedCategory = ({ categories }) => {
  return (
    <div className="flex-grow p-3 bg-yellow-300 flex flex-col">
      <div className="p-3 h-full bg-red-400 flex-grow flex">
        <div className='flex flex-col justify-between'>
          {categories.map((c) => {
          return (
            <CategoryCard
              key={c.id}
              id={c.id}
              nombre={c.nombre}
              nivel={c.nivel}
            />
          )
        })}
        </div>
        <div className='bg-green-500 flex-grow'>CONTENT</div>
      </div>
    </div>
  )
}
const CategoryCard = ({ id, nombre, nivel }) => {
  const key = categoryMapping[nombre] || nombre
  const Icon = iconsMap[key]
  const handleCategoryDisplay = ()=>{
    
  }
  return (
    <div className='flex p-4 bg-[#181A1B] max-w-[270px]' onClick={handleCategoryDisplay}>
      {Icon ? <Icon className="text-xl" /> : <span>❓</span>}
      <span>{nombre}</span>
    </div>
  )
}
export default DisplayedCategory
