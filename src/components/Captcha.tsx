import React, { useState, useEffect } from "react";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";

const Captcha: React.FC = () => {
    const [msg, setMsg] = useState('');
    const [msgColor, setMsgcolor] = useState('')

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleClick = () => {
        const captchaInput = (document.getElementById('captcha-value') as HTMLInputElement | null);
        const value = captchaInput?.value

        if (validateCaptcha(value) !== true) {
            setMsgcolor('text-red-500');
            setMsg("Wrong Captcha.");
            loadCaptchaEnginge(6);
            (captchaInput as HTMLInputElement).value = '';
        }
        else {
            setMsgcolor('text-lime-700');
            setMsg("Correct Captcha.");
        };
    }

    return (
        <>
            <div className="w-96">
                <form>
                    <div className="flex flex-row space-x-4">
                        <LoadCanvasTemplate reloadText="Reset" reloadColor="indigo" className="bg-red-500" />
                        <div className="flex flex-col space-y-2">
                            <input type="text" id="captcha-value" name="captcha-value" required />
                            <button type="button" className="rounded-md bg-indigo-300 text-base font-medium text-black hover:ring-1 hover:ring-indigo-500 hover:ring-offset-1" onClick={handleClick}>verify</button>
                        </div>
                    </div>
                </form>
                <div className="flex justify-end">
                    <p className={`text-left italic ${msgColor}`}>{msg}</p>
                </div>
            </div>
        </>

    )
}

export default Captcha

