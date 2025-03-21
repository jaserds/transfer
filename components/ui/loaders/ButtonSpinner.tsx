
export default function ButtonSpinner() {
    return <>
        <span className="loader"></span>
        <style jsx>{`
        .loader {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: block;
            margin: 7px auto;
            position: relative;
            background: #FFF;
            box-shadow: -24px 0 #FFF, 24px 0 #FFF;
            box-sizing: border-box;
            animation: shadowPulse 2s linear infinite;
            }

            @keyframes shadowPulse {
            33% {
                background: #FFF;
                box-shadow: -24px 0 #f9ac1a, 24px 0 #FFF;
            }
            66% {
                background: #f9ac1a;
                box-shadow: -24px 0 #FFF, 24px 0 #FFF;
            }
            100% {
                background: #FFF;
                box-shadow: -24px 0 #FFF, 24px 0 #f9ac1a;
            }
        }
`}
        </style>
    </>
}