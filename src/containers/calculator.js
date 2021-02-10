import { Component } from 'react';
import { Button } from '../components/button';
import Display from '../components/display';




class Calculator extends Component {
    render() {
        return(
            <div className={"calculator"}>
                <Display value={"123456"}/>
                <button Display={"1"}/>
                <button Display={"2"}/>
                <button Display={"3"}/>
                <button Display={"4"}/>
                <button Display={"5"}/>
                <button Display={"6"}/>
                <button Display={"7"}/>
                <button Display={"8"}/>
                <button Display={"9"}/>
                <button Display={"0"}/>
                <button Display={"+"}/>
                <button Display={"-"}/>
                <button Display={"="}/>
                <button Display={"C"}/>
            </div>
        )
    }
}

export default Calculator;