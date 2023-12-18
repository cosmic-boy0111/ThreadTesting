// pages/index.tsx
'use client'
import { useState } from 'react';
import DeletePopup from './DeletePopup';



const Home: React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleDeleteButtonClick = () => {
    // Open the popup and add a history state
    setPopupOpen(true);
    window.history.pushState({ popupOpen: true }, ''); // Add state to indicate the popup is open
  };

  const handleClosePopup = () => {
    // Close the popup and navigate back without affecting the main page
    setPopupOpen(false);
    window.history.back();
  };

  return (
    <div>
      <h1>Your Main Content</h1>

      <button onClick={handleDeleteButtonClick}>Open Popup</button>

      {isPopupOpen && <DeletePopup onClose={handleClosePopup} setPopupOpen={setPopupOpen} />}

      {/* <Dialog open={isPopupOpen}>
            <DialogTrigger onClick={handleDeleteButtonClick} >Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog> */}
      
    </div>
  );
};

export default Home;
