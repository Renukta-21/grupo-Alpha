import { GiCctvCamera } from 'react-icons/gi'
import { RiSignalTowerFill } from 'react-icons/ri'
import { FaFingerprint } from 'react-icons/fa'
import { AiFillBulb } from 'react-icons/ai'
import { MdSignalWifiStatusbar3Bar } from 'react-icons/md'
import { AiOutlineGlobal } from 'react-icons/ai'
import { SiInductiveautomation } from 'react-icons/si'
import { FaFire } from 'react-icons/fa'
import { MdOutlineStackedLineChart } from 'react-icons/md'
import { MdCable } from 'react-icons/md'
import { PiSpeakerSimpleHighFill } from 'react-icons/pi'
import { LiaRobotSolid } from 'react-icons/lia'

export const categoryMapping = {
  Videovigilancia: 'videovigilancia',
  Radiocomunicación: 'Radiocomunicacion',
  'Control  de Acceso ': 'ControldeAcceso',
  'Redes e IT': 'RedesEIT',
  'IoT / GPS / Telemática y Señalización Audiovisual':
    'TelematicaYSenializacion',
  'Energía / Herramientas': 'EnergiaYHerramientas',
  'Automatización   e Intrusión': 'AutomatizacionEIntrusion',
  'Detección  de Fuego': 'DeteccionDeFuego',
  Marketing: 'Marketing',
  'Cableado Estructurado': 'CableadoEstructurado',
  'Audio y Video': 'AudioYVideo',
  'Robots e Industrial': 'RobotsEIndustrial',
}
export const iconsMap = {
  videovigilancia: GiCctvCamera,
  Radiocomunicacion: RiSignalTowerFill,
  ControldeAcceso: FaFingerprint,
  RedesEIT: MdSignalWifiStatusbar3Bar,
  TelematicaYSenializacion: AiOutlineGlobal,
  EnergiaYHerramientas: AiFillBulb,
  AutomatizacionEIntrusion: SiInductiveautomation,
  DeteccionDeFuego: FaFire,
  Marketing: MdOutlineStackedLineChart,
  CableadoEstructurado: MdCable,
  AudioYVideo: PiSpeakerSimpleHighFill,
  RobotsEIndustrial: LiaRobotSolid,
}
