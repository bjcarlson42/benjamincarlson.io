export default function Gear({ gear }) {
    return (
        <div>
            <p><b>{gear.item}:</b> <a href={gear.url} target="_blank" style={{ color: '#000' }}>{gear.title}</a></p>
        </div>   
    )
}