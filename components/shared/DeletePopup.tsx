// components/DeletePopup.tsx
'use client'
import { useEffect } from 'react';

interface DeletePopupProps {
    onClose: () => void;
    setPopupOpen : (value : boolean) => void;
}

const DeletePopup: React.FC<DeletePopupProps> = ({ onClose , setPopupOpen }) => {
    useEffect(() => {
        console.log('inside');
        
        const handleBackButton = (event: PopStateEvent) => {
            console.log('inside back button of browser');
            setPopupOpen(false);
        };

        window.addEventListener('popstate', handleBackButton);

        return () => {
            window.removeEventListener('popstate', handleBackButton);
        };
    }, [onClose]);

    return (
        <div className="popup">
            {/* Popup content */}
            <button onClick={onClose}>Close Popup</button>
        </div>
    );
};

export default DeletePopup;
