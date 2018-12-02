import React, { Component }                                                  from 'react'
import { Button, Form, FormGroup, Label, Input, ButtonGroup, ButtonToolbar } from 'reactstrap'

class Host extends Component {

    constructor () {
        super()
        this.state = {
            step: 1,
            min: 1,
            max: 10,
            form: {
                players: 1,
            },
        }
    }

    componentDidMount () {
        this.createButtons(this.state.max)
    }

    changePlayers (i) {
        const form   = this.state.form
        form.players = i + 1
        console.log(i)
        this.setState({form: form})
        this.createButtons(this.state.max)
    }

    createButtons (i) {
        let row = []
        for (let int = 0; int < i; int++) {
            row.push(
                <Button
                    color="primary"
                    key={int}
                    onClick={() => this.changePlayers(int)}
                    active={int === this.state.form.players - 1}>
                    {int + 1}
                </Button>,
            )
        }
        return this.setState({row: row})
    }

    changeValue () {

    }

    render () {
        return (
            <Form>
                <FormGroup>
                    <Label for="player_id">Player Name</Label>
                    <Input
                        type="text"
                        name="player_id"
                        id="player_id"
                        placeholder="" />
                </FormGroup>
                <FormGroup>
                    <Label for="game_id">Players</Label>
                    <ButtonToolbar>
                        <ButtonGroup>
                            {this.state.row}
                        </ButtonGroup>
                    </ButtonToolbar>
                </FormGroup>
                <button type="submit" className="btn btn-primary">Host</button>
            </Form>
        )
    }
}

export default Host