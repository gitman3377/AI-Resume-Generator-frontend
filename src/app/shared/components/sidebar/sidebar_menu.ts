import path from "node:path";
import { title } from "node:process";

export const mainmenu = 
[
    {
    path: "dashboard",
    title: "Home",
    extralink: true,
    class: "",
    categoryId: 1,
    icon: "fa-solid fa-house"
    },

    {
    path: "build",
    title: "Build Resume",
    extralink: true,
    class: "",
    categoryId: 1,
    icon: "fa-duotone fa-solid fa-gears"
    },

    {
    path: "myresume",
    title: "My Resume",
    extralink: true,
    class: "",
    categoryId: 1,
    icon: "fa-solid fa-file"
    }
]