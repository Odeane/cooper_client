import React from "react";
import { Form, Header, Segment, Image } from 'semantic-ui-react';





const InputFields = ({ onChangeHandler }) => {


  return (

    
  <div>
    <Form>
        <Header as='h1' block attached='top' textAlign='center'>
          <Image src='https://codegreenhealth.com/wp-content/uploads/sites/85/2018/01/cardiogram2.png' />
          Cooper Fitness
      </Header>
        <Segment attached textAlign='center'>
          Get in Shape, Stay in Shape.
        </Segment>

        <br />
        <br />
        <br />
      <Form.Group widths='equal'>
        <Form.Input fluid label='Distance' placeholder='Distance' onChange={onChangeHandler} name="distance" id="distance" />
        <Form.Input fluid label='Age' placeholder='Age' onChange={onChangeHandler} name="age" id="age" />
      </Form.Group>

      <Form.Group widths='equal'>
      <select onChange={onChangeHandler} name="gender" id="gender">
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
      </Form.Group>
      </Form>
  
    </div>

  );
};
export default InputFields;