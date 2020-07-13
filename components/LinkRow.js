export default function LinkRow({ name, href }) {
    return (
        <div>
            <a href={href} target="_blank">
                <div className="link-outer">
                    <p className="text-center link-row-p">{name}</p>
                </div>
            </a>

            <style jsx>{`
                .link-outer {
                    background-color: #fff;
                    margin: 10px;
                    padding: 5px;
                }               

                .link-row-p {
                    color: #000;
                }
            `}
            </style>
        </div >
    )
}