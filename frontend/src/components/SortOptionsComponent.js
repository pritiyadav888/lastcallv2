import Form from 'react-bootstrap/Form';
const SortOptionsComponent = () =>{
    return (
        <Form.Select aria-label="Default select example">
          <option>Sort By</option>
          <option value="price_1">Price: Low to High</option>
          <option value="price_-1">Price: High to Low</option>
          <option value="name_1">Name A-Z</option>
          <option value="name_-1">Name Z-A</option>
        </Form.Select>
      );
};

export default SortOptionsComponent