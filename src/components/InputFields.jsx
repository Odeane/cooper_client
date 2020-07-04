import React from "react";
import { Form, Input} from 'semantic-ui-react'

const InputFields = ({ onChangeHandler }) => {
  return (
    <Form>
      
      <Form.Group widths='equal'>
      
      
        <Form.Input fluid label='Distance' placeholder='Distance' onChange={onChangeHandler} name="distance" id="distance"/>
          
      
        
       
        
        <Form.Input fluid label='Age' placeholder='Age'  onChange={onChangeHandler} name="age" id="age"/>
     
      </Form.Group>
      
    
        
      
        <select onChange={onChangeHandler} name="gender" id="gender">
        <option value="female">Female</option>
        <option value="male">Male</option>
          </select>
      
        
        
      
    </Form>
  );
};
export default InputFields;