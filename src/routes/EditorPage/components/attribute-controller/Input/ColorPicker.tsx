import * as React from 'react';
import styled from 'styled-components';
import { SketchPicker, ColorResult } from 'react-color';

const ColorRound = styled.div`
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    float: right;
    display: inline-block;
    ${(props: ({ currentColor?: string })) => (!props.currentColor || props.currentColor === '#fff') ? `
        border: 1px solid #5D87B5;
    ` : `
        background-color: ${props.currentColor};
    `}
`
const PickerContainer = styled.div`
    position: relative;
    ${(props: { visible: boolean }) => `
        display: ${props.visible ? 'block' : 'none'};
    `}
`
const PickerContext = styled.div`
    position: absolute;
    right: 0;
    top: 25px;
    z-index: 10;
`
interface Props {
    color?: string,
    onColorChange: (color: string) => void
}

export const ColorPicker: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({ color, onColorChange, ...divProps }) => {
    const [pickerVisible, setVisiblePicker] = React.useState(false);
    const togglePicker = React.useCallback(() => setVisiblePicker(!pickerVisible), [pickerVisible, setVisiblePicker]);
    const changeColor = React.useCallback((colorResult: ColorResult) => onColorChange(colorResult.hex), [onColorChange]);
    const pickerRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (!!pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
                setVisiblePicker(false);
            }
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [pickerRef])
    return (
        <>
            <ColorRound onClick={togglePicker} currentColor={color} {...divProps} />
            <PickerContainer visible={pickerVisible} ref={pickerRef}>
                <PickerContext>
                    <SketchPicker color={color} onChangeComplete={changeColor} />
                </PickerContext>
            </PickerContainer>
        </>
    )
}

export default ColorPicker;