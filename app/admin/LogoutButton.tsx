"use client";

import { LogOut } from "lucide-react";
import { colors } from "../lib/helper";
import { adminLogoutAction } from "./login/components/actions";


export default function LogoutButton() {
    return (
        <button
            onClick={() => adminLogoutAction()}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold hover:scale-105 transition text-white"
            style={{
                backgroundColor: colors.red,
                fontFamily: "nunito, sans-serif",
            }}
        >
            <LogOut size={20} /> Logout
        </button>
    );
}
