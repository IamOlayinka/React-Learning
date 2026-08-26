

const CompanyContent = (props) => {


const styleContent = props.name === 'Amazon' ? {
    color: 'blue',
    textAlign: 'center',
    margin: '20px'
}: props.name === 'Apple' ? {
    color: 'green',
    textAlign: 'center',
    margin: '20px'
} : {
    color: 'lightblue ',
    textAlign: 'center',
    margin: '20px'
};


const Styleheader = {
    fontSize: '1.6rem',
    marginBottom: '10px'
} 


const Styleparagraph = props.name === 'Amazon' ? {
    fontSize: '1.2rem',
    color: 'blue'
} : props.name === 'Apple' ? {
    fontSize: '1.2rem',
    color: 'green'
} : {
    fontSize: '1.2rem',
    color: 'lightblue '
};


  return (
      <div style={styleContent}>
          <h1 style={Styleheader}>{props.name}</h1>   
          <p style={Styleparagraph}>{props.description}</p>
          {props.children && <p style={Styleparagraph}>{props.children}</p>}
        </div>  
    );
};

export default CompanyContent;