export const navbar = {
    title: "FoodieWeb",
    links: [
        {
            name: "Home",
            path: "Home"
        },
        {
            name: "Dishes ▾",
            path: "Dishes",
            sublinks: [
                { title: "Spicy", path: "/spicy" },
                { title: "Tasty", path: "/tasty" },
                { title: "Delicious", path: "/delicious" },
                { title: "Crispy", path: "/crispy" },
            ]
        },
        {
            name: "About",
            path: "About"
        },
        {
            name: "Menu",
            path: "Menu"
        },
        {
            name: "Rewiews",
            path: "Reviews"
        },
    ]
}