import Form from 'react-bootstrap/Form';

const ItemsSelect = () => {
    return (
        <Form.Select aria-label="Default select example">
            <option>Select Items</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
    );
}

export default ItemsSelect;