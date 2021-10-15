
//state is separated by a per component instance basis
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    //use state hooks should be called specifically in non nested functions and inside components;
    // const [title, setTitle] = useState(props.title);
    // console.log('ExpenseItem evaluated by React.')

    // const clickHandler = () => {
    //     setTitle('Updated!')
    //     console.log('title')
    // }
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">{props.amount}</div>
                </div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
            </Card>
        </li>
    )
}

export default ExpenseItem
