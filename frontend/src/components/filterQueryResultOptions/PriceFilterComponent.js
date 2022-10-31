import Form from 'react-bootstrap/Form';

const PriceFilterComponent = () =>{
    return (
        <>
          <Form.Label><span className="fw-bold">Price no greater than:</span>$50</Form.Label>
          <Form.Range min={10} max={500} step={10}/>
        </>
      );

}

export default PriceFilterComponent