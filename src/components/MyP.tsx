import './MyForm.css';

  function MyP({ children, className, style }) {
    return <p className={className} style={style}>{children}</p>;
  }  

  export default MyP;