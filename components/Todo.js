import React, { Component } from 'react'
import styled from 'styled-components'
import { withStateHandlers } from 'recompose';
import Row from 'react-bootstrap/Row'

const ItemRow = styled.div`
  position: relative;
  box-sizing: border-box;
  &.complete {
    color: green;
    text-decoration: line-through;
  }
`

const Item = ({ title, complete }) => (
    <ItemRow>
        <li><strong checked={complete}
            onClick={el => el.target.offsetParent.classList.toggle('complete')}>{title}</strong></li>
    </ItemRow>
)

export default class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todo_list: [
                { title: 'Video making + photography', complete: false, id: 1 },
                { title: 'C++', complete: false, id: 2 },
                { title: 'Advanced Python', complete: false, id: 3 }
            ]
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (document.getElementById('todo-title').value == '') {
            alert('Please enter an item!')
        } else {
            const todo_list = this.state.todo_list
            todo_list.push({
                title: document.getElementById('todo-title').value,
                complete: false,
                id: todo_list[todo_list.length - 1] + 1
            })
            this.setState({ todo_list })
            document.getElementById('todo-title').value = '' // reset to empty
        }
    }

    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <Row>
                        <input style={{width: '80%'}} className="form-control input-todo" type="text" placeholder="Learn NextJS!" id="todo-title" />
                        <button type="submit" class="btn btn-primary input-todo" onClick={this.handleClick}>Submit</button>
                    </Row>
                </div>

                <ul>
                    {this.state.todo_list.map(x => <Item title={x.title} complete={x.complete} key={x.id} />)}
                </ul>
            </div>
        )
    }
}