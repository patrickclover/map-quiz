import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Join extends Component {
    render () {
        return (
            <Form>
                <FormGroup>
                    <Label for="game_id">Game ID</Label>
                    <Input
                        type="text"
                        name="game_id"
                        id="game_id"
                        placeholder="" />
                </FormGroup>
                <FormGroup>
                    <Label for="player_id">Player Name</Label>
                    <Input
                        type="text"
                        name="player_id"
                        id="player_id"
                        placeholder="" />
                </FormGroup>
                <button type="submit" className="btn btn-primary">Join</button>
            </Form>
        )
    }
}

export default Join