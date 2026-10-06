const AddButton = ({color, onClick, item}) => {
  return (
      <button
          onClick={onClick}
          style={{
          backgroundColor: color, color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer'
      }}> 
          {item} - Add to Cart
        </button>       
    );

};

export default AddButton;