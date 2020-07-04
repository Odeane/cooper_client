import React from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginForm = ({ submitFormHandler }) => {



    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='green' textAlign='center'>
                    <Image src='https://codegreenhealth.com/wp-content/uploads/sites/85/2018/01/cardiogram2.png' /> Log-in to your account
                </Header>



                <Form size='large' onSubmit={submitFormHandler} id="login-form">
                    <Segment stacked>

                        <label>Email</label>
                        <input fluid icon='user' iconPosition='left' placeholder='E-mail address' name="email" type="email" id="email"></input>

                        <label>Password</label>
                        <input fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            name="password" type="password" id="password"></input>


                        <Button color='green' fluid size='large' id="submit">Submit</Button>
                    </Segment>


                </Form>



                <Message>
                    <p>  Ready? Lets go</p>
                </Message>
            </Grid.Column>
        </Grid>
    );
};

export default LoginForm;