import React from 'react';
import { ErrorContainer, ErrorText } from './style';

type IProps = {
    children: string;
};

export default function ErrorMessage({ children = 'Ocorreu um erro' }: IProps) {
    return (
        <ErrorContainer>
            <ErrorText>{children}</ErrorText>
        </ErrorContainer>
    );
}
