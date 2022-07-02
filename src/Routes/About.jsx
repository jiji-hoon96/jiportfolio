import Nav from "./components/Nav";
import './aboutc.css'
import styled from "styled-components"

const AboutDiv = styled.div`
    padding: 150px 0;
`

function About(){
    return (
        <>
        <Nav/>
        <AboutDiv
            transition= { {duration: 0.5 }}
            initial= { {opacity: 0, y: 20 }}
            animate= { {opacity: 1, y: 0 }}
            exit= { {opacity: 0, y: -20} }  
        >
        <div className="periodic-table">
            <div className="empty-spacer-1"></div>
            <div className="empty-spacer-2"></div>
            <div className="periodic-element social-media" data-description="HTML5 을 이용해 코드를 제작,수정,응용 할 수 있습니다">
                <div className="periodic-element-inner">
                    <div className="title"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg></div>
                    <div className="description">Html5</div>
                </div>
            </div>
            <div className="periodic-element social-media" data-description="PUG 을 이용해 코드를 제작,수정,응용 할 수 있습니다">
                <div className="periodic-element-inner">
                    <div className="title"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Pug</title><path d="M12.0938 4.6358c-2.0663 0-3.6817.204-4.9221.5704a6.4511 6.4511 0 0 0 .0918-.084c.0374-.0375-.0507-.0625-.2285-.0684-.5335-.0175-1.8672.1436-2.9904.7051-1.273.599-4.118 3.7446-4.0432 3.9318.075.1872 1.4594 1.3458 1.8712 1.795.2621.2995 1.0485 2.9592 1.7599 2.51.189-.131.2656-.651.33-1.2931.0582.4975.1155 1.013.1934 1.4805.1123.7488 1.087 1.3474 1.1993 2.0587.1391 1.0138.7614 1.7234 1.9805 2.174.4847.6681 1.2382.3299 1.801.6347.8984.4867 1.9091.2617 2.92.2617 1.0108 0 1.984.186 2.92-.3007.576-.2995 1.32.0311 1.8087-.5802 1.2254-.4494 1.8319-1.1633 1.9727-2.1895.1123-.7113 1.0479-1.3099 1.1602-2.0587.0633-.3799.1102-.802.1582-1.2032.0568.4994.13.9042.291 1.0157.674.4493 1.4978-2.2104 1.7599-2.5099.4118-.4492 1.7963-1.6078 1.8712-1.795.0748-.1872-2.8074-3.3327-4.0803-3.9318-1.1231-.5615-2.4568-.7226-2.9903-.705-.167.0054-.2454.0287-.2247.0624-1.1748-.308-2.6728-.4805-4.6095-.4805zm.0293.5c2.2035 0 3.8486.2253 5.01.6153.1335.0449.2387.098.3593.1465.6901.715 1.6233 1.831 2.0138 3.1173.0246.081.0405.1658.0625.248.0003.0013-.0003.0028 0 .004v.0039c.0453.77.3158 1.4169.2305 1.9903-.1536.9982-.2285 1.9726-.373 2.84l-.002.0039v.0039c-.0289.1922-.218.4762-.4786.8067-.2606.3305-.5955.7024-.6817 1.248v.006l-.0019.0038c-.1006.733-.4207 1.1997-1.17 1.5821.1252-.4447.2051-1.055.2051-1.963.0374-1.1231.0766-1.5722-.8594-2.6954-.7184-.9236-1.704-1.5746-2.793-1.8985-.1111-.3899-.7217-.836-1.551-.836-.8285 0-1.4147.422-1.5352.8204-1.1098.3182-2.116.9759-2.8458 1.9141-.936 1.1232-.8594 1.6097-.8594 2.6955 0 .9037.0795 1.5135.2031 1.961-.7697-.385-1.1078-.857-1.207-1.5802v-.0097c-.0875-.5541-.4371-.9235-.7071-1.254-.27-.3305-.4626-.6166-.4903-.8008l-.002-.004v-.0038c-.1444-.8669-.2196-1.8406-.373-2.838v-.002c-.0853-.5734.1833-1.2203.2285-1.9903v.0156c.0131-.1437.0173-.241.0254-.371.3604-1.1587 1.1531-2.1726 1.8048-2.8752a6.4135 6.4135 0 0 1 .7246-.289c1.1921-.3916 2.8593-.6153 5.0628-.6153zm-5.2092 3.805a1.6473 1.6473 0 0 0-1.6349 1.6484 1.6473 1.6473 0 0 0 1.6485 1.6466 1.6473 1.6473 0 0 0 .4415-.0606c.3487-.3747.7177-.7223 1.1113-1.041a1.6473 1.6473 0 0 0 .0938-.545 1.6473 1.6473 0 0 0-1.6466-1.6485 1.6473 1.6473 0 0 0-.0136 0zm10.2973 0a1.6473 1.6473 0 0 0-1.6368 1.6484 1.6473 1.6473 0 0 0 .1504.6836c.3125.2642.611.547.8945.8477a1.6473 1.6473 0 0 0 .6036.1153 1.6473 1.6473 0 0 0 1.6465-1.6466 1.6473 1.6473 0 0 0-1.6465-1.6485 1.6473 1.6473 0 0 0-.0117 0zm-9.8715.4863a.4118.4118 0 0 1 .4101.412.4118.4118 0 0 1-.4101.4122.4118.4118 0 0 1-.4122-.4121.4118.4118 0 0 1 .4122-.4121zm9.471 0a.4118.4118 0 0 1 .4122.412.4118.4118 0 0 1-.4121.4122.4118.4118 0 0 1-.4122-.4121.4118.4118 0 0 1 .4122-.4121zm-5.1095 1.4863a.1498.2995 17.23 0 1 .0293.004.1498.2995 17.23 0 1 .0547.33.1498.2995 17.23 0 1-.2325.2422.1498.2995 17.23 0 1-.0527-.33.1498.2995 17.23 0 1 .2012-.2462zm.6719.0215a.2995.1498 75.54 0 1 .205.254.2995.1498 75.54 0 1-.0703.328.2995.1498 75.54 0 1-.2207-.2519.2995.1498 75.54 0 1 .0703-.3281.2995.1498 75.54 0 1 .0157-.002zm-.3164.4766s.0358.226.1855.3008c.1498.0749.8614-.1504.8614-.1504-.337.262-.9727.263-.9727.338v.373c0 .4079.0263 1.4614-.0313 1.6856.8238.0045 2.09 1.1255 2.09 2.508v.0741c-.0375-1.3478-1.6091-2.4337-2.0958-2.4337-.4867 0-2.0603 1.0485-2.0978 2.4337v-.0742c0-1.3626 1.2326-2.47 2.0567-2.506-.0704-.5517-.0722-1.1372-.0722-1.6875v-.373c-.2145-.0954-.4322-.1714-.6563-.2364.1846.0326.371.0488.545.0488.1497-.0749.1875-.3008.1875-.3008zm-3.0412 1.3477a.1498.1498 0 0 1 .0078 0 .1498.1498 0 0 1 .1504.1504.1498.1498 0 0 1-.1504.1504.1498.1498 0 0 1-.1504-.1504.1498.1498 0 0 1 .1426-.1504zm1.1231 0a.1498.1498 0 0 1 .0078 0 .1498.1498 0 0 1 .1504.1504.1498.1498 0 0 1-.1504.1504.1498.1498 0 0 1-.1504-.1504.1498.1498 0 0 1 .1426-.1504zm3.67 0a.1498.1498 0 0 1 .0079 0 .1498.1498 0 0 1 .1504.1504.1498.1498 0 0 1-.1504.1504.1498.1498 0 0 1-.1504-.1504.1498.1498 0 0 1 .1426-.1504zm1.1232 0a.1498.1498 0 0 1 .0078 0 .1498.1498 0 0 1 .1504.1504.1498.1498 0 0 1-.1504.1504.1498.1498 0 0 1-.1504-.1504.1498.1498 0 0 1 .1426-.1504zm-5.6526.8985a.1498.1498 0 0 1 .0078 0 .1498.1498 0 0 1 .1484.1504.1498.1498 0 0 1-.1484.1504.1498.1498 0 0 1-.1504-.1504.1498.1498 0 0 1 .1426-.1504zm5.3908 0a.1498.1498 0 0 1 .006 0 .1498.1498 0 0 1 .1503.1504.1498.1498 0 0 1-.1504.1504.1498.1498 0 0 1-.1484-.1504.1498.1498 0 0 1 .1425-.1504Z"/></svg></div>
                    <div className="description">Pug</div>
                </div>
            </div>
            <div className="periodic-element social-media" data-description="JAVASCRIPT 을 이용해 코드를 제작,수정, 응용 할 수 있지만 아직 연습이 더 필요합니다!">
                <div className="periodic-element-inner">
                    <div className="title"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg></div>
                    <div className="description">Javascript</div>
                </div>
            </div>
            <div className="periodic-element intense-work" data-description="Making custom emojis for Slack 💪🏻">
                <div className="periodic-element-inner">
                    <div className="title">Sl</div>
                    <div className="description">Slack</div>
                </div>
            </div>
            <div className="periodic-element intense-work" data-description="Coming up with sassy commit messages 🔥">
                <div className="periodic-element-inner">
                    <div className="title">Ct</div>
                    <div className="description">Commits</div>
                </div>
            </div>
            <div className="periodic-element social-media" data-description="REACT 를 이용해 많은 Demo 프로젝트를 만들어 봤습니다! , 다양한 Hook을 사용해보았고 NPM을 응용해 작업할 수 있습니다">
                <div className="periodic-element-inner">
                    <div className="title"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg></div>
                    <div className="description">React</div>
                </div>
            </div>
            <div className="periodic-element social-media" data-description="TYPESCRIPT 를 가지고 Toy 프로젝트를 만들어 봤습니다! 하지만 Type을 정하고 , 제네릭을 유용하게 사용하지는 못합니다. TypeScript의 장점(Value Type 설정, 유효값 정의 등)을 알 고 있어서 더 열심히 공부하는 중입니다">
                <div className="periodic-element-inner">
                    <div className="title"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TypeScript</title><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg></div>
                    <div className="description">Typescript</div>
                </div>
            </div>
            <div className="periodic-element social-media" data-description="NEXTJS의 장점(Router 관리 등)을 활용해 프로젝트를 많이 만들어 볼려고합니다! 아직은 기술적으로 많이 부족합니다">
                <div className="periodic-element-inner">
                    <div className="title"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Next.js</title><path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"/></svg></div>
                    <div className="description">Nextjs</div>
                </div>
            </div>
            <div className="periodic-element fun-stuff" data-description="'Wikipedia Wormhole' is a thing. And it is dangerous 🐛">
                <div className="periodic-element-inner">
                    <div className="title">Wk</div>
                    <div className="description">Wikipedia</div>
                </div>
            </div>
            <div className="periodic-element fun-stuff" data-description="Choosing the right playlist. (If my Spotify is working... it's always not working)">
                <div className="periodic-element-inner">
                    <div className="title">Sp</div>
                    <div className="description">Spotify</div>
                </div>
            </div>
            <div className="periodic-element fun-stuff" data-description="I have zero cooking skills, so I watch cooking videos and never try cooking for real 🍳">
                <div className="periodic-element-inner">
                    <div className="title">Cv</div>
                    <div className="description">Cooking</div>
                </div>
            </div>
            <div className="periodic-element fun-stuff" data-description="Or any animal gifs, basically. 🐈🐕🦊🦔🦉🐍🐬🦄">
                <div className="periodic-element-inner">
                    <div className="title">Dg</div>
                    <div className="description">Dog Gifs</div>
                </div>
            </div>
            <div className="periodic-element intense-work" data-description="Creating GitHub issues, a.k.a. tossing problems which I can solve to the frontend team">
                <div className="periodic-element-inner">
                    <div className="title">Gt</div>
                    <div className="description">GitHub</div>
                </div>
            </div>
            <div className="periodic-element intense-work" data-description="Trying to get yarn working after an update. The main reason I toss issues to the frontend team.">
                <div className="periodic-element-inner">
                    <div className="title">Yn</div>
                    <div className="description">Yarn</div>
                </div>
            </div>
            <div className="periodic-element just-trying" data-description="Looking at amazing Dribbble 🏀 shots and internally die from the amount of talent/skill out there">
                <div className="periodic-element-inner">
                    <div className="title">Db</div>
                    <div className="description">Dribbble</div>
                </div>
            </div>
            <div className="periodic-element just-trying" data-description="A skill I'm trying to learn 🎨... and failing to learn 😛">
                <div className="periodic-element-inner">
                    <div className="title">Il</div>
                    <div className="description">Illustration</div>
                </div>
            </div><a className="periodic-element just-trying" data-description="Resident Designer. Keeping the diminishing flame of web design in me alive 🕯️" href="https://tellystats.com" target="_blank">
                <div className="periodic-element-inner">
                    <div className="title">Te</div>
                    <div className="description">TellyStats</div>
                </div>
            </a>
            <div className="periodic-element just-trying" data-description="I google every damn thing. Including movie spoilers. While watching the movie. Yes.">
                <div className="periodic-element-inner">
                    <div className="title">Gg</div>
                    <div className="description">Google</div>
                </div>
            </div><a className="periodic-element just-trying" data-description="I like spreadsheets so I create them for the smallest reasons 🧐" href="https://docs.google.com/spreadsheets/d/1Dim2nKRjgpkjA4miqTzcLPT68L0B5LU2aWZWF5hHYAc/edit#gid=0" target="_blank">
                <div className="periodic-element-inner">
                    <div className="title">Ex</div>
                    <div className="description">Excel</div>
                </div>
            </a>
            <div className="periodic-element intense-work" data-description="I still StackOverflow the simplest shit 'just to be sure'. Where will we be without it ❤️">
                <div className="periodic-element-inner">
                    <div className="title">So</div>
                    <div className="description">StackOv.</div>
                </div>
            </div>
            <div className="periodic-element intense-work" data-description="It's very much not my job, but sometimes I stick my hand into the Coding Projects jar 🍪 anyway">
                <div className="periodic-element-inner">
                    <div className="title">Cd</div>
                    <div className="description">Coding</div>
                </div>
            </div>
            <div className="periodic-element intense-work" data-description="Battling double columns in Notion">
                <div className="periodic-element-inner">
                    <div className="title">No</div>
                    <div className="description">Notion</div>
                </div>
            </div>

            <div className="periodic-element intense-work" data-description="Research &amp; Documentation nobody asks for 🤓📝">
                <div className="periodic-element-inner">
                    <div className="title">Rd</div>
                    <div className="description">Research</div>
                </div>
            </div>
            <div className="periodic-element intense-work" data-description="Stats. Data. Stats. Data. 📊 Just lots of reporting.">
                <div className="periodic-element-inner">
                    <div className="title">St</div>
                    <div className="description">Stats</div>
                </div>
            </div>
            <div className="periodic-element intense-work" data-description="Ads. Ads. Ads. If you've seen a Toggl ad, it was me. (Sorry)">
                <div className="periodic-element-inner">
                    <div className="title">Ad</div>
                    <div className="description">Ads</div>
                </div>
            </div>
        </div>
        <div className="legend-table">
            <div className="legend-table__wrapper">
                <span className="legend-table__marker social-media"></span>
                <span className="legend-table__text">Front-End Skill</span>
                <span className="legend-table__marker fun-stuff"></span>
                <span className="legend-table__text">Back-End Skill</span><br />    
                <span className="legend-table__marker just-trying"></span>
                <span className="legend-table__text">Design Tool</span>
                <span className="legend-table__marker intense-work"></span>
                <span className="legend-table__text">Etc</span>
               
            </div>
        </div>
        <footer><a href="https://twitter.com/meowlivia_" target="_blank"><i className="icon-social-twitter icons"></i></a><a href="https://github.com/oliviale" target="_blank"><i className="icon-social-github icons"></i></a><a href="https://dribbble.com/oliviale" target="_blank"><i className="icon-social-dribbble icons"></i></a></footer>
        </AboutDiv>
        </>
    )
}

export default About