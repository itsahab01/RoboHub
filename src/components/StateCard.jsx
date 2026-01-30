function StateCard({ icon: Icon, title, value, color }) {
    return (
        <div className="state-card" style={{ borderLeftColor: color }}>
            <div className="state-icon" style={{ color }}>
                <Icon />
            </div>

            <div className="state-content">
                <span style={{ color }}>{title}</span>
                <h3 style={{ color }}>{value}</h3>
            </div>
        </div>
    );
}

export default StateCard;


