import MyButton from "./MyButton";
import MyInput from "./Myinput";
import './MyForm.css';

interface Props{
    onClick: () => void;
}

function MyForm(props: Props){
    return(
        <>
            <MyInput 
            type="text" 
            placeholder='Informação'
            bgColor='#f0f0f0' 
        /> 

        <MyInput 
            type='password'
            placeholder='Senha'
            bgColor='#f0f0f0'/>

        <MyButton onClick={props.onClick}><h4>Enviar!</h4></MyButton> 
        </>
    )
}

export default MyForm;