// const PRODUCTS = [
//
//         {
//             id: 1,
//             title: "iphone blog news",
//             description: "IFA 2019: London startup F(x)tec unveils sliding keyboard  smartphone...",
//             images: ["https://image.freepik.com/psd-gratis/mockup-libreta-smartphone-pen-drive_1057-4665.jpg"] },
//         {
//             id: 2,
//             title: "macbook pro blog news",
//             description: "Laptops and netbooks continue to be hit hardest by the loss of consumer...",
//             images: ["https://image.freepik.com/free-photo/female-hands-typing-keyboard-netbook-close-up-view-business-concept_8353-6963.jpg" ]  },
//         {
//             id:3,
//             title: " x-box blog news",
//             description: "Xbox Game Pass Immerse yourself in a deep library of more than 100 best games...",
//             images: ["https://boards.fireden.net/foolfuuka/boards/v/image/1463/34/1463349375581.jpg"]
//
//         }
//     ]


// export const PRODUCTS_DETAILS = [
//     {
//         ...PRODUCTS.items__blog[0],
//         info: " THE MOBILE BLOG",
//         news__article: [
//             {
//                 id: 1,
//                 headline__article: "Iphone news",
//                 title__article: "New features for Iphone X",
//                 image__article: "https://images.wallpaperscraft.com/image/iphone_iphone_6_apple_101170_3840x2160.jpg",
//                 desc__article: "We expect Apple to unveil a brand-new iPhone in less than three weeks. And yet, oddly, " +
//                     "many of the rumors -- and nearly all of the most exciting rumors -- about forthcoming Apple phones do not " +
//                     " that particular model, expected to be called the iPhone 11. Rather, most of the really cool stuff is "
//             },
//             {
//                 id: 2,
//                 headline__article: "Huawei news",
//                 title__article: "New features for Huawei",
//                 image__article: "https://images.wallpaperscraft.com/image/huawei_ascend_mate_7_smartphone_display_100181_1280x720.jpg",
//                 desc__article:"In order to ease security concerns about Huawei, email broadcasts and letter-writing campaigns aim " +
//                     "to convince trade unions, labor unions, telecom carriers, and governments that Huawei is no threat." +
//                     "It took me an hour to argue against all the negative news stories"
//             },
//             {   id: 3,
//                 headline__article: "Xiomi news",
//                 title__article: "New features for Xiomi",
//                 image__article:"https://images.wallpaperscraft.com/image/xiaomi_mi4c_smartphone_display_105910_1280x720.jpg",
//                 desc__article:"The 9T isn't as high-speccd as the flagship model, powered by the Qualcomm Snapdragon 730, along " +
//                     "with 6GB RAM and 64/128GB storage. We suspect the performance between the two won't be drastically different, " +
//                     "however. And there's a 4,000mAh battery "
//             }
//         ]
//     },
//
//     {
//         ...PRODUCTS.items__blog[1],
//         info: "THE LAPTOP BLOG",
//         news__article: [
//             {
//                 id: 1,
//                 headline__article: "Macbook Pro news",
//                 title__article: "New features for Macbook",
//                 image__article: "https://images.wallpaperscraft.com/image/macbook_apple_laptop_keyboard_98696_300x168.jpg",
//                 desc__article: "We expect Apple to unveil a brand-new Macbook in less than three weeks. And yet, oddly, " +
//                     "many of the rumors -- and nearly all of the most exciting rumors -- about forthcoming Apple laptops do not " +
//                     " that particular model, expected to"
//             },
//
//             {
//                 id: 2,
//                 headline__article: "Asus news",
//                 title__article: "New design for Asus",
//                 image__article: "http://www.bhmpics.com/download/asus_n_series_notebook-1280x720.jpg",
//                 desc__article: "In order to ease security concerns about Asus, email broadcasts and letter-writing campaigns aim " +
//                     "to convince trade unions, labor unions, telecom carriers, and governments that Asus is no threat." +
//                     "It took me an hour to"
//             },
//             {   id: 3,
//                 headline__article: "Lenovo news",
//                 title__article: "New power of Lenovo",
//                 image__article: "https://i.ytimg.com/vi/BXMBvKPRsEo/maxresdefault.jpg",
//                 desc__article: "The 9T isn't as high-speccd as the flagship model, powered by the Qualcomm Snapdragon 730, along " +
//                     "with 6GB RAM and 64/128GB storage. We suspect the performance between the two won't be drastically different",
//             }
//         ]
//            },
//
//     {
//         ...PRODUCTS.items__blog[2],
//         info: " THE GAME CONSOLES BLOG",
//         news__article: [
//             {
//                 id: 1,
//                 headline__article: "Playstation 4 Pro news",
//                 title__article: "New playstation 4 design",
//                 image__article: "https://images.wallpaperscraft.com/image/console_sony_playstation_game_73456_300x168.jpg",
//                 desc__article: "As you begin this adventure, we introduce you to a gorgeous new area which we call " +
//                     "The Village of Cursed Blossoms. This is the opening level of Nioh 2, and as the name suggests, "
//             },
//
//             {
//                 id: 2,
//                 headline__article: "Playstation classic news ",
//                 title__article: "Compact power of  classic",
//                 image__article: "https://img.youtube.com/vi/nl2h8LDq_oI/maxresdefault.jpg",
//                 desc__article: "The console is the first of Sony's video game machines to be given this kind of compact " +
//                     "makeover. Nintendo has previously made mini versions of its NES and SNES consoles, which ",
//             },
//             {   id: 3,
//                 headline__article: "X-BOX news",
//                 title__article: "New games for X-BOX ",
//                 image__article: "https://b1.gmbox.ru/c/1226.815xp.jpg",
//                 desc__article: "The 9T isn't as high-speccd as the flagship model, powered by the Qualcomm Snapdragon 730, along " +
//                     "with 6GB RAM and 64/128GB storage. We suspect the performance between"
//             }
//         ]
//     },
// ];

// export const getProductsDetailsById = (productId) => PRODUCTS.find(({id}) => id === +productId);
//
// export default PRODUCTS