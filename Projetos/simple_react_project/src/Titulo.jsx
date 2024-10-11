import { useState } from "react"

function Titulo({cor}){
    //let nome = 'Pedro'
    const [texto, setTexto] = useState('Titulo inicial')
    const [inputText, setInputText] = useState('alterado via input')
    //onst soma = 10 + 10
    //const urlImg = "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F235984%2Fplaca-de-video-asrock-amd-radeon-rx-6600-cld-8g-8gb-90-ga2rzz-00uanf_1634738812_g.jpg&w=640&q=100"
    //style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}
    function clicou(e){
        setTexto(inputText)
    }

    return (
    <div >
        <h1 style={{color: cor}}>{texto}</h1>
        <p1 style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            butões:
            <button style={{display:'flex}}'}} onClick={() => {setTexto('mudei via butao1')}}>
            Button1
        </button>
        <button style={{display:'flex}}'}} onClick={() => {setTexto('mudei via butao2')}}>
            Button2
        </button>
        <button style={{display:'flex}}'}} onClick={clicou}>
            Mudar via input
        </button>
        input texto:
        </p1>
        <input type = 'text' style={{display: 'flex', alignItems: 'flex-start'}} onChange={(e)=>{setInputText(e.target.value)}} />
    </div>
    )
}

export default Titulo