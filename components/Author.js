export default function Author({ name }) {
    return (
        <div>
            <br />
            <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
                <p>Written by {name}</p>
                <p>Ben is a computer science student who enjoys learning, teach, and building things with code. Follow him on <a target="_blank" href="https://youtube.com/benjamincarlson" className="annimate-underline">YouTube</a>.</p>
            </div>
            <br />
        </div>
    )
}
