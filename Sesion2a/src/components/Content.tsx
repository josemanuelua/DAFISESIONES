import ActivityItem from "./ActivityItem"

const Content= ()=>{
    return(
        <div className="content">
             <div className="line"></div>
             <ActivityItem valorAlt="Francisca" valorSrc="francisca" valorTime="hace una hora" valorP="Fui a comer con amigos"/>
             <ActivityItem valorAlt="Paco" valorSrc="paco" valorTime="10:00" valorP="Leí un artículo sobre tecnología"/>
             <ActivityItem valorAlt="Quica" valorSrc="quica" valorTime="10:00" valorP="Escribí notas sobre un proyecto importante"/>
             <ActivityItem valorAlt="Curro" valorSrc="curro" valorTime="2:21" valorP="Preparé la presentación para la reunión de mañana"/>
        </div>
    )
}

export default Content