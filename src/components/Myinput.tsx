//import './MyInput.css';
import './MyButton.tsx';


interface Props{
    type: string;
    placeholder?: string;
    bgColor?: string
}

function MyInput(props: Props){
    return(
        <input
        type={props.type} //utilizar parâmetros, expecificar no App.tsx        
        placeholder={props.placeholder} //fornece um texto temporário ou uma dica para o usuário sobre o que deve ser inserido no campo. (oq vai ficar dentro da caixinha)
        style={{backgroundColor: `${props.bgColor}`}} /> // a estilização/ para mudar a cor 
    ) // todos esses "props vão diretamente para o App.tsx depois de "puxar" pra lá, parecido com a estilização.
}

export default MyInput