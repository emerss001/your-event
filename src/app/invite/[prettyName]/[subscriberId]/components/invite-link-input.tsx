"use client";

import IconButton from "@/app/_components/iconButton";
import { InputRoot, InputIcon, InputField } from "@/app/_components/input";
import { Link, Copy } from "lucide-react";

interface InviteLinkInputProps {
    inviteLink: string;
}

const InviteLinkInput = ({ inviteLink }: InviteLinkInputProps) => {
    function copyInviteLink() {
        navigator.clipboard.writeText(inviteLink);
    }

    return (
        <InputRoot>
            <InputIcon>
                <Link className="size-5" />
            </InputIcon>
            <InputField readOnly defaultValue={inviteLink} />
            <IconButton className="-mr-2" onClick={copyInviteLink}>
                <Copy className="size-5" />
            </IconButton>
        </InputRoot>
    );
};

export default InviteLinkInput;
