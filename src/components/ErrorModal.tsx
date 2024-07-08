import React from 'react';

interface ErrorModalProps {
    message: string;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ message }) => {
    return (
        <div className="error-modal">
            <p>{message}</p>
        </div>
    );
};

export default ErrorModal;
