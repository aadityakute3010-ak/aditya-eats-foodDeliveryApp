import spiceRouteImg from '../assets/images/SpiceRouteHotelimg.avif';

export const restaurants = [

    // ======================================================
    // THE SPICE ROUTE
    // ======================================================

    {
        id: 1,
        name: "The Spice Route",
        rating: 4.5,
        deliveryTime: 30,
        cuisines: ["North Indian", "Biryani"],
        location: "Pune, Maharashtra",
        costForTwo: "₹500 for two",
        image: spiceRouteImg,
        discount: "60% OFF",
        deliveryFee: "Free Delivery",

        menu: [

            {
                id: 101,
                name: "Chicken Biryani",
                price: 349,
                description: "Aromatic basmati rice cooked with spicy chicken.",
                image: "https://images.unsplash.com/photo-1701579231349-d7459c40919d?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 102,
                name: "Butter Chicken",
                price: 399,
                description: "Creamy tomato gravy with juicy chicken.",
                image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 103,
                name: "Paneer Tikka",
                price: 279,
                description: "Smoky grilled paneer cubes with spices.",
                image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 104,
                name: "Dal Makhani",
                price: 249,
                description: "Slow-cooked creamy black lentils.",
                image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 105,
                name: "Garlic Naan",
                price: 99,
                description: "Soft naan brushed with garlic butter.",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 106,
                name: "Mutton Rogan Josh",
                price: 499,
                description: "Tender mutton in rich Kashmiri gravy.",
                image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 107,
                name: "Veg Pulao",
                price: 229,
                description: "Flavorful rice cooked with vegetables.",
                image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 108,
                name: "Tandoori Chicken",
                price: 399,
                description: "Classic tandoor grilled chicken.",
                image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 109,
                name: "Chole Bhature",
                price: 199,
                description: "Punjabi chole served with bhature.",
                image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 110,
                name: "Gulab Jamun",
                price: 149,
                description: "Milk-solid dumplings soaked in syrup.",
                image: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
        ],
    },

    // ======================================================
    // BELLA ITALIA
    // ======================================================

    {
        id: 2,
        name: "Bella Italia",
        rating: 4.8,
        deliveryTime: 45,
        cuisines: ["Italian", "Pizzas", "Pastas"],
        location: "Mumbai, Maharashtra",
        costForTwo: "₹900 for two",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop",
        discount: "40% OFF",
        deliveryFee: "₹40 Delivery",

        menu: [

            {
                id: 201,
                name: "Margherita Pizza",
                price: 299,
                description: "Classic mozzarella and basil pizza.",
                image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 202,
                name: "Pepperoni Pizza",
                price: 449,
                description: "Loaded with spicy pepperoni slices.",
                image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 203,
                name: "White Sauce Pasta",
                price: 329,
                description: "Creamy Alfredo pasta with herbs.",
                image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 204,
                name: "Lasagna",
                price: 399,
                description: "Layered pasta with cheese and meat sauce.",
                image: "https://images.unsplash.com/photo-1619895092538-128341789043?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 205,
                name: "Bruschetta",
                price: 199,
                description: "Toasted bread topped with tomatoes.",
                image: "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 206,
                name: "Garlic Bread",
                price: 149,
                description: "Freshly baked garlic butter bread.",
                image: "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },

            {
                id: 207,
                name: "Risotto",
                price: 379,
                description: "Creamy Italian rice with parmesan.",
                image: "https://images.unsplash.com/photo-1633436375795-12b3b339712f?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 208,
                name: "Four Cheese Pizza",
                price: 499,
                description: "Pizza topped with four rich cheeses.",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 209,
                name: "Tiramisu",
                price: 249,
                description: "Coffee-flavored Italian dessert.",
                image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 210,
                name: "Ravioli",
                price: 379,
                description: "Stuffed pasta pockets in creamy sauce.",
                image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
            },
        ],
    },

    // ======================================================
    // BURGER CARTEL
    // ======================================================

    {
        id: 3,
        name: "Burger Cartel",
        rating: 4.2,
        deliveryTime: 25,
        cuisines: ["Burgers", "Fast Food", "Beverages"],
        location: "Bangalore, Karnataka",
        costForTwo: "₹400 for two",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2000&auto=format&fit=crop",
        discount: "50% OFF",
        deliveryFee: "Free Delivery",

        menu: [

            {
                id: 301,
                name: "Classic Cheeseburger",
                price: 199,
                description: "Juicy beef patty with melted cheese.",
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 302,
                name: "Chicken Burger",
                price: 229,
                description: "Crispy chicken burger with mayo.",
                image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 303,
                name: "Veggie Burger",
                price: 179,
                description: "Loaded veggie burger with sauces.",
                image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 304,
                name: "French Fries",
                price: 129,
                description: "Crispy golden salted fries.",
                image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 305,
                name: "Chicken Wings",
                price: 299,
                description: "Spicy crispy chicken wings.",
                image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 306,
                name: "Onion Rings",
                price: 149,
                description: "Crunchy fried onion rings.",
                image: "https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 307,
                name: "Cold Coffee",
                price: 149,
                description: "Refreshing chilled coffee drink.",
                image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 308,
                name: "Chocolate Shake",
                price: 179,
                description: "Creamy chocolate milkshake.",
                image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 309,
                name: "Double Patty Burger",
                price: 329,
                description: "Double loaded burger with cheese.",
                image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 310,
                name: "Nachos",
                price: 199,
                description: "Cheesy loaded nachos platter.",
                image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=1200&auto=format&fit=crop",
            },
        ],
    },

    // ======================================================
    // DRAGON WOK
    // ======================================================

    {
        id: 4,
        name: "Dragon Wok",
        rating: 4.6,
        deliveryTime: 35,
        cuisines: ["Chinese", "Noodles", "Asian"],
        location: "Hyderabad, Telangana",
        costForTwo: "₹700 for two",
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=2000&auto=format&fit=crop",
        discount: "30% OFF",
        deliveryFee: "₹25 Delivery",

        menu: [
            {
                id: 401,
                name: "Hakka Noodles",
                price: 249,
                description: "Classic stir-fried hakka noodles.",
                image: "https://images.unsplash.com/photo-1617622141675-d3005b9067c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFra2ElMjBub29kbGVzfGVufDB8fDB8fHww",
            },

            {
                id: 402,
                name: "Schezwan Fried Rice",
                price: 279,
                description: "Spicy fried rice with vegetables.",
                image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 403,
                name: "Chicken Manchurian",
                price: 329,
                description: "Crispy chicken tossed in spicy sauce.",
                image: "https://plus.unsplash.com/premium_photo-1675864532625-60efd11cde54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2hpY2tlbiUyME1hbmNodXJpYW58ZW58MHx8MHx8fDA%3D",
            },

            {
                id: 404,
                name: "Spring Rolls",
                price: 199,
                description: "Crunchy vegetable spring rolls.",
                image: "https://images.unsplash.com/photo-1695712641569-05eee7b37b6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3ByaW5nJTIwUm9sbHN8ZW58MHx8MHx8fDA%3D",
            },

            {
                id: 405,
                name: "Dim Sums",
                price: 349,
                description: "Steamed dumplings with spicy dip.",
                image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 406,
                name: "Hot & Sour Soup",
                price: 179,
                description: "Tangy spicy Asian soup.",
                image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 407,
                name: "Kung Pao Chicken",
                price: 379,
                description: "Spicy chicken with peanuts.",
                image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 408,
                name: "Chilli Paneer",
                price: 269,
                description: "Paneer tossed in spicy Chinese sauce.",
                image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 409,
                name: "Veg Fried Rice",
                price: 229,
                description: "Flavorful wok-tossed rice.",
                image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 410,
                name: "Honey Chilli Potatoes",
                price: 219,
                description: "Sweet spicy crispy potatoes.",
                image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
            },
        ],
    },

    // ======================================================
    // TACO FIESTA
    // ======================================================

    {
        id: 5,
        name: "Taco Fiesta",
        rating: 4.4,
        deliveryTime: 28,
        cuisines: ["Mexican", "Wraps", "Snacks"],
        location: "Delhi, India",
        costForTwo: "₹600 for two",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2000&auto=format&fit=crop",
        discount: "55% OFF",
        deliveryFee: "Free Delivery",

        menu: [
            {
                id: 501,
                name: "Chicken Taco",
                price: 199,
                description: "Crispy taco stuffed with chicken.",
                image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 502,
                name: "Veg Burrito",
                price: 249,
                description: "Mexican wrap with veggies and rice.",
                image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 503,
                name: "Loaded Nachos",
                price: 229,
                description: "Cheesy nachos with jalapenos.",
                image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 504,
                name: "Quesadilla",
                price: 279,
                description: "Cheesy grilled tortilla.",
                image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 505,
                name: "Mexican Rice Bowl",
                price: 299,
                description: "Rice bowl loaded with beans and veggies.",
                image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 506,
                name: "Chicken Wrap",
                price: 249,
                description: "Loaded chicken tortilla wrap.",
                image: "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 507,
                name: "Churros",
                price: 179,
                description: "Sweet cinnamon sugar churros.",
                image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 508,
                name: "Tortilla Chips",
                price: 149,
                description: "Crunchy chips with salsa dip.",
                image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 509,
                name: "Beef Taco",
                price: 299,
                description: "Spicy beef taco with cheese.",
                image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 510,
                name: "Mexican Corn",
                price: 189,
                description: "Creamy spicy corn snack.",
                image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
            },
        ],
    },

    // ======================================================
    // SUSHI ZEN
    // ======================================================

    {
        id: 6,
        name: "Sushi Zen",
        rating: 4.9,
        deliveryTime: 40,
        cuisines: ["Japanese", "Sushi", "Seafood"],
        location: "Chennai, Tamil Nadu",
        costForTwo: "₹1200 for two",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2000&auto=format&fit=crop",
        discount: "20% OFF",
        deliveryFee: "₹60 Delivery",

        menu: [
            {
                id: 601,
                name: "Salmon Sushi",
                price: 499,
                description: "Fresh salmon sushi rolls.",
                image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 602,
                name: "Tuna Nigiri",
                price: 549,
                description: "Classic tuna nigiri sushi.",
                image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 603,
                name: "Ramen Bowl",
                price: 399,
                description: "Japanese ramen with broth and noodles.",
                image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 604,
                name: "Tempura Prawns",
                price: 449,
                description: "Crispy Japanese tempura prawns.",
                image: "https://images.unsplash.com/photo-1736381734216-74bc8644d3ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VGVtcHVyYSUyMFByYXduc3xlbnwwfHwwfHx8MA%3D%3D",
            },

            {
                id: 605,
                name: "Miso Soup",
                price: 199,
                description: "Traditional Japanese soup.",
                image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 606,
                name: "California Roll",
                price: 399,
                description: "Crab and avocado sushi roll.",
                image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 607,
                name: "Teriyaki Chicken",
                price: 429,
                description: "Chicken glazed with teriyaki sauce.",
                image: "https://plus.unsplash.com/premium_photo-1661419883163-bb4df1c10109?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGVyaXlha2klMjBDaGlja2VufGVufDB8fDB8fHww",
            },

            {
                id: 608,
                name: "Sashimi Platter",
                price: 699,
                description: "Assorted fresh sashimi platter.",
                image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 609,
                name: "Udon Noodles",
                price: 349,
                description: "Japanese udon noodles in broth.",
                image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1200&auto=format&fit=crop",
            },

            {
                id: 610,
                name: "Matcha Ice Cream",
                price: 249,
                description: "Japanese green tea ice cream.",
                image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1200&auto=format&fit=crop",
            },
        ],
    },
];