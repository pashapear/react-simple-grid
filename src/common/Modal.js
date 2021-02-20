import React from 'react';
import styled from 'styled-components';


const ModalBackdrop = styled.div`
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto;
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.8);
`;
const ModalBody = styled.div`
    position: relative;
    margin: 15% auto; 
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
`;

export const Modal = ({ children, onClose }) => <ModalBackdrop>
    <ModalBody>
        <CloseButton onClick={onClose}>X</CloseButton>
        {children}
    </ModalBody>
</ModalBackdrop>;
