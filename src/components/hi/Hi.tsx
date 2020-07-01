import React, {ButtonHTMLAttributes, ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react';
import {v1} from "uuid";
import s from './Hi.module.css'

export function Hello() {

    let [title, setTitle] = useState<string>("");
    let [people, setPeople] = useState([] as Array<{ name: string, id: string }>);

    const sayHello = () => {
        if (title.trim() !== "") {
            alert('Hi ' + title);
        }
        setTitle("");
        let newArr = [...people, {name: title, id: v1()}];
        setPeople(newArr)
    };


    const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value);
    const onKeyPressSayHello = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            sayHello()
        }
    };

    function InputNya (props: InputNyaPropsType) {
        const {onEnter, error, ...restProps} = props;

        // const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        //     if (e.charCode = 13) onEnter && onEnter();
        // };

        return (
            <>
                <input className={s.inputNya} onKeyPress={onKeyPressSayHello}  onChange={onTitleChange} {...restProps} type="text" value={title}/>
                {error ? <span>{error}</span> : null}
            </>
        );
    }

    function ButtonNya (props: ButtonNyaPropsType) {
        return (
        <button className={s.buttonNya} {...props} onClick={sayHello}>SayHello</button>
        )
    }

    return (
        <div>
            <div>
                <InputNya/>
                <input
                    type="text"
                    value={title}
                    onChange={onTitleChange}
                    onKeyPress={onKeyPressSayHello}
                />

                <ButtonNya />

                <span>{people.length}</span>
            </div>
            <div>
                {
                    people.map(el => <div>{el.name}</div>)
                }
            </div>
        </div>
    )

}




export type InputNyaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { onEnter?: () => void, error?: string };

function InputNya (props: InputNyaPropsType) {
    const {onEnter, error, ...restProps} = props;

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode = 13) onEnter && onEnter();
    };

    return (
        <>
            <input className={s.inputNya} onKeyPress={onKeyPress}  {...restProps} type="text"/>
            {error ? <span>{error}</span> : null}
        </>
    );
}


export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

// function ButtonNya (props: ButtonNyaPropsType) {
//     return <button className={s.buttonNya} {...props}/>
// }









