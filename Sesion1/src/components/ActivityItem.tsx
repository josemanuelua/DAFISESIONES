interface ActivityItemProps {
    valorAlt: string;
    valorSrc: string;
    valorTime: string;
    valorP: string;
}
const ActivityItem = ({ valorAlt, valorSrc, valorTime, valorP }: ActivityItemProps): JSX.Element => {
    return (
        <div className="item">
            <div className="avatar">
                <img alt={valorAlt} src={`/images/${valorSrc}.jpg`} />
            </div>
            <span className="time">{valorTime}</span>
            <p>{valorP}</p>
        </div>

    )
}

export default ActivityItem

