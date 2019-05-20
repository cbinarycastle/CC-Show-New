import * as React from 'react';
import GuidelineModel from '../../models/Guideline';
import styled from 'styled-components';

const Line = styled.div`
    position: absolute;
    ${(props: { vertical: boolean }) => props.vertical ? `
        height: 2px;
        width: 2px;
        border-left: dashed #038AFD 2px;
    ` : `
        width: 2px;
        height: 2px;
        border-top: dashed #038AFD 2px;
    `}
`

interface Props {
    attr: GuidelineModel
}

export const Guideline: React.FC<Props> = ({height, style}) => {
    const vertical = (!!height);
    return (
        <Line vertical={vertical} style={style}/>
    )
}