'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react"
// 1. initial conponent
// 2. tital
// 3. description
// 4. isConfirm

const ConfirmDialog = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        console.log('inside');

        const handleBackButton = (event: PopStateEvent) => {
            console.log('inside back button of browser');
            setIsOpen(false);
        };

        window.addEventListener('popstate', handleBackButton);


        return () => {
            window.removeEventListener('popstate', handleBackButton);
        };

    }, [isOpen])

    const handleOpen = () => {
        setIsOpen(true);
        window.history.pushState({ popupOpen: true }, '');
    }

    const handleClose = () => {
        setIsOpen(false);
        window.history.back();
    };

    const confirm = () => {
        setIsOpen(false);
        // set isConfrm = true
    }


    return (
        <Dialog open={isOpen} onOpenChange={
            (open: boolean) => open ? handleOpen() : handleClose()
        } >
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className=" flex justify-between w-full sm:justify-between">
                    <DialogClose asChild>
                        <button>
                            Close
                        </button>
                    </DialogClose>
                    <button onClick={confirm} >Delete</button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ConfirmDialog