import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startDeleteExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
    onSubmit = (update) => {
        this.props.startEditExpense(this.props.expense.id, update);
        this.props.history.push('/dashboard'); //redirects to the mentioned url
    };

    onClick = () => {
        this.props.startDeleteExpense({ id: this.props.expense.id });
        this.props.history.push('/dashboard'); //redirects to the mentioned url
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
                    <button className="button button--secondary" onClick={this.onClick}>Delete</button>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        startEditExpense: (id, update) => dispatch(startEditExpense(id, update)),
        startDeleteExpense: (id) => dispatch(startDeleteExpense(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);