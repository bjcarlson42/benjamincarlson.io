export default function LinkRow({ name, href }) {
    return (
        <div>
            <a style={{textDecoration: 'none'}} href={href} target="_blank">
                <div className="link-outer">
                    <p className="text-center link-row-p">{name}</p>
                </div>
            </a>

            <style jsx>{`
                .link-outer {
                    background-color: #fff;
                    margin: 5px;
                    border-radius: 10px;
                }      

                .link-row-p {
                    color: #000;
                    padding: 15px;
                }

                .link-outer:hover {
                    background-color: rgba(255, 255, 255, 0.5);
                }
            `}
            </style>
        </div >
    )
}